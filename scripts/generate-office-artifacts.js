const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const {
  AlignmentType, BorderStyle, Document, Footer, HeadingLevel, LevelFormat,
  Packer, PageNumber, Paragraph, ShadingType, Table, TableCell, TableRow,
  TextRun, WidthType,
} = require("docx");

const root = path.resolve(__dirname, "..");
const navy = "12304A", teal = "008A8A", gold = "F5B942", cream = "F7F4EC", ink = "17212B";

function para(text, options = {}) {
  return new Paragraph({ spacing: { after: 140 }, ...options, children: [new TextRun({ text, font: "Arial", size: 22, ...options.run })] });
}

function heading(text, level = HeadingLevel.HEADING_1, pageBreakBefore = false) {
  return new Paragraph({ heading: level, pageBreakBefore, children: [new TextRun(text)] });
}

function bullet(text) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 90 }, children: [new TextRun(text)] });
}

function cell(text, width, fill = "FFFFFF", bold = false) {
  const side = { style: BorderStyle.SINGLE, size: 1, color: "CAD3D8" };
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders: { top: side, bottom: side, left: side, right: side },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text, bold, font: "Arial", size: 20, color: fill === navy ? "FFFFFF" : ink })] })],
  });
}

function makeDoc(title, subtitle, sections) {
  const children = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 900, after: 240 }, children: [new TextRun({ text: title, bold: true, color: navy, font: "Arial", size: 42 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 700 }, children: [new TextRun({ text: subtitle, color: teal, italics: true, font: "Arial", size: 24 })] }),
  ];
  for (const section of sections) {
    children.push(heading(section.title, HeadingLevel.HEADING_1, Boolean(section.pageBreakBefore)));
    for (const item of section.items) children.push(typeof item === "string" ? para(item) : item);
  }
  return new Document({
    creator: "UTM Agentic AI Training",
    title,
    styles: { default: { document: { run: { font: "Arial", size: 22, color: ink } } }, paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 30, bold: true, color: navy }, paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: "Arial", size: 25, bold: true, color: teal }, paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 } },
    ] },
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1100, right: 1100, bottom: 1100, left: 1100 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun("UTM Agentic AI Training  |  "), new TextRun({ children: [PageNumber.CURRENT] })] })] }) },
      children,
    }],
  });
}

async function writeDoc(file, doc) {
  fs.writeFileSync(path.join(root, file), await Packer.toBuffer(doc));
}

async function generateDocs() {
  await writeDoc("02_Facilitator-Guide/facilitator-guide.docx", makeDoc(
    "Facilitator Guide", "21 Julai 2026 (Selasa) · 10.00 pagi – 11.00 pagi · PM Dr. Mohd Murtadha Mohamad", [
      { title: "Session", items: ["Memanfaatkan Agentic AI untuk Meningkatkan Produktiviti Harian"] },
      { title: "Purpose and approach", items: ["Help participants recognise practical daily-productivity opportunities for Agentic AI, design a reusable assistant, and build and test it in Gemini Gems. The full agenda requires 120 minutes; the advertised 10.00–11.00 pagi slot must be extended or compressed before distribution."] },
      { title: "Before the session", items: [bullet("Rehearse the Meeting Action Assistant using live-demo-runbook.md."), bullet("Confirm Gemini Gems using a participant-level personal Google account."), bullet("Prepare the synthetic meeting notes, test cases, and standard-chat fallback."), bullet("Print or distribute the participant workbook and agent-design template.")] },
      { title: "Suggested agenda", items: [new Table({ width: { size: 9706, type: WidthType.DXA }, columnWidths: [1800, 4906, 3000], rows: [
        new TableRow({ children: [cell("Time", 1800, navy, true), cell("Segment", 4906, navy, true), cell("Method", 3000, navy, true)] }),
        new TableRow({ children: [cell("0–10", 1800), cell("What repetitive task would you delegate?", 4906), cell("Opening activity", 3000)] }),
        new TableRow({ children: [cell("10–25", 1800), cell("AI assistants vs agentic AI", 4906), cell("Workplace examples", 3000)] }),
        new TableRow({ children: [cell("25–40", 1800), cell("Turn a vague request into a workflow", 4906), cell("Live demonstration", 3000)] }),
        new TableRow({ children: [cell("40–65", 1800), cell("Design an AI assistant", 4906), cell("Hands-on 1", 3000)] }),
        new TableRow({ children: [cell("65–75", 1800), cell("Break and participant sharing", 4906), cell("Break", 3000)] }),
        new TableRow({ children: [cell("75–100", 1800), cell("Build and test in Gemini Gems", 4906), cell("Hands-on 2", 3000)] }),
        new TableRow({ children: [cell("100–112", 1800), cell("Test cases, reflection, human approval", 4906), cell("Improvement", 3000)] }),
        new TableRow({ children: [cell("112–120", 1800), cell("Responsible-use checklist and closing", 4906), cell("Sharing", 3000)] }),
      ] })] },
      { title: "Facilitation cues", items: [bullet("Ask for the user and measurable outcome before discussing tools."), bullet("Treat refusals, escalation, and safe stopping as successful behaviours."), bullet("Request evidence for claims about prototype performance."), bullet("Use the parking lot for platform-specific issues that would derail learning.")] },
    ]));

  await writeDoc("03_Participant-Workbook/participant-workbook.docx", makeDoc(
    "Participant Workbook", "21 Julai 2026 (Selasa) · 10.00 pagi – 11.00 pagi", [
      { title: "My learning goals", items: [para("What task or challenge do I hope to improve?"), para("________________________________________________________________________________"), para("What would make this training useful to me?"), para("________________________________________________________________________________")] },
      { title: "Agent or simple automation?", items: [para("Record one task suited to a fixed workflow and one that may benefit from an agent. Explain the difference."), para("________________________________________________________________________________"), para("________________________________________________________________________________")] },
      { title: "Gem design notes", items: [bullet("User and repetitive task"), bullet("Goal and non-goals"), bullet("Persistent instructions and approved inputs"), bullet("Output and success measures"), bullet("Human approval and escalation"), bullet("Risks, stopping, and failure message")] },
      { title: "Test record", items: [new Table({ width: { size: 9706, type: WidthType.DXA }, columnWidths: [1900, 3000, 1800, 3006], rows: [
        new TableRow({ children: [cell("Case", 1900, navy, true), cell("Input / expectation", 3000, navy, true), cell("Pass?", 1800, navy, true), cell("Evidence and notes", 3006, navy, true)] }),
        ...["Expected", "Edge", "Unsafe / ambiguous"].map(x => new TableRow({ children: [cell(x, 1900), cell("", 3000), cell("", 1800), cell("", 3006)] })),
      ] })] },
      { title: "Reflection and next step", pageBreakBefore: true, items: [para("What worked? What failed? What must be controlled or improved before a pilot?"), para("________________________________________________________________________________"), para("________________________________________________________________________________"), para("My next responsible step:"), para("________________________________________________________________________________"), para("________________________________________________________________________________")] },
    ]));

  await writeDoc("05_Templates/one-page-agent-design-template.docx", makeDoc(
    "One-Page Agent Design", "Complete before building", [
      { title: "1. User and job to be done", items: [para("________________________________________________________________________________")] },
      { title: "2. Goal and non-goals", items: [para("Goal: __________________________________________________________________________"), para("Non-goals: ______________________________________________________________________")] },
      { title: "3. Inputs, tools, and permissions", items: [para("________________________________________________________________________________"), para("________________________________________________________________________________")] },
      { title: "4. Workflow and output", items: [para("Request → ______________ → ______________ → human check → ______________ → output")] },
      { title: "5. Success measures", items: [para("________________________________________________________________________________")] },
      { title: "6. Risks, stop conditions, and escalation", items: [para("________________________________________________________________________________"), para("________________________________________________________________________________")] },
    ]));
}

function addTitle(slide, title, kicker) {
  slide.addText(kicker.toUpperCase(), { x: 0.65, y: 0.45, w: 4.5, h: 0.28, fontFace: "Arial", fontSize: 11, bold: true, charSpacing: 2, color: teal, margin: 0 });
  slide.addText(title, { x: 0.65, y: 0.9, w: 8.7, h: 0.75, fontFace: "Arial", fontSize: 32, bold: true, color: navy, margin: 0 });
}

async function generateSlides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "UTM Agentic AI Training";
  pptx.subject = "Memanfaatkan Agentic AI untuk Meningkatkan Produktiviti Harian";
  pptx.title = "Memanfaatkan Agentic AI untuk Meningkatkan Produktiviti Harian";
  pptx.company = "Universiti Teknologi Malaysia";
  pptx.lang = "en-MY";
  pptx.theme = { headFontFace: "Arial", bodyFontFace: "Arial", lang: "en-MY" };

  let s = pptx.addSlide();
  s.background = { color: navy };
  s.addShape(pptx.ShapeType.arc, { x: 7.0, y: -0.5, w: 3.2, h: 3.2, adjustPoint: 0.25, rotate: 25, fill: { color: teal, transparency: 10 }, line: { color: teal, transparency: 100 } });
  s.addShape(pptx.ShapeType.ellipse, { x: 7.8, y: 3.6, w: 1.4, h: 1.4, fill: { color: gold }, line: { color: gold } });
  s.addText("UTM", { x: 0.7, y: 0.5, w: 1.2, h: 0.35, fontSize: 14, bold: true, color: gold, margin: 0 });
  s.addText("Memanfaatkan\nAgentic AI untuk\nMeningkatkan Produktiviti Harian", { x: 0.7, y: 1.25, w: 6.5, h: 2.15, fontSize: 27, bold: true, color: "FFFFFF", margin: 0, breakLine: false, fit: "shrink" });
  s.addText("PM Dr. Mohd Murtadha Mohamad", { x: 0.72, y: 3.7, w: 5.9, h: 0.32, fontSize: 15, bold: true, color: gold, margin: 0 });
  s.addText("21 Julai 2026 (Selasa)  ·  10.00 pagi – 11.00 pagi", { x: 0.72, y: 4.18, w: 6.2, h: 0.3, fontSize: 12, color: "DDE8E8", margin: 0 });

  s = pptx.addSlide(); s.background = { color: cream }; addTitle(s, "AI assistant vs agentic AI", "Core distinction");
  [["AI ASSISTANT", "Responds using reusable instructions", "You direct each interaction", teal], ["AGENTIC WORKFLOW", "Observes, decides, acts, and checks", "Controls define when to stop or escalate", navy]].forEach((c, i) => { const x = 0.7 + i * 4.65; s.addShape(pptx.ShapeType.rect, { x, y: 1.8, w: 4.0, h: 2.8, fill: { color: i === 0 ? "E8F1F0" : navy }, line: { color: c[3] } }); s.addText(c[0], { x: x + 0.3, y: 2.15, w: 3.4, h: 0.3, fontSize: 14, bold: true, color: i === 0 ? teal : gold, margin: 0 }); s.addText(c[1], { x: x + 0.3, y: 2.85, w: 3.3, h: 0.75, fontSize: 21, bold: true, color: i === 0 ? navy : "FFFFFF", margin: 0 }); s.addText(c[2], { x: x + 0.3, y: 3.85, w: 3.3, h: 0.45, fontSize: 13, color: i === 0 ? ink : "DDE8E8", margin: 0 }); });

  s = pptx.addSlide(); s.background = { color: "FFFFFF" }; addTitle(s, "Where could this help at work?", "Workplace examples");
  const cards = [["TEACHING", "Turn learning outcomes into a draft activity"], ["RESEARCH", "Screen and structure approved literature notes"], ["ADMIN", "Draft recurring replies from approved guidance"], ["STUDENT SUPPORT", "Triage a request and escalate sensitive cases"]];
  cards.forEach((c, i) => { const x = 0.65 + (i % 2) * 4.65, y = 1.85 + Math.floor(i / 2) * 1.65; s.addShape(pptx.ShapeType.rect, { x, y, w: 4.1, h: 1.25, fill: { color: i === 3 ? navy : "E8F1F0" }, line: { color: i === 3 ? navy : "C8DDDA" } }); s.addText(c[0], { x: x + 0.28, y: y + 0.2, w: 1.2, h: 0.25, fontSize: 12, bold: true, color: i === 3 ? gold : teal, margin: 0 }); s.addText(c[1], { x: x + 0.28, y: y + 0.58, w: 3.5, h: 0.43, fontSize: 14, color: i === 3 ? "FFFFFF" : ink, margin: 0 }); });

  s = pptx.addSlide(); s.background = { color: cream }; addTitle(s, "From vague request to workflow", "Live demonstration + Exercise 1");
  const labels = ["User + task", "Goal + non-goals", "Persistent instructions", "Output + measures", "Test cases", "Human approval"];
  labels.forEach((label, i) => { const x = 0.75 + (i % 3) * 3.05, y = 1.75 + Math.floor(i / 3) * 1.45; s.addShape(pptx.ShapeType.roundRect, { x, y, w: 2.55, h: 1.0, rectRadius: 0.08, fill: { color: i === 4 ? gold : "FFFFFF" }, line: { color: i === 4 ? gold : "D6DDD9" } }); s.addText(String(i + 1).padStart(2, "0"), { x: x + 0.2, y: y + 0.18, w: 0.4, h: 0.2, fontSize: 11, bold: true, color: teal, margin: 0 }); s.addText(label, { x: x + 0.2, y: y + 0.48, w: 2.1, h: 0.25, fontSize: 15, bold: true, color: navy, margin: 0 }); });
  s.addText("A strong design makes success observable and failure recoverable.", { x: 0.75, y: 4.75, w: 8.5, h: 0.35, fontSize: 17, italic: true, color: teal, align: "center", margin: 0 });

  s = pptx.addSlide(); s.background = { color: "FFFFFF" }; addTitle(s, "Build and test in Gemini Gems", "Exercise 2");
  [["BUILD", "Create a Gem with persistent, bounded instructions", teal], ["TEST", "Run expected, edge, and unsafe cases", gold], ["IMPROVE", "Add reflection, stopping, and human approval", navy]].forEach((c, i) => { const x = 0.65 + i * 3.12; s.addShape(pptx.ShapeType.rect, { x, y: 1.9, w: 2.72, h: 2.45, fill: { color: c[2] }, line: { color: c[2] } }); s.addText(c[0], { x: x + 0.25, y: 2.22, w: 2.2, h: 0.3, fontSize: 17, bold: true, color: c[2] === gold ? navy : "FFFFFF", margin: 0 }); s.addText(c[1], { x: x + 0.25, y: 2.9, w: 2.18, h: 0.95, fontSize: 14, color: c[2] === gold ? navy : "FFFFFF", margin: 0, valign: "mid" }); });

  s = pptx.addSlide(); s.background = { color: navy };
  s.addText("Responsible deployment", { x: 0.7, y: 0.65, w: 7.5, h: 0.65, fontSize: 34, bold: true, color: "FFFFFF", margin: 0 });
  s.addText("A prototype earns a pilot through evidence and control.", { x: 0.72, y: 1.48, w: 7.5, h: 0.4, fontSize: 17, color: "CEE0DF", margin: 0 });
  const end = [["Privacy", "Use approved data and minimise collection"], ["Permission", "Bound tools and actions to the task"], ["Traceability", "Retain evidence for important outputs"], ["Oversight", "Put people at consequential decisions"], ["Monitoring", "Watch quality, cost, and failure modes"]];
  end.forEach((e, i) => { const x = 0.72 + (i % 3) * 3.02, y = 2.35 + Math.floor(i / 3) * 1.35; s.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.38, h: 0.38, fill: { color: gold }, line: { color: gold } }); s.addText(e[0], { x: x + 0.55, y: y - 0.01, w: 2.1, h: 0.26, fontSize: 15, bold: true, color: "FFFFFF", margin: 0 }); s.addText(e[1], { x: x + 0.55, y: y + 0.4, w: 2.15, h: 0.52, fontSize: 11, color: "DDE8E8", margin: 0 }); });

  await pptx.writeFile({ fileName: path.join(root, "01_Slides/presentation.pptx") });
}

(async () => { await generateDocs(); await generateSlides(); })().catch(err => { console.error(err); process.exit(1); });
