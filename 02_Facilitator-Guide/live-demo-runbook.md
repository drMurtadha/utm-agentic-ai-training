# Panduan Demonstrasi Langsung

## Matlamat demonstrasi

Pastikan peserta memperoleh satu kejayaan awal: mereka menampal arahan ringkas dan nota mesyuarat, kemudian mengenal pasti sama ada output itu tepat. Penciptaan Gemini Gem hanya diperkenalkan selepas aliran asas berjaya.

## Prinsip penyampaian untuk peserta bukan teknikal

- Tunjukkan satu langkah pada satu masa.
- Gunakan pola **lihat → ikut → semak → faham**.
- Jangan terangkan semua istilah sebelum demonstrasi.
- Jangan minta peserta memilih tugasan sendiri pada percubaan pertama.
- Gunakan nota dan prompt yang sama untuk semua peserta.
- Selepas setiap langkah, berhenti dan tanya: “Siapa belum sampai ke skrin yang sama?”
- Anggap kelewatan akses, salah klik dan output berbeza sebagai perkara biasa, bukan kegagalan peserta.

Ayat pembukaan yang disyorkan:

> Hari ini kita tidak belajar menjadi pengatur cara. Kita belajar memberikan arahan kerja yang jelas kepada pembantu AI dan menyemak hasilnya. Untuk percubaan pertama, ikut langkah saya tanpa mengubah apa-apa.

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
  - [Nota mesyuarat sintetik](../04_Hands-on-Exercises/sample-materials/synthetic-meeting-notes.md);
  - [Arahan Gem Pembantu Minit Mesyuarat](../04_Hands-on-Exercises/sample-materials/meeting-assistant-gem-instructions.md);
  - [Kes ujian Pembantu Minit Mesyuarat](../04_Hands-on-Exercises/sample-materials/meeting-assistant-test-cases.md);
  - [Kes mesyuarat sebenar yang dinyahidentiti](../04_Hands-on-Exercises/sample-materials/real-meeting-training-case-ms.md) untuk aktiviti audit lanjutan.
- Besarkan paparan pelayar dan teks editor supaya boleh dibaca oleh peserta.
- Matikan pemberitahuan komputer.
- Gunakan tetingkap pelayar bersih tanpa e-mel, fail Drive atau sejarah akaun peribadi.
- Sediakan pelan gantian perbualan Gemini biasa atau ChatGPT Free.

## Demonstrasi langsung 15 minit — ikut saya

### Minit 0–2 — Tetapkan jangkaan

Nyatakan:

> Kita hanya mahu satu hasil mudah: draf minit yang boleh disemak. AI tidak akan menghantar apa-apa dan kita tidak akan mempercayai output tanpa melihat nota asal.

Paparkan tiga tab yang telah dibuka: aplikasi AI, nota sintetik dan [flow prompt lengkap](../04_Hands-on-Exercises/facilitator-complete-prompt-flow-ms.md).

### Minit 2–5 — Salin arahan ringkas

1. Buka bahagian **Mula di sini — laluan paling mudah**.
2. Salin **Langkah Mudah 1 — Salin arahan ringkas**.
3. Tampal dalam Gemini biasa atau ChatGPT.
4. Tekan hantar.

Sebut:

> Jangan ubah prompt dahulu. Kita mahu semua orang bermula daripada arahan yang sama.

Berhenti dan tanya:

> Siapa belum melihat jawapan daripada AI?

Jika peserta belum berjaya, bantu mereka menyelesaikan langkah itu sahaja. Jangan bergerak ke Gem atau penerangan konsep.

### Minit 5–8 — Tampal nota yang sama

1. Buka [nota mesyuarat sintetik](../04_Hands-on-Exercises/sample-materials/synthetic-meeting-notes.md).
2. Salin keseluruhan nota.
3. Kembali ke perbualan AI yang sama.
4. Tampal nota selepas teks **Langkah Mudah 2**.
5. Tekan hantar.

Sebut:

> Kita sedang memberikan bahan kerja, bukan arahan baharu. Sebab itu nota diletakkan selepas arahan pembantu.

### Minit 8–11 — Semak empat perkara

Jangan semak semua butiran. Cari empat perkara sahaja:

- ringkasan sepadan dengan nota;
- maklumat hilang ditulis `Tidak dinyatakan`;
- cadangan tidak menjadi keputusan; dan
- output ialah draf untuk semakan manusia.

Sebut:

> Jawapan yang cantik belum tentu betul. Kerja kita sekarang ialah mencari bukti, bukan menilai gaya bahasa.

### Minit 11–13 — Tunjukkan satu masalah

Tampal:

> Seseorang perlu menyediakan laporan secepat mungkin. Sediakan tindakan lengkap dengan nama pemilik dan tarikh akhir.

Tanya peserta:

> Apakah yang AI tidak patut teka?

Jawapan: nama pemilik dan tarikh akhir.

Jika AI meneka, tampal satu pembaikan:

> Jangan meneka pemilik atau tarikh. Jika tidak disebut dengan jelas, tulis “Tidak dinyatakan”.

### Minit 13–15 — Terangkan Gem selepas kejayaan

Nyatakan:

> Kita baru sahaja menggunakan arahan sementara. Gemini Gem menyimpan arahan ini supaya kita tidak perlu menampalnya setiap kali. Membina Gem ialah langkah seterusnya, bukan syarat untuk memahami latihan ini.

Peserta yang bersedia boleh mencipta Gem menggunakan arahan lengkap. Peserta yang masih perlukan sokongan boleh mengulang tiga Langkah Mudah dalam perbualan biasa.

## Apabila peserta tersekat

Gunakan jadual ini. Selesaikan satu masalah sahaja sebelum meneruskan.

| Situasi peserta | Ayat yang boleh anda sebut | Tindakan segera |
|---|---|---|
| “Saya tidak jumpa Gems” | “Tidak mengapa. Gunakan ruang perbualan biasa; hasil pembelajaran tetap sama.” | Buka perbualan baharu dan tampal Langkah Mudah 1. |
| “Saya tidak tahu apa hendak salin” | “Klik pautan nota sintetik, pilih semua teks nota dan salin.” | Tunjukkan fail nota pada skrin; jangan beri fail lain dahulu. |
| “Jawapan saya tidak sama dengan penceramah” | “Output boleh berbeza. Kita semak fakta yang sama, bukan ayat yang sama.” | Cari keputusan, tindakan, maklumat hilang dan semakan manusia. |
| “AI meletakkan nama atau tarikh sendiri” | “Itulah kegagalan yang kita mahu kesan.” | Tampal: `Jangan meneka. Jika tiada dalam nota, tulis Tidak dinyatakan.` |
| “Output terlalu panjang” | “Kita ringkaskan selepas memastikan fakta betul.” | Tampal: `Ringkaskan kepada satu ringkasan dan satu jadual tindakan. Kekalkan maklumat hilang.` |
| Peserta masih di langkah sebelumnya | “Kita berhenti seketika. Siapa sudah sampai boleh bantu rakan di sebelah.” | Beri dua minit bantuan rakan; jangan tambah penerangan baharu. |
| Internet atau akaun gagal | “Kita masih boleh belajar menyemak output.” | Paparkan satu output contoh dan minta peserta membandingkannya dengan nota bercetak. |

Ayat untuk menenangkan peserta:

> Jika hasil anda berbeza atau salah, itu bukan bermaksud anda gagal. Kita sedang belajar cara mengesan dan membaiki kesilapan AI.

## Ciri demonstrasi yang berjaya

Peserta boleh mengenal pasti:

- sebab permintaan asal tidak mempunyai maklumat yang mencukupi;
- peranan arahan kekal;
- perbezaan antara output berguna dengan output yang telah disahkan;
- cara kes ujian mendedahkan kelemahan; dan
- lokasi kelulusan manusia dalam aliran kerja.

## Aktiviti lanjutan 10 minit — transkrip sebenar yang dinyahidentiti

Jika masa dan akses platform mengizinkan:

1. berikan [kes mesyuarat sebenar yang dinyahidentiti](../04_Hands-on-Exercises/sample-materials/real-meeting-training-case-ms.md) kepada peserta;
2. jalankan Prompt 1 dan Prompt 2 dalam pembantu yang telah dibina;
3. minta peserta menanda setiap output sebagai keputusan, cadangan, tindakan bersyarat atau maklumat tidak lengkap;
4. dedahkan audit jawapan rujukan pada penghujung fail; dan
5. tekankan bahawa audio asal ialah rujukan fasilitator sahaja dan tidak boleh dimuat naik atau diedarkan.

Jika fasilitator mahu memainkan audio, gunakan petikan 00:57:24–01:03:37 daripada salinan tempatan. Beritahu peserta bahawa transkrip latihan telah dipendekkan, dinyahidentiti dan bukan transkrip kata demi kata.

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
