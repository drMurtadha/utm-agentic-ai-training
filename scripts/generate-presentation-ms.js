const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "01_Slides/presentation.pptx");
const hero = path.join(root, "01_Slides/assets/hero-agentic-ai-malaysia.png");

const C = {
  navy: "082A3D", navy2: "0D3A50", teal: "00A7A0", mint: "DFF3EF",
  gold: "F7C548", cream: "F7F3EA", ink: "17242C", white: "FFFFFF",
  grey: "63747D", line: "C7D7D5", coral: "E56B5D", green: "3D9B72",
};

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "UTM Agentic AI Training";
pptx.subject = "Pengenalan Agentic AI untuk peserta pelbagai latar belakang";
pptx.title = "Memanfaatkan Agentic AI untuk Meningkatkan Produktiviti Harian";
pptx.company = "Universiti Teknologi Malaysia";
pptx.lang = "ms-MY";
pptx.theme = { headFontFace: "Arial", bodyFontFace: "Arial", lang: "ms-MY" };

function addTitle(slide, title, kicker, dark = false) {
  slide.addText(kicker.toUpperCase(), { x: 0.72, y: 0.42, w: 5.5, h: 0.25, fontFace: "Arial", fontSize: 10, bold: true, charSpacing: 1.8, color: dark ? C.gold : C.teal, margin: 0 });
  slide.addText(title, { x: 0.72, y: 0.82, w: 11.7, h: 0.62, fontFace: "Arial", fontSize: 28, bold: true, color: dark ? C.white : C.navy, margin: 0, fit: "shrink" });
}

function footer(slide, n, dark = false) {
  slide.addText(`UTM · AGENTIC AI`, { x: 0.72, y: 7.12, w: 2.2, h: 0.16, fontSize: 8, bold: true, color: dark ? "91AFB9" : "789099", margin: 0 });
  slide.addText(String(n).padStart(2, "0"), { x: 12.1, y: 7.08, w: 0.45, h: 0.2, fontSize: 9, bold: true, color: dark ? C.gold : C.teal, align: "right", margin: 0 });
}

function card(slide, x, y, w, h, title, body, opts = {}) {
  const fill = opts.fill || C.white;
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.05, fill: { color: fill }, line: { color: opts.line || C.line, width: 1 } });
  if (opts.badge) slide.addText(opts.badge, { x: x + 0.25, y: y + 0.22, w: 0.52, h: 0.35, fontSize: 16, bold: true, color: opts.badgeColor || C.teal, margin: 0, align: "center" });
  slide.addText(title, { x: x + 0.25, y: y + 0.2, w: w - 0.5, h: 0.32, fontSize: opts.titleSize || 15, bold: true, color: opts.titleColor || C.navy, margin: 0, fit: "shrink" });
  slide.addText(body, { x: x + 0.25, y: y + 0.66, w: w - 0.5, h: h - 0.82, fontSize: opts.bodySize || 11.5, color: opts.bodyColor || C.ink, margin: 0, breakLine: false, valign: "top", fit: "shrink" });
}

// 1 — Cover
let s = pptx.addSlide();
s.background = { color: C.navy };
s.addImage({ path: hero, x: 6.92, y: 0, w: 6.41, h: 7.5, transparency: 2 });
s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 7.55, h: 7.5, fill: { color: C.navy, transparency: 0 }, line: { transparency: 100 } });
s.addShape(pptx.ShapeType.rect, { x: 6.45, y: 0, w: 1.7, h: 7.5, fill: { color: C.navy, transparency: 35 }, line: { transparency: 100 } });
s.addText("UTM · PENGENALAN AGENTIC AI · 2 JAM", { x: 0.82, y: 0.58, w: 4.2, h: 0.24, fontSize: 10, bold: true, color: C.gold, margin: 0 });
s.addText("Kerja berulang tidak\nsemestinya\nmemakan masa anda", { x: 0.82, y: 1.55, w: 5.55, h: 2.0, fontSize: 29, bold: true, color: C.white, margin: 0, breakLine: false, fit: "shrink" });
s.addText("Reka pembantu AI yang fokus, boleh diuji dan sentiasa\ndi bawah kawalan manusia.", { x: 0.82, y: 4.03, w: 5.55, h: 0.72, fontSize: 14.5, color: "E4ECEF", margin: 0, breakLine: false });
s.addShape(pptx.ShapeType.rect, { x: 0.82, y: 5.22, w: 1.25, h: 0.06, fill: { color: C.gold }, line: { color: C.gold } });
s.addText("PM Dr. Mohd Murtadha Mohamad", { x: 0.82, y: 5.55, w: 4.8, h: 0.25, fontSize: 12.5, bold: true, color: C.gold, margin: 0 });
s.addText("21 Julai 2026 · 10.00 pagi–12.00 tengah hari", { x: 0.82, y: 6.02, w: 4.8, h: 0.25, fontSize: 11.5, color: "E4ECEF", margin: 0 });

// 2 — Plain-language definition
s = pptx.addSlide(); s.background = { color: C.cream }; addTitle(s, "Apa itu Agentic AI?", "Pengenalan dalam bahasa mudah");
s.addShape(pptx.ShapeType.roundRect, { x: 0.75, y: 1.75, w: 5.2, h: 4.55, rectRadius: 0.06, fill: { color: C.navy }, line: { color: C.navy } });
s.addText("Bayangkan pembantu kerja digital", { x: 1.1, y: 2.15, w: 4.5, h: 0.55, fontSize: 24, bold: true, color: C.white, margin: 0, fit: "shrink" });
s.addText("Ia bukan sekadar menjawab soalan. Ia boleh mengurus beberapa langkah untuk mencapai hasil yang ditetapkan—dalam batas yang kita berikan.", { x: 1.1, y: 3.02, w: 4.45, h: 1.25, fontSize: 16, color: "DDE9EC", margin: 0, breakLine: false, fit: "shrink" });
s.addText("Kata kunci: MATLAMAT · LANGKAH · SEMAKAN", { x: 1.1, y: 5.42, w: 4.45, h: 0.3, fontSize: 11, bold: true, color: C.gold, charSpacing: 1.1, margin: 0 });
const simple = [["1", "Faham matlamat", "Apakah hasil yang diperlukan?"], ["2", "Pilih langkah", "Apakah tindakan seterusnya?"], ["3", "Guna maklumat dan alat", "Hanya sumber dan alat yang dibenarkan"], ["4", "Semak dan rujuk", "Berhenti apabila manusia diperlukan"]];
simple.forEach((e, i) => { const y = 1.85 + i * 1.08; s.addShape(pptx.ShapeType.ellipse, { x: 6.55, y, w: 0.58, h: 0.58, fill: { color: i === 3 ? C.gold : C.teal }, line: { transparency: 100 } }); s.addText(e[0], { x: 6.55, y: y + 0.11, w: 0.58, h: 0.2, fontSize: 12, bold: true, color: i === 3 ? C.navy : C.white, align: "center", margin: 0 }); s.addText(e[1], { x: 7.4, y: y - 0.02, w: 2.3, h: 0.3, fontSize: 15, bold: true, color: C.navy, margin: 0 }); s.addText(e[2], { x: 7.4, y: y + 0.37, w: 4.6, h: 0.28, fontSize: 11.5, color: C.grey, margin: 0 }); if (i < 3) s.addShape(pptx.ShapeType.line, { x: 6.84, y: y + 0.6, w: 0, h: 0.47, line: { color: C.line, width: 2, beginArrowType: "none", endArrowType: "none" } }); });
footer(s, 2);

// 3 — Comparison
s = pptx.addSlide(); s.background = { color: C.white }; addTitle(s, "Chatbot biasa, aliran Agentic AI dan manusia", "Kenali peranan setiap satu");
card(s, 0.75, 1.92, 3.72, 3.85, "CHATBOT / PEMBANTU AI", "Menjawab satu permintaan pada satu masa.\n\nContoh: draf e-mel atau ringkaskan teks.\n\nAnda mengarah setiap interaksi.", { fill: C.mint, line: "B5DAD5", titleColor: C.teal, titleSize: 14 });
card(s, 4.8, 1.92, 3.72, 3.85, "ALIRAN AGENTIC AI", "Mengurus beberapa langkah menuju matlamat.\n\nContoh: baca transkrip, ekstrak tindakan, semak maklumat hilang dan sediakan draf.\n\nBatas menentukan bila ia berhenti.", { fill: C.navy, line: C.navy, titleColor: C.gold, bodyColor: C.white, titleSize: 14 });
card(s, 8.85, 1.92, 3.72, 3.85, "MANUSIA", "Menetapkan matlamat, data dan kebenaran.\n\nMenyemak fakta, membuat pertimbangan dan meluluskan tindakan penting.\n\nAkauntabiliti kekal pada manusia.", { fill: "FFF5DA", line: "E9CF85", titleColor: "9A6A00", titleSize: 14 });
s.addText("AI menyediakan kerja · manusia mengesahkan keputusan", { x: 3.25, y: 6.18, w: 6.85, h: 0.3, fontSize: 13, bold: true, color: C.teal, align: "center", margin: 0 });
footer(s, 3);

// 4 — Loop
s = pptx.addSlide(); s.background = { color: C.cream }; addTitle(s, "Bagaimana Agentic AI bekerja?", "Satu kitaran yang mudah diperiksa");
const loop = [["1", "TERIMA", "Matlamat + input"], ["2", "RANCANG", "Pecahkan tugasan"], ["3", "BERTINDAK", "Guna alat yang dibenarkan"], ["4", "SEMAK", "Banding dengan kriteria"], ["5", "HASIL / RUJUK", "Serahkan draf atau rujuk manusia"]];
loop.forEach((e, i) => { const x = 0.72 + i * 2.48; const fill = i === 4 ? C.gold : (i === 2 ? C.navy : C.white); s.addShape(pptx.ShapeType.roundRect, { x, y: 2.05, w: 2.05, h: 2.6, rectRadius: 0.05, fill: { color: fill }, line: { color: i === 4 ? C.gold : (i === 2 ? C.navy : C.line), width: 1.2 } }); s.addText(e[0], { x: x + 0.18, y: 2.26, w: 0.34, h: 0.3, fontSize: 18, bold: true, color: i === 2 ? C.gold : C.teal, margin: 0 }); s.addText(e[1], { x: x + 0.18, y: 3.0, w: 1.7, h: 0.32, fontSize: 13.5, bold: true, color: i === 2 ? C.white : C.navy, margin: 0, align: "center", fit: "shrink" }); s.addText(e[2], { x: x + 0.18, y: 3.62, w: 1.7, h: 0.55, fontSize: 10.5, color: i === 2 ? "D9E7EA" : C.ink, margin: 0, align: "center", fit: "shrink" }); if (i < 4) s.addShape(pptx.ShapeType.chevron, { x: x + 2.08, y: 3.0, w: 0.35, h: 0.6, fill: { color: C.teal }, line: { transparency: 100 } }); });
s.addShape(pptx.ShapeType.roundRect, { x: 2.4, y: 5.25, w: 8.55, h: 0.75, rectRadius: 0.04, fill: { color: "E8F1F0" }, line: { color: "C5DDDA" } });
s.addText("Manusia menetapkan matlamat dan batas  →  AI menyediakan kerja  →  manusia mengesahkan keputusan", { x: 2.75, y: 5.49, w: 7.85, h: 0.24, fontSize: 12.5, bold: true, color: C.navy, align: "center", margin: 0, fit: "shrink" });
footer(s, 4);

// 5 — Use cases
s = pptx.addSlide(); s.background = { color: C.white }; addTitle(s, "Contoh penggunaan yang dekat dengan kerja kita", "Bukan hanya untuk bidang IT");
const uses = [
  ["MESYUARAT", "Audio/transkrip → draf minit, keputusan dan daftar tindakan", "01"],
  ["MAKMAL", "Semak SOP → senarai persediaan, risiko dan perkara perlu kelulusan", "02"],
  ["PENGAJARAN", "Hasil pembelajaran → draf aktiviti, rubrik dan soalan refleksi", "03"],
  ["PENTADBIRAN", "Permohonan masuk → semak kelengkapan dan salurkan kepada pegawai", "04"],
  ["OPERASI", "Log/aduan → kelompok isu, keutamaan dan draf laporan berkala", "05"],
  ["PENYELIDIKAN", "Sumber literatur dibenarkan → tema, jurang dan jadual sumber bukti", "06"],
];
uses.forEach((u, i) => { const x = 0.72 + (i % 3) * 4.15, y = 1.72 + Math.floor(i / 3) * 2.35; card(s, x, y, 3.72, 1.92, u[0], u[1], { fill: i === 0 ? C.navy : (i === 1 ? "FFF5DA" : C.mint), line: i === 0 ? C.navy : C.line, titleColor: i === 0 ? C.gold : C.teal, bodyColor: i === 0 ? C.white : C.ink, bodySize: 11.3 }); s.addText(u[2], { x: x + 3.02, y: y + 0.16, w: 0.4, h: 0.25, fontSize: 10, bold: true, color: i === 0 ? "91AFB9" : "90AAA7", align: "right", margin: 0 }); });
footer(s, 5);

// 6 — Suitability traffic light
s = pptx.addSlide(); s.background = { color: C.cream }; addTitle(s, "Mulakan dengan tugas yang sesuai", "Pilih risiko rendah dan hasil mudah disemak");
const zones = [
  [C.green, "SESUAI UNTUK DIMULAKAN", "Berulang · input jelas · output draf · mudah disemak", "Meringkas transkrip, menyusun tindakan, menyediakan senarai semak"],
  [C.gold, "PERLU KAWALAN TAMBAHAN", "Data dalaman/sensitif · banyak pengecualian · kesan kepada orang lain", "Saringan permohonan, cadangan jadual, laporan pengurusan"],
  [C.coral, "JANGAN AUTOMASIKAN SEPENUHNYA", "Keputusan berimpak tinggi · data sangat sensitif · tindakan rasmi", "Kelulusan, penilaian, disiplin, kewangan atau keselamatan tanpa manusia"],
];
zones.forEach((z, i) => { const y = 1.72 + i * 1.57; s.addShape(pptx.ShapeType.roundRect, { x: 0.82, y, w: 11.75, h: 1.22, rectRadius: 0.04, fill: { color: C.white }, line: { color: z[0], width: 1.5 } }); s.addShape(pptx.ShapeType.ellipse, { x: 1.12, y: y + 0.32, w: 0.58, h: 0.58, fill: { color: z[0] }, line: { transparency: 100 } }); s.addText(z[1], { x: 1.95, y: y + 0.19, w: 3.0, h: 0.3, fontSize: 13.5, bold: true, color: C.navy, margin: 0, fit: "shrink" }); s.addText(z[2], { x: 1.95, y: y + 0.66, w: 4.0, h: 0.25, fontSize: 10.5, color: C.grey, margin: 0, fit: "shrink" }); s.addText(z[3], { x: 6.3, y: y + 0.33, w: 5.7, h: 0.48, fontSize: 11.5, color: C.ink, italic: true, margin: 0, valign: "mid", fit: "shrink" }); });
footer(s, 6);

// 7 — Design workflow
s = pptx.addSlide(); s.background = { color: C.white }; addTitle(s, "Permintaan kabur menjadi aliran yang boleh diuji", "Demonstrasi + Latihan 1");
const design = [["01", "Pengguna + tugas", "Siapa menggunakan pembantu, untuk kerja apa?"], ["02", "Matlamat + luar skop", "Apakah hasil dan perkara yang tidak boleh dibuat?"], ["03", "Input + alat dibenarkan", "Dokumen atau sumber mana yang boleh digunakan?"], ["04", "Hasil + ukuran kejayaan", "Bagaimana kita tahu hasilnya berguna dan tepat?"], ["05", "Kes ujian", "Uji situasi biasa, luar biasa dan tidak selamat"], ["06", "Kelulusan manusia", "Bilakah pembantu mesti berhenti dan merujuk?"]];
design.forEach((d, i) => { const x = 0.78 + (i % 3) * 4.15, y = 1.72 + Math.floor(i / 3) * 2.0; const hot = i === 4; s.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.72, h: 1.62, rectRadius: 0.04, fill: { color: hot ? C.gold : C.cream }, line: { color: hot ? C.gold : "DDD7CA" } }); s.addText(d[0], { x: x + 0.23, y: y + 0.18, w: 0.45, h: 0.23, fontSize: 10.5, bold: true, color: C.teal, margin: 0 }); s.addText(d[1], { x: x + 0.23, y: y + 0.56, w: 3.25, h: 0.3, fontSize: 14, bold: true, color: C.navy, margin: 0, fit: "shrink" }); s.addText(d[2], { x: x + 0.23, y: y + 1.02, w: 3.2, h: 0.34, fontSize: 9.5, color: C.grey, margin: 0, fit: "shrink" }); });
s.addText("Reka bentuk yang baik menjadikan kejayaan boleh dilihat dan kegagalan boleh dipulihkan.", { x: 1.4, y: 5.85, w: 10.5, h: 0.35, fontSize: 14.5, italic: true, color: C.teal, align: "center", margin: 0, fit: "shrink" });
footer(s, 7);

// 8 — Build test improve
s = pptx.addSlide(); s.background = { color: C.cream }; addTitle(s, "Bina kecil, uji keras, tambah baik", "Latihan 2 — Gemini Gems");
const phases = [["BINA", "Cipta pembantu dengan arahan kekal, ruang lingkup dan format hasil.", C.teal], ["UJI", "Jalankan situasi biasa, luar biasa dan permintaan tidak selamat.", C.gold], ["TAMBAH BAIK", "Ubah satu arahan, jalankan semula dan bandingkan bukti.", C.navy]];
phases.forEach((p, i) => { const x = 0.78 + i * 4.18; s.addShape(pptx.ShapeType.roundRect, { x, y: 1.9, w: 3.72, h: 3.7, rectRadius: 0.05, fill: { color: p[2] }, line: { color: p[2] } }); s.addText(String(i + 1).padStart(2, "0"), { x: x + 0.3, y: 2.2, w: 0.5, h: 0.3, fontSize: 15, bold: true, color: p[2] === C.gold ? C.teal : C.gold, margin: 0 }); s.addText(p[0], { x: x + 0.3, y: 3.0, w: 3.1, h: 0.42, fontSize: 22, bold: true, color: p[2] === C.gold ? C.navy : C.white, margin: 0 }); s.addText(p[1], { x: x + 0.3, y: 3.82, w: 3.05, h: 1.1, fontSize: 13, color: p[2] === C.gold ? C.navy : C.white, margin: 0, fit: "shrink" }); });
footer(s, 8);

// 9 — Responsible use
s = pptx.addSlide(); s.background = { color: C.navy }; addTitle(s, "Prototaip memerlukan bukti dan kawalan", "Penggunaan bertanggungjawab", true);
s.addText("Agentic AI membantu menyediakan kerja. Manusia kekal bertanggungjawab terhadap keputusan.", { x: 0.75, y: 1.62, w: 10.8, h: 0.42, fontSize: 15.5, color: "D7E4E8", margin: 0 });
const controls = [["PRIVASI", "Gunakan data yang diluluskan dan minimumkan pendedahan"], ["KEBENARAN", "Hadkan alat dan tindakan kepada ruang lingkup tugasan"], ["BUKTI", "Simpan sumber bagi hasil yang penting"], ["SEMAKAN", "Letakkan manusia pada keputusan berimpak"], ["BERHENTI", "Rujuk manusia apabila maklumat tidak cukup atau risiko meningkat"]];
controls.forEach((c, i) => { const x = i < 3 ? 0.78 + i * 4.12 : 2.55 + (i - 3) * 4.45, y = i < 3 ? 2.42 : 4.1; s.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.46, h: 0.46, fill: { color: C.gold }, line: { transparency: 100 } }); s.addText(c[0], { x: x + 0.68, y: y - 0.02, w: 2.7, h: 0.28, fontSize: 13, bold: true, color: C.white, margin: 0 }); s.addText(c[1], { x: x + 0.68, y: y + 0.42, w: 3.2, h: 0.55, fontSize: 10.5, color: "E1EDF0", margin: 0, fit: "shrink" }); });
s.addShape(pptx.ShapeType.roundRect, { x: 2.25, y: 5.82, w: 8.8, h: 0.72, rectRadius: 0.04, fill: { color: C.teal, transparency: 5 }, line: { transparency: 100 } });
s.addText("Mulakan kecil · ukur hasil · semak manusia · tambah kuasa bertindak hanya dengan bukti", { x: 2.65, y: 6.05, w: 8.0, h: 0.24, fontSize: 12.5, bold: true, color: C.white, align: "center", margin: 0, fit: "shrink" });
footer(s, 9, true);

pptx.writeFile({ fileName: out });
