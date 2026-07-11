# Himpunan Prompt Salin dan Tampal

Gunakan himpunan ini semasa Latihan Agentic AI UTM. Gantikan teks dalam `[kurungan siku]` sebelum menghantar prompt. Gunakan hanya maklumat sintetik, awam atau yang diluluskan oleh institusi. Jangan masukkan data peribadi, rekod penilaian, kata laluan, penyelidikan sulit atau bahan institusi yang belum diterbitkan ke dalam alat AI yang tidak diluluskan.

## 1. Pilih tugasan yang sesuai

### Prompt A — Jana calon tugasan

```text
Saya bekerja dalam bidang [pengajaran/sokongan penyelidikan/pentadbiran/perkhidmatan pelajar].

Cadangkan tiga tugasan berulang dan berisiko rendah yang boleh mendapat manfaat daripada pembantu AI boleh guna semula. Bagi setiap tugasan, nyatakan:
1. pengguna;
2. input berulang;
3. output yang dijangka;
4. sebab AI mungkin membantu;
5. risiko utama; dan
6. bahagian yang memerlukan semakan manusia.

Kecualikan tugasan yang melibatkan maklumat sulit, peribadi, penilaian, kata laluan, kewangan atau penyelidikan yang belum diterbitkan.
```

### Prompt B — Nilai idea sedia ada

```text
Nilai cadangan tugasan pembantu AI berikut:

[HURAIKAN TUGASAN]

Tentukan sama ada tugasan ini berulang, sempit, boleh diperhatikan, berisiko rendah dan boleh diuji. Kenal pasti batas yang tidak jelas, maklumat yang diperlukan, kemungkinan kegagalan dan satu titik kelulusan manusia. Akhiri dengan salah satu cadangan ini: sesuai sekarang, sesuai selepas dikecilkan skop, atau tidak sesuai untuk latihan ini. Jelaskan keputusan secara ringkas.
```

### Prompt C — Bandingkan automasi tetap dengan pembantu AI

```text
Bandingkan dua pendekatan untuk tugasan berikut:

[HURAIKAN TUGASAN]

Pendekatan 1: aliran kerja tetap berasaskan peraturan.
Pendekatan 2: pembantu AI boleh guna semula.

Bandingkan keperluan pertimbangan, variasi input, kebolehjelasan, risiko ralat, penyelenggaraan dan pengawasan manusia. Cadangkan pendekatan paling ringkas yang mencukupi. Jangan anggap bahawa AI sentiasa merupakan pilihan yang lebih baik.
```

## 2. Tetapkan pengguna, matlamat dan batas

### Prompt A — Draf skop

```text
Bantu saya menetapkan skop pembantu AI boleh guna semula untuk tugasan berikut:

[TUGASAN]

Drafkan:
- pengguna dan kerja yang perlu diselesaikan;
- satu matlamat yang sempit dan boleh diperhatikan;
- sekurang-kurangnya tiga perkara yang bukan matlamat;
- input yang dibenarkan;
- maklumat yang dilarang;
- tindakan yang dibenarkan;
- tindakan yang dilarang;
- satu titik kelulusan manusia; dan
- syarat berhenti atau eskalasi.

Jangan mereka-reka akses kepada alat, fail, individu atau sistem.
```

### Prompt B — Cabar batas yang ditetapkan

```text
Bertindak sebagai penyemak kritikal bagi skop pembantu AI berikut:

[TAMPAL DRAF SKOP]

Cari kebenaran yang kabur, andaian tersembunyi, perkara bukan matlamat yang hilang, risiko privasi, tindakan tanpa sokongan dan keadaan yang memerlukan pembantu berhenti. Tanya maksimum lima soalan penjelasan, kemudian cadangkan skop semakan yang lebih selamat menggunakan maklumat yang diberikan sahaja.
```

### Prompt C — Tukar skop kepada templat satu halaman

```text
Tukarkan maklumat di bawah kepada reka bentuk ejen satu halaman yang ringkas.

[TAMPAL NOTA TUGASAN]

Gunakan tajuk berikut:
1. Pengguna dan kerja yang perlu diselesaikan
2. Matlamat dan bukan matlamat
3. Input, alat dan kebenaran
4. Aliran kerja dan output
5. Kriteria kejayaan yang boleh diukur
6. Risiko, syarat berhenti dan eskalasi

Tandakan maklumat yang hilang sebagai "Tidak dinyatakan" dan jangan mengisi kekosongan dengan tekaan.
```

## 3. Reka aliran kerja dan output

### Prompt A — Cipta aliran kerja minimum

```text
Reka aliran kerja paling kecil yang masih berguna untuk pembantu berikut:

[TAMPAL SKOP YANG DILULUSKAN]

Paparkan aliran sebagai langkah bernombor daripada permintaan pengguna sehingga output akhir yang disemak manusia. Bagi setiap langkah, nyatakan input, tindakan pembantu, output, semakan pengesahan dan syarat berhenti. Kekalkan tindakan luaran dalam bentuk draf kecuali kelulusan jelas telah diberikan.
```

### Prompt B — Tetapkan format output yang berguna

```text
Cadangkan format output yang jelas untuk tugasan berikut:

[TUGASAN DAN PENGGUNA]

Format tersebut mesti membantu pengguna mengesahkan jawapan berdasarkan bukti sumber. Sertakan ruang untuk maklumat yang hilang, ketidakpastian, perkara yang memerlukan kelulusan dan tindakan manusia seterusnya yang dicadangkan. Pastikan format cukup ringkas untuk penggunaan berulang.
```

### Prompt C — Tetapkan kejayaan yang boleh diukur

```text
Tulis lima kriteria kejayaan yang boleh diukur untuk pembantu AI berikut:

[TAMPAL SKOP DAN FORMAT OUTPUT]

Sertakan kriteria bagi kelengkapan, sokongan fakta, pengendalian maklumat hilang, pematuhan batas dan kegunaan kepada penyemak manusia. Tulis setiap kriteria supaya penguji boleh menandakannya sebagai lulus atau gagal.
```

## 4. Draf arahan kekal Gemini Gem

### Prompt A — Draf arahan lengkap

```text
Cipta arahan kekal untuk Gemini Gem berdasarkan reka bentuk yang diluluskan ini sahaja:

[TAMPAL REKA BENTUK EJEN SATU HALAMAN]

Gunakan tajuk berikut:
- Peranan
- Pengguna dan matlamat
- Input yang dibenarkan
- Aliran kerja wajib
- Output wajib
- Peraturan bukti dan ketidakpastian
- Tindakan yang dilarang
- Syarat berhenti dan eskalasi
- Titik kelulusan manusia

Gunakan arahan yang terus dan boleh diuji. Jangan mendakwa mempunyai akses kepada alat atau data yang tidak disenaraikan. Tandakan fakta yang hilang sebagai "Tidak dinyatakan" dan jangan meneka.
```

### Prompt B — Draf arahan ringkas

```text
Tukarkan reka bentuk di bawah kepada arahan pembantu boleh guna semula yang ringkas dan tidak melebihi 500 patah perkataan:

[TAMPAL REKA BENTUK EJEN SATU HALAMAN]

Kekalkan semua batas kebenaran, perkara bukan matlamat, medan output wajib, peraturan bukti, mesej kegagalan dan titik semakan manusia. Buang pengulangan tanpa melemahkan kawalan keselamatan.
```

### Prompt C — Audit arahan Gem

```text
Audit arahan Gemini Gem berikut sebelum digunakan:

[TAMPAL ARAHAN GEM]

Semak matlamat yang tidak jelas, arahan bercanggah, keperluan output yang hilang, akses alat yang direka, peraturan bukti yang lemah, kawalan privasi yang tiada, tingkah laku penolakan yang hilang dan ketiadaan kelulusan manusia. Berikan:
1. isu mengikut tahap tinggi/sederhana/rendah;
2. cadangan penggantian yang tepat; dan
3. keputusan akhir tentang tahap kesiapsiagaan.
```

## 5. Jalankan demonstrasi Pembantu Tindakan Mesyuarat

Untuk demonstrasi fasilitator, tampal dahulu arahan lengkap daripada `sample-materials/meeting-assistant-gem-instructions.md`. Kemudian gunakan salah satu prompt berikut bersama nota sintetik.

### Prompt A — Pengekstrakan standard

```text
Dengan menggunakan nota mesyuarat di bawah sahaja, sediakan ringkasan mesyuarat, keputusan, daftar tindakan, soalan belum selesai dan perkara yang memerlukan kelulusan manusia. Jangan membuat inferens tentang pemilik atau tarikh yang hilang.

[TAMPAL NOTA MESYUARAT SINTETIK]
```

### Prompt B — Pengekstrakan berfokuskan bukti

```text
Proses nota mesyuarat ini menggunakan aliran kerja yang diwajibkan. Bagi setiap keputusan dan tindakan, sertakan bukti sokongan yang tepat daripada nota. Tandakan maklumat yang hilang atau bercanggah sebagai "Tidak dinyatakan" atau "Memerlukan penjelasan".

[TAMPAL NOTA MESYUARAT SINTETIK]
```

### Prompt C — Serahan untuk semakan manusia

```text
Cipta draf rekod daripada nota berikut untuk disahkan oleh pengerusi mesyuarat. Asingkan fakta sumber daripada cadangan, kurangkan pengulangan maklumat sensitif dan akhiri dengan senarai semak pengesahan ringkas untuk pengerusi.

[TAMPAL NOTA MESYUARAT SINTETIK]
```

## 6. Jana dan jalankan kes ujian

### Prompt A — Jana tiga ujian utama

```text
Cipta tiga kes ujian untuk pembantu AI berikut:

[TAMPAL REKA BENTUK YANG DILULUSKAN ATAU ARAHAN GEM]

Sertakan:
1. satu kes biasa;
2. satu kes pinggir dengan maklumat hilang atau bercanggah; dan
3. satu permintaan tidak selamat atau di luar skop.

Bagi setiap kes, sediakan input sintetik, tingkah laku yang dijangka, kriteria lulus dan kegagalan yang ingin dikesan oleh ujian tersebut.
```

### Prompt B — Jana ujian mencabar

```text
Cipta tiga ujian mencabar yang selamat untuk arahan pembantu berikut:

[TAMPAL ARAHAN GEM]

Uji suntikan prompt dalam bahan sumber, permintaan untuk mereka-reka fakta yang hilang dan permintaan untuk mengambil tindakan luaran tanpa kebenaran. Gunakan data sintetik sahaja. Nyatakan tingkah laku selamat yang tepat bagi setiap ujian.
```

### Prompt C — Jalankan ujian yang diberikan

```text
Anggap perkara berikut sebagai ujian terhadap arahan kekal anda. Selesaikan tugasan, kemudian tambah bahagian bertajuk "Semakan kendiri" yang menyenaraikan bukti sumber yang digunakan, maklumat yang hilang dan sama ada sebarang tindakan diminta berada di luar kebenaran anda.

Input ujian:
[TAMPAL INPUT UJIAN]
```

## 7. Nilai output

### Prompt A — Beri skor berdasarkan kriteria

```text
Nilai output calon berdasarkan sumber dan kriteria lulus di bawah.

SUMBER:
[TAMPAL SUMBER]

KRITERIA LULUS:
[TAMPAL KRITERIA]

OUTPUT CALON:
[TAMPAL OUTPUT]

Bagi setiap kriteria, berikan Lulus, Separa atau Gagal bersama bukti. Kenal pasti fakta yang direka, fakta sumber yang tertinggal, pelanggaran batas dan dakwaan tanpa sokongan. Jangan tulis semula output pada peringkat ini.
```

### Prompt B — Audit bukti

```text
Audit output berikut untuk memastikan setiap dakwaan disokong fakta.

Bahan sumber:
[TAMPAL SUMBER]

Output:
[TAMPAL OUTPUT]

Kelaskan setiap dakwaan penting sebagai disokong, bercanggah, tidak dinyatakan dalam sumber atau tidak jelas. Akhiri dengan tiga pembetulan berkeutamaan tertinggi.
```

### Prompt C — Senarai semak penyemak manusia

```text
Cipta senarai semak ringkas untuk manusia menyemak output di bawah. Fokus pada ketepatan fakta, kelengkapan, kebenaran, privasi, ketidakpastian dan sama ada tindakan seterusnya yang dicadangkan telah dibenarkan.

[TAMPAL OUTPUT]
```

## 8. Tambah baik arahan selepas ujian gagal

### Prompt A — Diagnosis sebelum menyunting

```text
Diagnosis kegagalan ujian pembantu berikut.

ARAHAN SEMASA:
[TAMPAL ARAHAN]

INPUT UJIAN:
[TAMPAL INPUT]

OUTPUT SEBENAR:
[TAMPAL OUTPUT]

TINGKAH LAKU YANG DIJANGKA:
[TAMPAL KRITERIA LULUS]

Kenal pasti punca utama dalam arahan. Cadangkan perubahan arahan paling kecil yang boleh membaiki kegagalan tanpa mengganggu tingkah laku betul dalam kes lain.
```

### Prompt B — Hasilkan pindaan yang tepat

```text
Berdasarkan ujian gagal di bawah, berikan teks penggantian atau tambahan yang tepat untuk arahan kekal. Pastikan perubahan ringkas dan boleh diuji. Nyatakan lokasi teks perlu dimasukkan dan ujian yang perlu dijalankan semula.

[TAMPAL BUTIRAN UJIAN GAGAL]
```

### Prompt C — Semakan regresi

```text
Semak arahan dan set ujian yang telah dipinda di bawah.

ARAHAN DIPINDA:
[TAMPAL ARAHAN DIPINDA]

SET UJIAN:
[TAMPAL UJIAN]

Kenal pasti sama ada pembaikan boleh menyebabkan regresi dalam kes lain. Cadangkan maksimum dua ujian regresi tambahan dan tetapkan kriteria lulus bagi setiap ujian.
```

## 9. Rancang pelaksanaan rintis yang bertanggungjawab

### Prompt A — Pelan pelaksanaan rintis

```text
Cipta pelan pelaksanaan rintis yang kecil dan bertanggungjawab untuk pembantu AI berikut:

[TAMPAL REKA BENTUK YANG DILULUSKAN DAN KEPUTUSAN UJIAN]

Sertakan skop, pengguna, data diluluskan, tempoh, proses semakan manusia, ukuran kejayaan, pengendalian insiden, pemantauan, kriteria berhenti dan keputusan yang diperlukan pada akhir tempoh. Pastikan semua tindakan yang mempunyai kesan kekal berada di bawah kawalan manusia.
```

### Prompt B — Semakan risiko

```text
Semak cadangan pelaksanaan rintis pembantu AI ini dari segi privasi, keselamatan, ketepatan, bias, kebenaran, kebergantungan operasi dan kebergantungan berlebihan pengguna:

[TAMPAL PELAN PELAKSANAAN RINTIS]

Bagi setiap risiko, nyatakan kebarangkalian, impak, mitigasi, pemilik dan pencetus yang boleh diukur untuk menghentikan sementara pelaksanaan. Jangan anggap kelulusan institusi telah diberikan.
```

### Prompt C — Refleksi penutup

```text
Dengan menggunakan reka bentuk dan bukti ujian di bawah, draf refleksi yang ringkas:

[TAMPAL REKA BENTUK DAN NOTA UJIAN]

Jawab:
1. Apakah yang berfungsi dengan konsisten?
2. Apakah yang gagal atau masih tidak pasti?
3. Apakah kawalan manusia yang penting?
4. Apakah yang perlu ditambah baik sebelum penggunaan sebenar?
5. Apakah satu langkah seterusnya yang bertanggungjawab?

Bezakan bukti ujian yang diperhatikan daripada jangkaan atau pendapat.
```

## Rentetan carian

Gunakan carian hanya apabila maklumat semasa dan berautoriti diperlukan. Utamakan dokumentasi rasmi produk dan dasar institusi berbanding blog atau kandungan promosi.

### A. Semak akses dan ciri Gemini Gems

```text
site:support.google.com/gemini Gems create edit account requirements
```

```text
site:support.google.com/gemini "Use Gems in Gemini Apps" work school account
```

```text
site:support.google.com/gemini "Gemini Apps" privacy data work school account
```

### B. Semak keupayaan semasa ChatGPT sebagai pelan gantian

```text
site:help.openai.com ChatGPT Free Tier GPTs create custom GPT availability
```

```text
site:help.openai.com ChatGPT agent availability plans
```

```text
site:openai.com/policies ChatGPT data privacy business education
```

### C. Cari peraturan institusi sebelum pelaksanaan sebenar

Gantikan `[INSTITUSI]` dan `[SISTEM]` dengan nama yang berkaitan.

```text
site:[DOMAIN RASMI INSTITUSI] dasar AI generatif kakitangan privasi data
```

```text
site:[DOMAIN RASMI INSTITUSI] keselamatan maklumat penggunaan alat AI
```

```text
site:[DOMAIN RASMI INSTITUSI] [SISTEM] klasifikasi data peribadi sulit
```

### D. Cari bukti diluluskan untuk tugasan kerja

Gantikan pemegang tempat dan hadkan hasil kepada domain yang diluluskan.

```text
site:[DOMAIN DILULUSKAN] [TOPIK] garis panduan filetype:pdf
```

```text
site:[DOMAIN DILULUSKAN] [NAMA PROSES] dasar OR prosedur
```

```text
site:[DOMAIN DILULUSKAN] [TOPIK] soalan lazim OR panduan after:2025-01-01
```

## Sebelum menghantar sebarang prompt

- Gantikan setiap pemegang tempat dalam `[kurungan siku]`.
- Buang maklumat peribadi, sulit, penilaian, kata laluan, kewangan atau penyelidikan yang belum diterbitkan.
- Nyatakan sumber yang boleh digunakan oleh pembantu.
- Nyatakan perkara yang tidak dibenarkan dilakukan oleh pembantu.
- Minta maklumat hilang ditandakan dan bukan direka.
- Kekalkan titik kelulusan manusia sebelum pengedaran atau tindakan.
- Sahkan output penting berdasarkan sumber asal.
