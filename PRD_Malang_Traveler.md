# PRD — Website Malang Traveler

**Domain:** malangtraveler.web.id
**Jenis Proyek:** Website company profile + lead generation (Event Organizer, Outbound, Camping, Glamping, Corporate Gathering)
**Versi:** 1.0 (Draft)
**Tanggal:** 19 September 2026

---

## 1. Ringkasan Produk

Malang Traveler adalah website penyedia layanan **corporate gathering, team building, outbound, camping, glamping, gala dinner, outdoor meeting, offroad, dan wisata Bromo** di wilayah Malang Raya dan sekitarnya. Website berfungsi sebagai:

1. **Etalase layanan** — menampilkan Program, Paket, dan Destinasi secara jelas.
2. **Mesin lead** — semua CTA diarahkan ke WhatsApp **0889-8964-3555**.
3. **Aset SEO/AEO/GEO** — agar Malang Traveler muncul di Google, Google AI Overview, ChatGPT, Gemini, Perplexity, dan mesin generatif lain saat calon klien mencari layanan sejenis.

## 2. Tujuan & Indikator Keberhasilan (KPI)

| Tujuan | KPI | Target 6 bulan (usulan) |
|---|---|---|
| Menghasilkan lead | Klik tombol WhatsApp / bulan | 300+ |
| Trafik organik | Sesi organik / bulan | 3.000+ |
| Visibilitas keyword | Keyword utama di halaman 1 Google | 10+ keyword |
| Visibilitas AI | Brand/URL disebut atau dikutip mesin generatif untuk query target | Terpantau di 5+ query |
| Kecepatan | Core Web Vitals lulus (LCP < 2,5 dtk, INP < 200 ms, CLS < 0,1) | 100% halaman utama |
| Kepercayaan | Jumlah testimoni terverifikasi | 15+ |

> Angka target adalah usulan awal; sesuaikan dengan kapasitas bisnis.

## 3. Target Market & Persona

**Segmen layanan:** Camping Pantai, Camping Coban Rondo, Glamping, Meeting Outdoor.

**Persona utama**
- **HRD / GA perusahaan** — mencari gathering, team building, outbound, company outing. Butuh: kredibilitas, proposal, paket jelas, dokumentasi kegiatan.
- **Event/Marketing organizer** — mencari gala dinner, outdoor meeting, venue unik.
- **Instansi/sekolah/komunitas** — mencari outbound & camping dengan anggaran terkendali.
- **Wisatawan grup/keluarga** — mencari Bromo sunrise, offroad, glamping.

**Wilayah target:** Batu–Malang, Malang Kota/Kabupaten, Malang Selatan (pantai), Lembah Tumpang, Bromo, Trawas, Tretes, Pacet, Mojokerto, Kediri, Tulungagung.

## 4. Ruang Lingkup

**Termasuk (In Scope)**
- Website multi-halaman responsif (mobile-first)
- Dropdown Program, listing Paket, listing Destinasi
- Galeri, Blog, halaman Tentang Kami
- Integrasi WhatsApp (tombol, floating button, link kontak)
- Implementasi SEO teknis, AEO, dan GEO sesuai Bagian 9–11
- Analytics & tracking klik WhatsApp

**Tidak termasuk (Out of Scope, fase 1)**
- Booking & pembayaran online
- Login pengguna / dashboard klien
- Multi-bahasa (opsional fase 2: English untuk Bromo)

## 5. Struktur Navigasi (Navbar)

```
Beranda | Tentang Kami | Program ▾ | Paket | Destinasi | Galeri | Blog | Kontak
```

> **Catatan:** pada daftar awal navbar mencantumkan "Destinasi", tetapi pada blok struktur tidak. PRD ini **memasukkan Destinasi** karena halaman dan sitemap-nya sudah didefinisikan.

- **Program** → dropdown berisi 12 sub-halaman.
- **Kontak** → diarahkan ke WhatsApp `https://wa.me/6288989643555` (lihat catatan Bagian 7.8).
- Navbar sticky, tombol "Chat WhatsApp" menonjol di sisi kanan (desktop) dan floating button (mobile).

## 6. Mapping Sitemap & URL

### 6.1 Peta Situs

```
/                                   → Beranda
/tentang-kami/                      → Tentang Kami
/program/                           → Indeks Program (landing dropdown)
│   ├── /program/corporate-gathering/
│   ├── /program/team-building/
│   ├── /program/outbound/
│   ├── /program/company-outing/
│   ├── /program/camping/
│   ├── /program/glamping/
│   ├── /program/gala-dinner/
│   ├── /program/outdoor-meeting/
│   ├── /program/offroad/
│   ├── /program/bromo-adventure/
│   ├── /program/bromo-sunrise/
│   └── /program/outbound-pantai/
/paket/                             → Listing Paket (langsung menampilkan paket)
│   ├── /paket/paket-corporate-gathering/
│   ├── /paket/paket-team-building/
│   ├── /paket/paket-outbound/
│   ├── /paket/paket-camping-corporate/
│   ├── /paket/paket-glamping-corporate/
│   ├── /paket/paket-gala-dinner/
│   ├── /paket/paket-bromo-adventure/
│   ├── /paket/paket-offroad/
│   ├── /paket/paket-outbound-pantai/
│   ├── /paket/paket-1-hari/
│   ├── /paket/paket-2d1n/
│   ├── /paket/paket-3d2n/
│   └── /paket/paket-custom/
/destinasi/                         → Listing Destinasi & Wisata
│   ├── /destinasi/batu-malang/
│   ├── /destinasi/malang/
│   ├── /destinasi/trawas/
│   ├── /destinasi/tretes/
│   ├── /destinasi/pacet/
│   ├── /destinasi/kediri/
│   ├── /destinasi/tulungagung/
│   ├── /destinasi/lembah-tumpang/
│   ├── /destinasi/bromo/
│   └── /destinasi/malang-selatan/
/galeri/                            → Galeri program & kegiatan
/blog/                              → Artikel & insight
│   └── /blog/{slug-artikel}/
/kontak/                            → Halaman kontak (fallback) + redirect/CTA ke WhatsApp
```

**Aturan URL:** huruf kecil, kata dipisah tanda hubung (`-`), tanpa parameter, tanpa underscore, tanpa tahun, maksimal 3 level, trailing slash konsisten, HTTPS wajib, satu versi domain (non-www atau www, pilih satu, 301 untuk yang lain).

### 6.2 Mapping Keyword → Halaman (Anti-Kanibalisasi)

Satu keyword utama = satu halaman utama. Halaman lain hanya boleh menjadi pendukung dan menautkan ke halaman utama.

| Keyword Target | Halaman Utama (Primary) | Halaman Pendukung |
|---|---|---|
| Corporate gathering Malang | `/program/corporate-gathering/` | `/paket/paket-corporate-gathering/`, `/program/company-outing/` |
| Gathering (umum: gathering Batu/Malang) | `/program/corporate-gathering/` | `/destinasi/batu-malang/`, blog |
| Gala dinner | `/program/gala-dinner/` | `/paket/paket-gala-dinner/` |
| Outbound Pantai Malang Selatan | `/program/outbound-pantai/` | `/destinasi/malang-selatan/`, `/paket/paket-outbound-pantai/` |
| Outbound Bromo | `/program/bromo-adventure/` | `/destinasi/bromo/`, `/paket/paket-bromo-adventure/` |
| Bromo sunrise | `/program/bromo-sunrise/` | `/destinasi/bromo/`, blog |
| Offroad (Bromo/Malang) | `/program/offroad/` | `/paket/paket-offroad/` |
| Team building Malang | `/program/team-building/` | `/paket/paket-team-building/` |
| Outbound Malang / Batu | `/program/outbound/` | `/paket/paket-outbound/` |
| Camping Coban Rondo | `/program/camping/` | `/destinasi/batu-malang/`, blog |
| Camping pantai | `/program/camping/` | `/destinasi/malang-selatan/`, `/program/outbound-pantai/` |
| Glamping Malang / Batu | `/program/glamping/` | `/paket/paket-glamping-corporate/` |
| Meeting outdoor | `/program/outdoor-meeting/` | `/paket/paket-corporate-gathering/` |
| Outbound Trawas / Tretes / Pacet | `/destinasi/trawas/` `/destinasi/tretes/` `/destinasi/pacet/` | `/program/outbound/` |
| Outbound Kediri / Tulungagung | `/destinasi/kediri/` `/destinasi/tulungagung/` | `/program/outbound/` |
| Wisata/outbound Lembah Tumpang | `/destinasi/lembah-tumpang/` | `/program/camping/` |

> **Koreksi penulisan keyword dari brief:** "Ghatering" → *Gathering*; "Covporate Guatering" → *Corporate Gathering*; "Ouboutto Partai malang Selatan" → *Outbound Pantai Malang Selatan*; "Tulung Agung" → *Tulungagung*. Gunakan ejaan yang benar di seluruh konten, tetapi boleh menyertakan satu variasi ejaan umum secara wajar di FAQ/blog bila memang sering dicari.

### 6.3 Mapping Program ↔ Paket ↔ Destinasi (Internal Linking)

| Program | Paket Terkait | Destinasi Terkait |
|---|---|---|
| Corporate Gathering | Paket Corporate Gathering, Paket 1 Hari, 2D1N | Batu Malang, Trawas, Tretes, Pacet |
| Team Building | Paket Team Building, Paket 1 Hari | Batu Malang, Trawas, Pacet, Kediri |
| Outbound | Paket Outbound, Paket 1 Hari | Batu Malang, Lembah Tumpang, Tulungagung |
| Company Outing | Paket 1 Hari, 2D1N, 3D2N | Malang, Batu Malang, Bromo |
| Camping | Paket Camping Corporate, 2D1N | Batu Malang (Coban Rondo), Malang Selatan, Lembah Tumpang |
| Glamping | Paket Glamping Corporate, 2D1N | Batu Malang, Pacet, Trawas |
| Gala Dinner | Paket Gala Dinner | Batu Malang, Malang, Tretes |
| Outdoor Meeting | Paket Corporate Gathering | Batu Malang, Pacet, Trawas, Tretes |
| Offroad | Paket Offroad | Bromo, Lembah Tumpang |
| Bromo Adventure | Paket Bromo Adventure, 2D1N, 3D2N | Bromo |
| Bromo Sunrise | Paket Bromo Adventure, Paket 1 Hari | Bromo |
| Outbound Pantai | Paket Outbound Pantai, 2D1N | Malang Selatan |

> Tabel ini adalah **usulan relasi** untuk internal linking. Validasi ulang dengan layanan yang benar-benar tersedia sebelum konten dipublikasikan.

## 7. Spesifikasi Halaman

### 7.1 Beranda (`/`)
Urutan section:
1. **Hero** — H1 memuat keyword utama + wilayah (mis. "Corporate Gathering, Outbound & Camping di Malang Raya"), sub-headline, CTA "Chat WhatsApp" + CTA sekunder "Lihat Paket".
2. **About Us (singkat)** — 2–3 paragraf/3 kalimat pembuka yang langsung menjelaskan siapa Malang Traveler, layanan, dan wilayah. Tautan ke Tentang Kami.
3. **Value Propositions** — 4–6 poin keunggulan (ikon + judul + 1 kalimat).
4. **Program** — grid kartu 12 program (atau 6 unggulan + "Lihat semua").
5. **Paket** — kartu paket unggulan + tautan ke `/paket/`.
6. **Testimoni Jujur** — testimoni asli (nama, instansi, foto/logo bila ada izin, tanggal kegiatan). Dilarang testimoni fiktif.
7. **FAQ** — 6–10 pertanyaan (lihat Bagian 10), dengan FAQPage schema.
8. **CTA** — ajakan konsultasi gratis via WhatsApp.
9. **Footer** — nama usaha, alamat, WhatsApp, jam layanan, tautan cepat (Program/Paket/Destinasi), media sosial.

### 7.2 Tentang Kami (`/tentang-kami/`)
Keunggulan → Visi → Misi → CTA. Tambahkan (sangat disarankan untuk E-E-A-T): profil tim/pemilik, pengalaman (tahun/jumlah event), legalitas/izin bila ada, alamat & peta.

### 7.3 Program (`/program/` + 12 sub-halaman)
- Navbar memakai **dropdown**; `/program/` tetap ada sebagai halaman indeks.
- **Template sub-halaman program:** Hero (H1) → Ringkasan jawaban 40–60 kata → Apa itu program ini → Aktivitas/rundown contoh → Cocok untuk siapa → Lokasi rekomendasi (tautan ke Destinasi) → Paket terkait → Galeri singkat → FAQ (3–5) → CTA WhatsApp.

### 7.4 Paket (`/paket/`)
- Langsung menampilkan **kartu semua paket** (13 paket) dengan filter/kategori: *Berdasarkan Program* (Corporate, Team Building, Outbound, Camping, Glamping, Gala Dinner, Bromo, Offroad, Pantai) dan *Berdasarkan Durasi* (1 Hari, 2D1N, 3D2N, Custom).
- Tiap kartu: nama, durasi, minimal peserta, ringkasan isi paket, "mulai dari Rp…" (atau "Hubungi kami"), tombol WhatsApp dengan pesan otomatis berisi nama paket.
- Tiap paket punya **halaman detail** (untuk SEO): fasilitas termasuk/tidak termasuk, rundown, syarat & ketentuan, FAQ, schema.

### 7.5 Destinasi (`/destinasi/`)
- Langsung menampilkan **kartu 10 destinasi & wisata**. Tiap halaman destinasi: gambaran lokasi, aktivitas unggulan, program/paket yang cocok di lokasi tersebut, tips (akses, cuaca, waktu terbaik), galeri, FAQ, CTA.

### 7.6 Galeri (`/galeri/`)
Kumpulan foto/video program dan kegiatan, dapat difilter per program. Wajib: nama file deskriptif, alt text, caption dengan konteks (jenis kegiatan, lokasi, klien bila diizinkan), lazy-load, format WebP/AVIF.

### 7.7 Blog (`/blog/`)
Artikel & insight (lihat rencana konten Bagian 12). Ada kategori, penulis, tanggal terbit & tanggal diperbarui, daftar isi, artikel terkait.

### 7.8 Kontak (`/kontak/`)
- Sesuai brief: **diarahkan ke WhatsApp 0889-8964-3555** → `https://wa.me/6288989643555?text=...` (pesan awal otomatis: *"Halo Malang Traveler, saya ingin konsultasi tentang [program/paket]"*).
- **Rekomendasi:** item navbar "Kontak" langsung membuka WhatsApp, namun URL `/kontak/` tetap dibuat sebagai halaman ringan (nama usaha, alamat, jam layanan, WhatsApp, peta, media sosial) agar konsisten dengan data lokal (NAP) dan bisa diindeks. Hindari redirect otomatis 100% tanpa konten, karena tidak memberi sinyal lokal bagi Google dan mesin AI.
- Semua link WhatsApp memakai `rel="noopener"` dan dilacak sebagai event di analytics.

## 8. Kebutuhan Fungsional & Non-Fungsional

**Fungsional**
- F1. Dropdown Program berfungsi di desktop (hover/klik) dan mobile (accordion).
- F2. Floating tombol WhatsApp di semua halaman (mobile & desktop).
- F3. Setiap CTA membawa konteks halaman/paket ke pesan WhatsApp.
- F4. Filter di halaman Paket.
- F5. Breadcrumb di semua halaman selain Beranda.
- F6. XML sitemap & robots.txt otomatis.
- F7. Formulir opsional (nama, instansi, tanggal, jumlah peserta) yang tetap mengirim ke WhatsApp.

**Non-Fungsional**
- N1. Mobile-first; mayoritas trafik diperkirakan dari ponsel.
- N2. Core Web Vitals lulus (LCP < 2,5 dtk; INP < 200 ms; CLS < 0,1).
- N3. Skor Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO) pada halaman utama.
- N4. HTTPS, header keamanan dasar, backup berkala.
- N5. Aksesibilitas WCAG 2.1 AA (kontras, alt text, navigasi keyboard).
- N6. Konten dapat diubah non-developer (CMS).

**Stack (usulan, bebas dipilih tim):** WordPress (Elementor/Bricks + plugin SEO seperti Rank Math/Yoast + cache) atau framework statis (Astro/Next.js). Pilih yang paling mudah dirawat tim konten.

---

## 9. ATURAN WAJIB SEO (Search Engine Optimization)

### 9.1 On-Page (wajib di setiap halaman)
1. **Satu H1 per halaman**, memuat keyword utama halaman tersebut + konteks lokasi bila relevan.
2. **Title tag** ≤ 60 karakter, format: `Keyword Utama + Lokasi | Malang Traveler`. Unik per halaman.
3. **Meta description** 140–160 karakter, memuat keyword + manfaat + ajakan bertindak. Unik per halaman.
4. **Keyword utama** muncul di: H1, 100 kata pertama, minimal satu H2, URL, alt text gambar utama. Hindari keyword stuffing; tulis natural.
5. **Struktur heading** berurutan (H1 → H2 → H3), tidak melompat.
6. **Panjang konten minimum:** halaman Program & Destinasi ≥ 600 kata unik; halaman Paket ≥ 400 kata; artikel blog ≥ 1.000 kata (sesuai kebutuhan topik).
7. **Konten 100% orisinal** — dilarang menyalin dari kompetitor atau menduplikasi teks antar halaman (terutama antar halaman Destinasi/Program).
8. **Internal linking:** setiap halaman Program menaut ke ≥ 2 Paket dan ≥ 1 Destinasi; setiap Paket menaut balik ke Program; setiap artikel blog menaut ke ≥ 2 halaman layanan. Anchor text deskriptif (bukan "klik di sini").
9. **Gambar:** nama file deskriptif (`outbound-pantai-malang-selatan.webp`), alt text deskriptif, dimensi `width/height` diisi, lazy-load kecuali gambar hero (LCP), format WebP/AVIF, ukuran ideal < 150 KB.
10. **Canonical tag** self-referencing di setiap halaman.
11. **Breadcrumb** tampil dan dilengkapi BreadcrumbList schema.
12. **CTA jelas** di setiap halaman (WhatsApp).

### 9.2 Teknis
1. HTTPS wajib; redirect 301 dari HTTP dan dari versi www/non-www yang tidak dipakai.
2. `robots.txt` dan `sitemap.xml` (dipisah: halaman, program, paket, destinasi, blog); daftarkan di Google Search Console & Bing Webmaster Tools.
3. Tidak ada halaman yatim (orphan) — semua halaman terjangkau ≤ 3 klik dari Beranda.
4. Tidak ada broken link (404) dan rantai redirect; audit bulanan.
5. Mobile-friendly dan Core Web Vitals lulus; hindari pop-up yang menutup konten di mobile.
6. Halaman tipis/duplikat (tag, arsip, hasil pencarian internal) diberi `noindex`.
7. Pagination & filter (Paket/Galeri) tidak boleh menghasilkan URL parameter yang terindeks berlebihan → gunakan canonical/`noindex` yang sesuai.
8. Open Graph & Twitter Card lengkap (judul, deskripsi, gambar 1200×630) agar tautan menarik saat dibagikan via WhatsApp/sosial.
9. Set `lang="id"` dan `hreflang` bila ada versi bahasa Inggris.
10. Favicon, manifest, dan halaman 404 yang ramah pengguna dengan tautan ke Program/Paket.

### 9.3 SEO Lokal (wajib)
1. Buat & lengkapi **Google Business Profile** (nama, kategori utama *Event Planner/Outbound* sesuai pilihan yang tersedia, alamat/area layanan, jam, WhatsApp, foto, layanan, produk).
2. **NAP konsisten** (Nama, Alamat, Telepon) di website, GBP, media sosial, dan direktori. Nomor: **0889-8964-3555**.
3. Halaman Destinasi berfungsi sebagai **halaman lokasi** untuk Batu, Malang, Trawas, Tretes, Pacet, Kediri, Tulungagung, Lembah Tumpang, Bromo, Malang Selatan — isi wajib unik dan spesifik lokasi (bukan template dengan nama kota diganti).
4. Sematkan Google Maps di halaman Kontak/Tentang Kami (jika ada alamat kantor/basecamp).
5. Kumpulkan ulasan Google secara etis; balas semua ulasan.
6. Daftar di direktori relevan (Google Business, Bing Places, direktori wisata/EO Jawa Timur) dengan NAP identik.

### 9.4 Off-Page
- Bangun backlink relevan (komunitas wisata, media lokal, mitra venue, klien korporat, direktori EO/outbound).
- Dilarang membeli backlink spam/PBN atau tautan massal berkualitas rendah.
- Aktifkan profil media sosial (Instagram, TikTok, YouTube, Facebook) dengan tautan ke website.

### 9.5 Larangan SEO (Anti-Pattern)
- Keyword stuffing, teks tersembunyi, cloaking, doorway pages.
- Testimoni/ulasan/rating palsu atau markup schema yang tidak sesuai isi halaman.
- Klaim tanpa dasar ("terbaik nomor 1") tanpa bukti.
- Duplikasi konten antar halaman.
- Ubah URL yang sudah terindeks tanpa 301.

---

## 10. ATURAN WAJIB AEO (Answer Engine Optimization)

Tujuan: konten dipilih sebagai **jawaban langsung** oleh featured snippet, People Also Ask, voice search, dan AI Overview.

1. **Jawaban dulu (answer-first):** setiap halaman Program/Destinasi/Paket dan artikel dibuka dengan ringkasan jawaban **40–60 kata** yang menjawab pertanyaan utama secara langsung (siapa, apa, di mana, berapa lama, cocok untuk siapa).
2. **Heading berbentuk pertanyaan** untuk section penting (mis. "Apa itu corporate gathering?", "Berapa biaya outbound di Malang?", "Kapan waktu terbaik melihat Bromo sunrise?"), diikuti jawaban ringkas 1–3 kalimat, lalu penjelasan mendalam.
3. **FAQ wajib** di Beranda (6–10 tanya jawab) dan di setiap halaman Program & Paket (3–5 tanya jawab); jawaban 30–60 kata, bahasa natural seperti orang bertanya.
4. **FAQPage schema (JSON-LD)** hanya untuk FAQ yang benar-benar tampil di halaman.
5. **Format yang mudah dikutip:** daftar bernomor untuk langkah/rundown, daftar berpoin untuk fasilitas, **tabel** untuk perbandingan paket/durasi/harga, definisi satu kalimat di awal.
6. **Riset pertanyaan:** kumpulkan dari Google "People Also Ask", "Pencarian terkait", Search Console, dan pertanyaan nyata pelanggan di WhatsApp. Minimal 30 pertanyaan dipetakan ke halaman sebelum peluncuran.
7. **Bahasa lisan (voice search):** sertakan kalimat natural seperti "Outbound di Batu cocok untuk tim 20–200 orang…" dan hindari jargon.
8. **Data spesifik & konsisten:** cantumkan angka nyata (kapasitas peserta, durasi, jam kegiatan, fasilitas, area jemput). Data harus sama di seluruh halaman, GBP, dan media sosial.
9. **Pembaruan:** tampilkan "Terakhir diperbarui" pada artikel & halaman harga/paket; tinjau minimal setiap 6 bulan.
10. **Contoh pertanyaan wajib terjawab**
    - Apa itu corporate gathering dan apa bedanya dengan team building?
    - Rekomendasi tempat outbound di Malang/Batu untuk perusahaan?
    - Berapa biaya paket outbound/gathering per orang?
    - Apa saja aktivitas outbound pantai di Malang Selatan?
    - Jam berapa harus berangkat untuk Bromo sunrise?
    - Apakah offroad Bromo aman untuk rombongan/keluarga?
    - Apa bedanya camping dan glamping?
    - Berapa minimal peserta untuk gala dinner/outdoor meeting?

---

## 11. ATURAN WAJIB GEO (Generative Engine Optimization)

Tujuan: Malang Traveler **dikenali, dipercaya, dan dikutip** oleh mesin generatif (Google AI Overview, ChatGPT, Gemini, Perplexity, Copilot, dll.) saat pengguna menanyakan layanan sejenis.

### 11.1 Entitas & Konsistensi Brand
1. Gunakan nama brand **"Malang Traveler"** secara identik di semua platform (website, GBP, sosmed, direktori).
2. Halaman **Tentang Kami** harus menjelaskan entitas dengan jelas: siapa, layanan, wilayah, tahun berdiri, pengalaman, kontak — dalam kalimat deklaratif yang mudah diekstrak.
3. Terapkan **Organization/LocalBusiness schema** dengan `sameAs` ke semua profil resmi (Instagram, TikTok, YouTube, Facebook, GBP).
4. Buat halaman/segmen "Fakta singkat" (fact box): area layanan, jenis layanan, kapasitas peserta, jam layanan, kontak.

### 11.2 Struktur Konten agar Mudah Dikutip AI
1. Tulis paragraf **mandiri (self-contained)**: satu ide per paragraf, kalimat pertama memuat inti jawaban dan nama entitas ("Malang Traveler menyediakan…").
2. Gunakan kalimat deklaratif berfakta, bukan slogan. Contoh: "Paket Outbound Pantai Malang Selatan Malang Traveler cocok untuk 30–300 peserta dan berdurasi 1 hari." *(isi dengan data asli)*
3. Sertakan **tabel perbandingan** dan **ringkasan poin (TL;DR)** di awal artikel panjang.
4. Sebut **lokasi, angka, nama tempat, dan istilah spesifik** (mis. Coban Rondo, Lembah Tumpang, Pantai Malang Selatan, Bromo) — mesin generatif menyukai detail yang dapat diverifikasi.
5. Tambahkan bagian **"Rekomendasi kami / Kapan memilih X vs Y"** untuk memfasilitasi jawaban berbasis perbandingan.

### 11.3 Sinyal Kepercayaan (E-E-A-T)
1. **Experience:** foto/video dokumentasi asli, studi kasus klien (dengan izin), rundown nyata, cerita di lapangan.
2. **Expertise:** penulis artikel jelas (nama, peran, pengalaman) dengan halaman profil penulis.
3. **Authoritativeness:** kutipan/tautan ke sumber tepercaya (pemerintah/lembaga resmi/pengelola wisata), liputan media, logo klien (izin), penghargaan/sertifikasi.
4. **Trustworthiness:** testimoni asli dan dapat diverifikasi, kebijakan pembatalan/refund, syarat & ketentuan, keamanan peserta (SOP, asuransi, pemandu terlatih), kontak jelas.
5. **Keamanan & risiko:** untuk kegiatan berisiko (offroad, outbound, camping, Bromo), tampilkan SOP keselamatan — sinyal kepercayaan penting untuk AI dan calon klien.

### 11.4 Akses & Keterbacaan oleh AI Crawler
1. **Jangan memblokir** crawler AI yang sah di `robots.txt` (mis. GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot) — kecuali ada keputusan bisnis untuk membatasi tertentu.
2. Konten penting harus **ter-render di HTML** (server-side/static), bukan hanya via JavaScript.
3. Sediakan file **`/llms.txt`** (opsional, praktik baru yang belum menjadi standar wajib) berisi ringkasan situs dan tautan ke halaman utama (Program, Paket, Destinasi, Tentang Kami, Kontak).
4. Pastikan sitemap terbaru dan tanggal `lastmod` akurat.
5. Gunakan HTML semantik (`<h1>–<h3>`, `<table>`, `<ul>`, `<article>`, `<nav>`).

### 11.5 Jejak di Luar Website (Off-Site Mentions)
Mesin generatif merujuk banyak sumber. Wajib membangun kehadiran di:
- **Google Business Profile** (lengkap, ulasan aktif).
- **YouTube** (video program, rundown, testimoni; deskripsi memuat nama brand + tautan).
- **Instagram/TikTok/Facebook** (konten konsisten dengan nama brand & lokasi).
- **Direktori & media lokal**, komunitas wisata, forum/Q&A yang relevan (kontribusi jujur, tanpa spam).
- **Ulasan pihak ketiga** (Google, Tripadvisor bila relevan).

### 11.6 Pengukuran GEO
- Setiap bulan uji **20–30 prompt** target di ChatGPT, Gemini, Perplexity, Google AI Overview. Contoh: "rekomendasi vendor outbound corporate gathering di Malang", "paket Bromo sunrise offroad untuk rombongan kantor", "tempat gala dinner outdoor di Batu".
- Catat: apakah brand disebut, apakah URL dikutip, sentimen, kompetitor yang muncul.
- Optimalkan halaman yang gagal dikutip (perjelas jawaban, tambah data, perkuat sumber).
- Pantau referral dari domain AI di analytics (perplexity.ai, chatgpt.com, dll.).

---

## 12. Schema Markup (Structured Data) — Wajib

| Halaman | Schema |
|---|---|
| Semua halaman | `Organization` + `LocalBusiness` (sub-tipe sesuai, mis. `TravelAgency`), `WebSite`, `BreadcrumbList` |
| Beranda | `Organization`, `WebSite`, `FAQPage` |
| Program | `Service` (+ `FAQPage`) |
| Paket | `Service`/`Product` dengan `Offer` (harga/rentang harga bila dicantumkan), `FAQPage` |
| Destinasi | `Place`/`TouristDestination`, `FAQPage` |
| Galeri | `ImageObject`/`ImageGallery` |
| Blog | `Article`/`BlogPosting` (author, datePublished, dateModified), `BreadcrumbList` |
| Kontak/Tentang | `ContactPoint`, `LocalBusiness` (NAP, jam, `areaServed`) |
| Testimoni | `Review` **hanya** jika ulasan asli & terlihat di halaman (tidak boleh self-serving markup yang menyesatkan) |

Format **JSON-LD**, validasi dengan Rich Results Test/Schema Markup Validator sebelum rilis. `areaServed` mencakup: Batu, Malang, Trawas, Tretes, Pacet, Mojokerto, Kediri, Tulungagung, Lembah Tumpang, Bromo, Malang Selatan.

---

## 13. Rencana Konten Blog (Artikel & Insight)

**Pilar & klaster topik (contoh awal)**

| Pilar | Contoh Artikel Klaster |
|---|---|
| Corporate Gathering | Ide corporate gathering di Malang; perbedaan gathering, outing, team building; cara memilih vendor gathering |
| Outbound & Team Building | 15 game outbound untuk team building; outbound di Batu vs Pacet vs Trawas; outbound pantai Malang Selatan |
| Camping & Glamping | Camping Coban Rondo: panduan lengkap; camping vs glamping untuk korporat; checklist camping perusahaan |
| Bromo | Jam terbaik Bromo sunrise; offroad Bromo untuk rombongan; itinerary Bromo 2D1N |
| Gala Dinner & Meeting Outdoor | Konsep gala dinner outdoor; checklist outdoor meeting; anggaran gala dinner |
| Destinasi | Wisata Lembah Tumpang; wisata Trawas & Tretes untuk gathering; wisata Tulungagung & Kediri untuk rombongan |

**Ritme:** minimal 4 artikel/bulan, sebagian besar selaras dengan mapping keyword di Bagian 6.2 dan pertanyaan AEO di Bagian 10. Setiap artikel: ringkasan jawaban di awal, daftar isi, tabel/daftar, FAQ, tautan internal ke Program/Paket/Destinasi, CTA WhatsApp.

## 14. Analytics & Tracking

- Google Analytics 4 + Google Search Console + Bing Webmaster Tools.
- Event khusus: `click_whatsapp` (dengan parameter halaman & paket), `click_call`, `scroll_75`, `view_paket`.
- Pantau: keyword per halaman, CTR, posisi, sesi organik, konversi WhatsApp, halaman dengan bounce tinggi, referral AI.
- Laporan bulanan: SEO, AEO/GEO, konversi.

## 15. Rencana Rilis (Roadmap)

| Fase | Lingkup | Estimasi |
|---|---|---|
| 1. Persiapan | Finalisasi PRD, kumpulan aset (logo, foto, testimoni, data paket & harga), riset keyword & pertanyaan | Minggu 1–2 |
| 2. Desain | Wireframe & UI Beranda, template Program/Paket/Destinasi/Blog | Minggu 2–3 |
| 3. Pengembangan | Build halaman, dropdown, filter paket, integrasi WhatsApp, schema, sitemap | Minggu 3–6 |
| 4. Konten | Tulis 12 Program, 13 Paket, 10 Destinasi, Tentang Kami, Beranda, FAQ, 6–8 artikel awal | Minggu 3–7 |
| 5. QA & Optimasi | Uji performa, mobile, schema, link, aksesibilitas, checklist SEO/AEO/GEO | Minggu 7–8 |
| 6. Peluncuran | Deploy, submit sitemap, GBP, tracking aktif | Minggu 8 |
| 7. Pasca-rilis | Blog rutin, backlink, ulasan, pengukuran GEO bulanan | Berkelanjutan |

## 16. Checklist Wajib Sebelum Publish (Acceptance Criteria)

**SEO**
- [ ] Setiap halaman: 1 H1, title ≤ 60 karakter, meta description 140–160 karakter, canonical
- [ ] URL sesuai sitemap Bagian 6 dan konsisten
- [ ] Sitemap XML & robots.txt terkirim ke Search Console
- [ ] Core Web Vitals lulus di mobile
- [ ] Semua gambar: WebP/AVIF, alt text, nama file deskriptif
- [ ] Internal link sesuai mapping Bagian 6.3; tidak ada halaman yatim
- [ ] Tidak ada konten duplikat/tipis; tidak ada 404/redirect chain
- [ ] GBP terverifikasi; NAP konsisten

**AEO**
- [ ] Ringkasan jawaban 40–60 kata di awal setiap halaman utama
- [ ] FAQ tampil + FAQPage schema pada Beranda, Program, Paket
- [ ] Heading pertanyaan, tabel, dan daftar pada konten kunci
- [ ] Data (harga, durasi, kapasitas) konsisten di semua halaman

**GEO**
- [ ] Organization/LocalBusiness schema dengan `sameAs`
- [ ] Halaman Tentang Kami memuat fakta entitas & bukti kredibilitas
- [ ] Crawler AI sah tidak diblokir; konten ter-render di HTML
- [ ] Testimoni asli, SOP keselamatan, syarat & ketentuan, kebijakan pembatalan tampil
- [ ] Profil YouTube/Instagram/TikTok/GBP aktif dan konsisten
- [ ] Baseline uji 20–30 prompt AI tercatat

**Konversi**
- [ ] Floating WhatsApp & CTA di setiap halaman
- [ ] Pesan WhatsApp otomatis membawa konteks halaman/paket
- [ ] Event `click_whatsapp` terekam di GA4

## 17. Risiko & Asumsi

| Risiko / Asumsi | Mitigasi |
|---|---|
| Data paket, harga, dan fasilitas belum final | Kumpulkan data sebelum fase konten; gunakan "Hubungi kami" bila harga fleksibel |
| Konten Destinasi mirip antar lokasi | Tulis unik per lokasi dengan detail lapangan & foto asli |
| Kanibalisasi keyword (Bromo Adventure vs Bromo Sunrise vs Offroad) | Patuhi mapping Bagian 6.2; bedakan intent tiap halaman |
| Testimoni belum tersedia | Kumpulkan dari klien nyata sebelum rilis; jangan gunakan testimoni fiktif |
| Kontak hanya via WhatsApp (single channel) | Tambahkan email/telepon cadangan dan halaman `/kontak/` informatif |
| Aturan GEO masih berkembang | Tinjau ulang praktik GEO setiap kuartal |

## 18. Data yang Dibutuhkan dari Pemilik Bisnis

1. Logo, warna brand, foto & video dokumentasi kegiatan asli
2. Profil perusahaan (tahun berdiri, alamat/basecamp, legalitas, tim)
3. Detail 12 Program dan 13 Paket (fasilitas, rundown, kapasitas, harga/rentang harga, syarat & ketentuan)
4. Detail 10 Destinasi (aktivitas, akses, mitra venue)
5. Testimoni & studi kasus klien (dengan izin)
6. Akun media sosial resmi & akses Google Business Profile
7. Daftar klien/logo yang boleh ditampilkan

---
*Dokumen ini adalah draf PRD v1.0 dan dapat direvisi setelah data bisnis dan aset konten lengkap.*
