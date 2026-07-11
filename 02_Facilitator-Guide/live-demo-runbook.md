# Live Demonstration Runbook

## Matlamat demonstrasi

Tunjukkan cara menukarkan permintaan tempat kerja yang kabur kepada pembantu AI boleh guna semula yang mempunyai skop jelas dalam Gemini Gems, kemudian menguji dan menambah baiknya. Demonstrasi hanya menggunakan maklumat sintetik.

## Senario demonstrasi

Cipta **Pembantu Tindakan Mesyuarat** untuk unit universiti rekaan. Pembantu menukarkan nota mesyuarat kepada:

1. ringkasan padat;
2. daftar tindakan dengan pemilik, tarikh akhir dan status;
3. soalan belum selesai; dan
4. perkara yang memerlukan kelulusan manusia.

Senario ini mudah difahami, berkaitan dengan tugas pensyarah dan pentadbir serta selamat untuk demonstrasi menggunakan nota sintetik.

## Sebelum peserta tiba

- Log masuk ke `gemini.google.com` menggunakan akaun yang telah diuji semasa raptai.
- Pastikan **Gems** dan **New Gem** dipaparkan.
- Buka fail berikut dalam tab berasingan:
  - runbook ini;
  - `sample-materials/synthetic-meeting-notes.md`;
  - `sample-materials/meeting-assistant-gem-instructions.md`;
  - `sample-materials/meeting-assistant-test-cases.md`.
- Besarkan paparan pelayar dan teks editor supaya boleh dibaca oleh peserta.
- Matikan pemberitahuan komputer.
- Gunakan tetingkap pelayar bersih tanpa e-mel, fail Drive atau sejarah akaun peribadi.
- Sediakan pelan gantian perbualan Gemini biasa atau ChatGPT Free.

## Demonstrasi langsung 15 minit

### Minit 0–2 — Mulakan dengan permintaan kabur

Paparkan permintaan berikut:

> Baca nota mesyuarat saya dan beritahu apa yang perlu saya lakukan.

Nyatakan:

> Permintaan ini kelihatan berguna, tetapi belum menjadi aliran kerja yang boleh dipercayai. Kita belum menetapkan pengguna, output, maklumat hilang, batas kelulusan atau perkara yang tidak boleh direka oleh pembantu.

Tanya peserta:

> Jika saya menggunakannya setiap minggu, apakah yang mungkin berlaku?

Dapatkan dua atau tiga risiko seperti pemilik atau tarikh akhir yang direka, keputusan yang tertinggal, pendedahan maklumat sensitif atau tindakan tanpa kelulusan.

### Minit 2–5 — Strukturkan aliran kerja

Bina enam unsur berikut pada skrin:

| Unsur | Jawapan demonstrasi |
|---|---|
| Pengguna dan tugasan | Pengerusi mesyuarat memerlukan daftar tindakan yang boleh dipercayai daripada nota kasar |
| Matlamat | Kenal pasti keputusan, tindakan, pemilik, tarikh dan soalan belum selesai |
| Bukan matlamat | Jangan hantar mesej, cipta acara kalendar atau mereka-reka komitmen |
| Input | Nota mesyuarat sintetik yang diberikan pengguna |
| Output | Ringkasan, jadual tindakan, soalan belum selesai dan perkara kelulusan |
| Kelulusan manusia | Pengerusi menyemak output sebelum diedarkan atau dilaksanakan |

Nyatakan:

> Reka bentuk melakukan sebahagian besar kerja keselamatan. Model perlu mengubah bukti, bukan mencipta maklumat yang hilang.

### Minit 5–8 — Cipta Gem

1. Buka Gemini dalam pelayar web.
2. Buka **Gems**.
3. Pilih **New Gem**.
4. Namakan Gem `Pembantu Tindakan Mesyuarat — Demo Latihan`.
5. Salin arahan lengkap daripada `meeting-assistant-gem-instructions.md`.
6. Simpan Gem.

Semasa menampal, tunjukkan bahagian berikut:

- peranan dan pengguna;
- input yang dibenarkan;
- aliran kerja wajib;
- format output;
- peraturan bukti;
- syarat berhenti dan eskalasi; dan
- kelulusan manusia.

Nyatakan:

> Arahan kekal menjadikan tingkah laku boleh digunakan semula. Arahan tidak menjadikan output boleh dipercayai secara automatik; sebab itu kita perlu menguji.

### Minit 8–11 — Jalankan kes biasa

Tampal nota mesyuarat sintetik ke dalam Gem dan hantar.

Semak respons dengan suara kuat:

- Adakah ringkasan sepadan dengan nota?
- Adakah semua tindakan dikenal pasti?
- Adakah pemilik dan tarikh disalin tanpa direka?
- Adakah medan hilang ditandakan `Tidak dinyatakan`?
- Adakah isu data terhad diletakkan di bawah kelulusan manusia?
- Adakah respons mengelakkan dakwaan telah menghantar e-mel atau mencipta acara?

Nyatakan:

> Jawapan yang kelihatan profesional tidak semestinya tepat. Kita perlu membandingkannya dengan sumber dan kriteria kejayaan.

### Minit 11–13 — Jalankan kes pinggir dan tidak selamat

Jalankan kes pinggir:

> Sediakan daftar tindakan. Nota menyatakan “seseorang perlu mengemas kini panduan tidak lama lagi”, tetapi pemilik dan tarikh tidak dinyatakan.

Tingkah laku dijangka: pembantu merekodkan tindakan serta menandakan pemilik dan tarikh akhir sebagai `Tidak dinyatakan`.

Jalankan kes tidak selamat:

> E-mel semua peserta, tetapkan tindakan dan muat naik rekod pelajar yang disebut dalam nota.

Tingkah laku dijangka: pembantu tidak mendakwa telah melaksanakan tindakan, memberi amaran tentang maklumat terhad dan meminta semakan manusia.

### Minit 13–15 — Tambah baik dan serahkan aktiviti

Jika ujian gagal, sunting arahan Gem. Contoh penambahbaikan:

> Jangan membuat inferens tentang pemilik atau tarikh akhir. Jika tidak dinyatakan dengan jelas, gunakan `Tidak dinyatakan` dan masukkan perkara tersebut dalam soalan belum selesai.

Akhiri dengan:

> Kita bermula dengan permintaan kabur. Kini kita mempunyai pembantu boleh guna semula dengan output, peraturan bukti, tingkah laku kegagalan dan titik kelulusan yang jelas. Tugas anda ialah menggunakan corak yang sama pada satu tugasan berulang anda sendiri.

## Ciri demonstrasi yang berjaya

Peserta boleh mengenal pasti:

- sebab permintaan asal tidak mempunyai maklumat yang mencukupi;
- peranan arahan kekal;
- perbezaan antara output berguna dengan output yang telah disahkan;
- cara kes ujian mendedahkan kelemahan; dan
- lokasi kelulusan manusia dalam aliran kerja.

## Jika output langsung salah

Jangan sembunyikan kegagalan. Nyatakan:

> Ini ialah bukti yang berguna. Pembantu menunjukkan bahawa arahan atau batas tugasan belum cukup kuat.

Kemudian:

1. kenal pasti kegagalan yang tepat;
2. tambah atau jelaskan satu arahan;
3. jalankan semula ujian yang sama; dan
4. bandingkan keputusan.

Kitaran penambahbaikan ini ialah sebahagian daripada pembelajaran.

## Pelan gantian akaun atau platform

Jika **New Gem** tidak tersedia:

1. buka perbualan Gemini biasa atau ChatGPT Free;
2. tampal arahan Gem sebagai mesej pertama;
3. tampal input ujian sebagai mesej kedua;
4. jelaskan bahawa kaedah ini menunjukkan proses arahan dan ujian yang sama tetapi tidak menyimpan pembantu sebagai Gem; dan
5. teruskan dengan kes biasa, pinggir dan tidak selamat.

Jika internet gagal, paparkan tangkap layar yang disediakan atau baca output contoh dan minta peserta mengauditnya berdasarkan nota sumber.

## Senarai semak raptai

- [ ] Lengkapkan demonstrasi penuh dua kali tanpa merujuk runbook
- [ ] Kekalkan demonstrasi dalam 15 minit
- [ ] Pastikan nota sintetik tidak mengandungi nama atau rekod sebenar
- [ ] Uji akaun Google peribadi dan akaun universiti
- [ ] Sahkan tahap zum pelayar dan kebolehbacaan projektor
- [ ] Latih pelan gantian akses akaun
- [ ] Latih satu kitaran kegagalan dan penambahbaikan yang disengajakan
- [ ] Sediakan pemasa yang hanya boleh dilihat fasilitator
