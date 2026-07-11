const SOURCE = "https://raw.githubusercontent.com/drMurtadha/utm-agentic-ai-training/agent/initial-training-materials/04_Hands-on-Exercises/copy-paste-prompt-pack.md";
const container = document.querySelector("#prompt-content");
const search = document.querySelector("#prompt-search");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function render(markdown) {
  const lines = markdown.split("\n");
  let html = "";
  let inCode = false;
  let code = [];
  for (const line of lines) {
    if (line.startsWith("```")) {
      if (!inCode) { inCode = true; code = []; }
      else {
        const value = code.join("\n").trim();
        html += `<div class="prompt-card" data-search="${escapeHtml(value.toLowerCase())}"><button class="copy" type="button">Salin prompt</button><pre><code>${escapeHtml(value)}</code></pre></div>`;
        inCode = false;
      }
      continue;
    }
    if (inCode) { code.push(line); continue; }
    if (line.startsWith("## ")) html += `<h2>${escapeHtml(line.slice(3))}</h2>`;
    else if (line.startsWith("### ")) html += `<h3>${escapeHtml(line.slice(4))}</h3>`;
    else if (line.startsWith("# ")) html += `<h1>${escapeHtml(line.slice(2))}</h1>`;
    else if (line.startsWith("- ")) html += `<p class="list-item">• ${escapeHtml(line.slice(2))}</p>`;
    else if (line.trim()) html += `<p>${escapeHtml(line).replace(/`([^`]+)`/g, "<code>$1</code>")}</p>`;
  }
  container.innerHTML = html;
  document.querySelectorAll(".copy").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.parentElement.querySelector("code").textContent;
      await navigator.clipboard.writeText(value);
      button.textContent = "Disalin ✓";
      setTimeout(() => { button.textContent = "Salin prompt"; }, 1600);
    });
  });
}

fetch(SOURCE)
  .then((response) => { if (!response.ok) throw new Error("Tidak dapat memuatkan prompt."); return response.text(); })
  .then(render)
  .catch(() => {
    container.innerHTML = `<p class="notice">Prompt pack tidak dapat dimuatkan. <a href="https://github.com/drMurtadha/utm-agentic-ai-training/blob/agent/initial-training-materials/04_Hands-on-Exercises/copy-paste-prompt-pack.md">Buka terus di GitHub →</a></p>`;
  });

search.addEventListener("input", () => {
  const query = search.value.toLowerCase().trim();
  document.querySelectorAll(".prompt-card").forEach((card) => {
    card.hidden = query && !card.dataset.search.includes(query);
  });
});
