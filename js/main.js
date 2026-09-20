/* =============================================
   MALANG TRAVELER — Main JavaScript
   ============================================= */

'use strict';

// =============================================
// NAVBAR: Shrink on Scroll
// =============================================
const navbar = document.getElementById('mainNavbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }

  // Back to Top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// =============================================
// BACK TO TOP
// =============================================
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// HERO: Ken Burns Effect
// =============================================
window.addEventListener('load', () => {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    setTimeout(() => heroSection.classList.add('loaded'), 100);
  }
});

// =============================================
// SCROLL REVEAL ANIMATION
// =============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
  revealObserver.observe(el);
});

// =============================================
// COUNTER ANIMATION (Stats)
// =============================================
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString('id-ID') + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-counter]').forEach((el) => {
  counterObserver.observe(el);
});

// =============================================
// SEARCH TABS
// =============================================
document.querySelectorAll('.search-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.search-tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// =============================================
// PACKAGE FILTER
// =============================================
const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
const filterItems = document.querySelectorAll('[data-category]');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    filterItems.forEach((item) => {
      const cat = item.dataset.category || '';
      if (filter === 'all' || cat.includes(filter)) {
        item.style.display = '';
        item.classList.remove('hidden');
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// =============================================
// TESTIMONIAL SLIDER (simple auto-cycle)
// =============================================
(function () {
  const slides = document.querySelectorAll('.testi-slide');
  const dots = document.querySelectorAll('.testi-dot');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');

  if (!slides.length) return;

  let current = 0;
  let autoTimer;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.style.display = i === idx ? '' : 'none';
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function next() {
    showSlide((current + 1) % slides.length);
  }

  function prev() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); stopAuto(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); stopAuto(); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { showSlide(i); stopAuto(); startAuto(); }));

  showSlide(0);
  startAuto();
})();

// =============================================
// NAVBAR DROPDOWN (mobile touch friendly)
// =============================================
document.querySelectorAll('.nav-item.dropdown').forEach((item) => {
  const toggle = item.querySelector('.dropdown-toggle');
  if (!toggle) return;

  // Desktop: hover open
  if (window.innerWidth > 991) {
    item.addEventListener('mouseenter', () => {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) menu.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('mouseleave', () => {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
});

// =============================================
// GALLERY FILTER
// =============================================
const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

galleryFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    galleryFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item-wrap').forEach((item) => {
      const cat = item.dataset.category || '';
      if (filter === 'all' || cat === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// =============================================
// PROGRAM CATEGORY FILTER
// =============================================
const progFilterBtns = document.querySelectorAll('.prog-filter-btn');
const programCards = document.querySelectorAll('#programGrid > div');

if (progFilterBtns.length && programCards.length) {
  progFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      progFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.cat;
      programCards.forEach((col) => {
        const card = col.querySelector('.luxury-prog-card');
        const cardCat = card?.dataset.programCat || '';

        if (cat === 'all' || cardCat === cat) {
          col.style.display = '';
          col.style.opacity = '0';
          col.style.transform = 'translateY(12px)';
          setTimeout(() => {
            col.style.transition = 'all 0.35s ease';
            col.style.opacity = '1';
            col.style.transform = 'translateY(0)';
          }, 20);
        } else {
          col.style.display = 'none';
        }
      });
    });
  });
}

// =============================================
// NEWSLETTER FORM
// =============================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const email = input?.value?.trim();
    if (email) {
      const waMsg = encodeURIComponent(`Halo Malang Traveler, saya ingin berlangganan info & penawaran terbaru. Email saya: ${email}`);
      window.open(`https://wa.me/6288989643555?text=${waMsg}`, '_blank');
      input.value = '';
    }
  });
}

// =============================================
// CONTACT FORM -> WhatsApp
// =============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#contactName')?.value || '';
    const company = contactForm.querySelector('#contactCompany')?.value || '';
    const program = contactForm.querySelector('#contactProgram')?.value || '';
    const peserta = contactForm.querySelector('#contactPeserta')?.value || '';
    const tanggal = contactForm.querySelector('#contactTanggal')?.value || '';
    const msg = contactForm.querySelector('#contactMsg')?.value || '';

    const waText = `Halo Malang Traveler, saya ingin konsultasi:

- Nama: ${name}
- Instansi: ${company}
- Program: ${program}
- Jumlah Peserta: ${peserta}
- Tanggal Rencana: ${tanggal}
- Pesan: ${msg}

Mohon informasi lebih lanjut. Terima kasih!`;

    const waMsg = encodeURIComponent(waText);
    window.open(`https://wa.me/6288989643555?text=${waMsg}`, '_blank');
  });
}

// =============================================
// SMOOTH SCROLL for anchor links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
// SET ACTIVE NAV LINK based on current page
// =============================================
(function () {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('#')[0].split('/').pop();
    if (
      linkFile &&
      (((currentFile === '' || currentFile === 'index.html') && linkFile === 'index.html') ||
        currentFile === linkFile)
    ) {
      link.classList.add('active');
    }
  });
})();

// =============================================
// LAZY LOAD IMAGES (fallback for older browsers)
// =============================================
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
} else {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach((img) => imageObserver.observe(img));
}

// =============================================
// FLOATING WA TOOLTIP CLICK
// =============================================
document.querySelectorAll('.floating-wa-tooltip').forEach((tooltip) => {
  tooltip.addEventListener('click', () => {
    const waLink = tooltip.parentElement?.querySelector('.floating-wa-btn');
    if (waLink && waLink.href) {
      window.open(waLink.href, '_blank', 'noopener,noreferrer');
    }
  });
});

// =============================================
// PROGRAM DETAIL MODAL HANDLER
// =============================================
const programDetails = {
  'corporate-gathering': {
    title: 'Corporate Gathering',
    badge: 'Corporate & Team',
    tag: 'Unggulan',
    price: 'Custom Plan Sesuai Budget',
    peserta: 'Min. 30 Pax',
    durasi: '1 – 3 Hari',
    lokasi: 'Batu Malang & Trawas',
    img: 'images/dest-batu-malang.webp',
    desc: 'Program gathering korporat berkelas yang dirancang khusus untuk mempererat kebersamaan seluruh karyawan perusahaan, merayakan pencapaian kerja, dan membangun chemistry organisasi di suasana sejuk resort alam terbuka Malang Raya.',
    fasilitas: [
      'Venue resort eksklusif & izin kegiatan outdoor',
      'Master of Ceremony (MC) & fasilitator berpengalaman',
      'Fun team bonding games & entertainment',
      'Katering prasmanan premium & coffee break',
      'Sound system, lighting, & panggung acara',
      'Dokumentasi foto & video cinematic drone',
      'Tim medis siaga & asuransi kegiatan'
    ],
    rundown: [
      { time: '08.00 - 09.00', activity: 'Registrasi & Welcoming Drink di Venue' },
      { time: '09.00 - 12.00', activity: 'Opening Ceremony, Management Speech & Fun Team Building' },
      { time: '12.00 - 13.30', activity: 'Lunch Buffet & Ishoma' },
      { time: '13.30 - 16.00', activity: 'Interactive Games, Awarding Session & Door Prize' },
      { time: '16.00 - 17.00', activity: 'Photo Session & Closing Ceremony' }
    ]
  },
  'team-building': {
    title: 'Team Building Experiential Learning',
    badge: 'Corporate & Team',
    tag: 'BNSP AELI',
    price: 'Mulai Rp 150.000 / pax',
    peserta: 'Min. 20 Pax',
    durasi: '1 – 2 Hari',
    lokasi: 'Batu / Pacet / Trawas',
    img: 'images/team-about-malang.webp',
    desc: 'Simulasi terstruktur berbasis Experiential Learning untuk meningkatkan komunikasi efektif, sinergi lintas divisi, problem solving kelompok, serta kepemimpinan adaptif dalam iklim kompetisi positif.',
    fasilitas: [
      'Master Trainer & Fasilitator bersertifikat BNSP / AELI',
      'Modul simulasi team dynamic & problem solving teruji',
      'Peralatan permainan outbound standar keamanan internasional',
      'Debriefing & refleksi aplikatif untuk lingkungan kerja',
      'Banner kegiatan & id card peserta',
      'Snack, air mineral free flow, & makan siang',
      'Dokumentasi komprehensif'
    ],
    rundown: [
      { time: '08.30 - 09.30', activity: 'Ice Breaking & Group Conditioning' },
      { time: '09.30 - 10.30', activity: 'Grouping, Yell-Yell & Team Identity' },
      { time: '10.30 - 12.00', activity: 'Effective Communication & Synergized Games' },
      { time: '12.00 - 13.00', activity: 'Makan Siang & Istirahat' },
      { time: '13.00 - 15.00', activity: 'High Dynamic Team Challenge & Final Project' },
      { time: '15.00 - 16.00', activity: 'Debriefing, Insight Learning & Penutupan' }
    ]
  },
  'outbound': {
    title: 'Outbound Training & Karakter',
    badge: 'Corporate & Team',
    tag: 'Best Seller',
    price: 'Mulai Rp 125.000 / pax',
    peserta: 'Min. 20 Pax',
    durasi: '1 Hari Penuh',
    lokasi: 'Coban Rondo / Songgoriti Batu',
    img: 'images/dest-coban-rondo.webp',
    desc: 'Tantangan luar ruang yang memadukan aktivitas fisik menyenangkan, simulasi rintangan alam, dan ice breaking penyegar pikiran untuk merevitalisasi motivasi dan ketangkasan tim.',
    fasilitas: [
      'Fasilitator games outdoor bersertifikat',
      'Tiket masuk lokasi wisata & ground outbound',
      'Peralatan rintangan & safety gear lengkap standar K3',
      'Air mineral & snack coffee break',
      'Makan siang prasmanan masakan khas Batu',
      'P3K lapangan & tenaga medis siaga',
      'Dokumentasi foto kegiatan'
    ],
    rundown: [
      { time: '08.00 - 09.00', activity: 'Tiba di lokasi & Stretching Energik' },
      { time: '09.00 - 11.30', activity: 'Fun Outbound Games & Circuit Challenge' },
      { time: '11.30 - 13.00', activity: 'Ishoma & Makan Siang Tradisional' },
      { time: '13.00 - 15.00', activity: 'Water Games / Low Rope Challenge' },
      { time: '15.00 - 16.00', activity: 'Relaxation & Evaluasi Kegiatan' }
    ]
  },
  'company-outing': {
    title: 'Company Outing & Rekreasi',
    badge: 'Corporate & Team',
    tag: 'Refreshing',
    price: 'Custom Sesuai Destinasi',
    peserta: 'Min. 20 Pax',
    durasi: '1 – 3 Hari',
    lokasi: 'Malang Raya & Kota Batu',
    img: 'images/dest-trawas.webp',
    desc: 'Paket rekreasi perusahaan bebas repot yang memadukan keindahan alam, kunjungan destinasi wisata unggulan, kuliner khas, serta momen santai berkualitas bersama rekan kerja.',
    fasilitas: [
      'Bus pariwisata AC eksekutif + driver ramah & BBM',
      'Tiket masuk seluruh destinasi wisata pilihan',
      'Hotel / resort bintang representatif',
      'Makan 3x sehari di restoran lokal terbaik',
      'Tour leader mendampingi 24 jam',
      'Banner & dokumentasi perjalanan',
      'Asuransi perjalanan wisata'
    ],
    rundown: [
      { time: 'Hari 1', activity: 'Penjemputan, Wisata Petik Apel, Check-in Hotel & Dinner' },
      { time: 'Hari 2', activity: 'Wisata Edukasi / Museum Angkut / Jatim Park & Sunset Tour' },
      { time: 'Hari 3', activity: 'Belanja Oleh-Oleh Khas Malang & Pengantaran Pulang' }
    ]
  },
  'camping': {
    title: 'Camping Ground Hutan Pinus',
    badge: 'Nature & Hospitality',
    tag: 'Nature Escape',
    price: 'Mulai Rp 250.000 / pax',
    peserta: 'Min. 25 Pax',
    durasi: '2D1N – 3D2N',
    lokasi: 'Hutan Pinus Batu / Coban Rondo',
    img: 'images/prog-camping.webp',
    desc: 'Pengalaman bermalam di alam terbuka di bawah kanopi hutan pinus rindang dengan tenda dome berkualitas, hangatnya api unggun malam, dan udara sejuk pegunungan.',
    fasilitas: [
      'Tenda dome kapasitas 4 orang + matras spons tebal',
      'Tiket camping ground & izin bermalam resmi',
      'Kayu api unggun & perlengkapan barbeque',
      'Makan 3 kali (malam, sarapan, siang) + hot beverage corner',
      'Toilet bersih, mushola, & penerangan camp ground',
      'Fasilitator pendamping 24 jam',
      'P3K lapangan'
    ],
    rundown: [
      { time: '14.00 - 15.30', activity: 'Check-in camping ground & pembagian tenda' },
      { time: '15.30 - 17.30', activity: 'Trekking ringan hutan pinus & santai sore' },
      { time: '18.30 - 21.30', activity: 'Dinner prasmanan, Api Unggun & Malam Keakraban' },
      { time: '06.00 - 08.00', activity: 'Morning exercise, sarapan pagi & kopi hangat' },
      { time: '08.00 - 10.00', activity: 'Fun games alam terbuka & Check-out' }
    ]
  },
  'glamping': {
    title: 'Glamping Premium VIP Retreat',
    badge: 'Nature & Hospitality',
    tag: 'VIP Retreat',
    price: 'Mulai Rp 450.000 / pax',
    peserta: 'Min. 20 Pax',
    durasi: '2D1N – 3D2N',
    lokasi: 'Lembah Pegunungan Batu',
    img: 'images/prog-glamping.webp',
    desc: 'Glamorous camping berstandar resort berbintang dengan tenda safari kubah mewah, kasur empuk, private bathroom water heater, serta view spektakuler lembah pegunungan.',
    fasilitas: [
      'Tenda glamping mewah dengan springbed & selimut tebal',
      'Kamar mandi water heater pribadi / semi-private',
      'Listrik 24 jam, colokan perangkat, & WiFi area',
      'Welcome drink, afternoon tea, & sarapan lezat',
      'Set barbeque dinner premium di area terbuka',
      'Fasilitas api unggun & bean bag lounge',
      'Akses spot foto aesthetic & taman rekreasi'
    ],
    rundown: [
      { time: '14.00 - 15.00', activity: 'Welcome drink & Check-in Glamping Tent' },
      { time: '15.30 - 17.30', activity: 'Afternoon tea santai sambil menikmati sunset lembah' },
      { time: '18.30 - 21.00', activity: 'Barbeque dinner di bawah taburan bintang & city light' },
      { time: '06.30 - 08.30', activity: 'Sunrise viewing & sarapan hangat' },
      { time: '09.00 - 11.30', activity: 'Aktivitas santai / foto-foto & Check-out' }
    ]
  },
  'gala-dinner': {
    title: 'Gala Dinner Outdoor & Malam Keakraban',
    badge: 'Nature & Hospitality',
    tag: 'Eksklusif',
    price: 'Mulai Rp 200.000 / pax',
    peserta: 'Min. 50 Pax',
    durasi: '1 Malam (4–5 Jam)',
    lokasi: 'Resort Garden Batu',
    img: 'images/prog-gala-dinner.webp',
    desc: 'Perjamuan malam korporat elegan di bawah gemerlap tata lampu fairy lights terbuka, sajian kuliner istimewa chef hotel, live music acoustic, dan perayaan pencapaian tim.',
    fasilitas: [
      'Venue outdoor garden resort eksklusif',
      'Dekorasi meja banquet & tata lampu fairy lights hangat',
      'Buffet dinner menu lengkap pilihan chef',
      'Sound system profesional, panggung & mic wireless',
      'Live acoustic band / performance hiburan',
      'MC profesional pemandu alur acara',
      'Foto & video liputan acara'
    ],
    rundown: [
      { time: '18.00 - 18.30', activity: 'Penyambutan tamu di karpet merah & Photo Wall' },
      { time: '18.30 - 19.30', activity: 'Opening MC, Sambutan Direksi & Awarding' },
      { time: '19.30 - 20.30', activity: 'Gala Dinner Buffet dengan iringan Live Music' },
      { time: '20.30 - 21.30', activity: 'Interactive Games, Door Prize & Karaoke Bersama' },
      { time: '21.30 - 22.00', activity: 'Toasting, Foto Bersama & Penutupan' }
    ]
  },
  'outdoor-meeting': {
    title: 'Outdoor Meeting & FGD Produktif',
    badge: 'Nature & Hospitality',
    tag: 'Produktif',
    price: 'Custom Plan Sesuai Kebutuhan',
    peserta: 'Min. 20 Pax',
    durasi: 'Half/Full Day',
    lokasi: 'Panorama Resort Batu',
    img: 'images/dest-batu-malang.webp',
    desc: 'Rapat kerja strategis berlatar panorama alam pegunungan dengan dukungan lengkap fasilitas audio visual, proyektor, dan koneksi internet stabil untuk menghasilkan ide-ide brilian.',
    fasilitas: [
      'Pavilion / pendopo semi-outdoor nyaman & sejuk',
      'Proyektor / LED screen, flipchart & sound meeting kit',
      '2x Coffee break dengan kue tradisional & kopi nusantara',
      'Makan siang prasmanan sehat',
      'Meeting stationery (blocknote & pen)',
      'High-speed WiFi internet',
      'Ice breaking energizer 15 menit penyegar konsentrasi'
    ],
    rundown: [
      { time: '08.30 - 09.00', activity: 'Coffee Break pembuka & Persiapan' },
      { time: '09.00 - 12.00', activity: 'Sesi Rapat / Diskusi Strategis Sesi I' },
      { time: '12.00 - 13.15', activity: 'Makan Siang & Sholat' },
      { time: '13.15 - 13.30', activity: 'Ice Breaking Energizer penyegar fokus' },
      { time: '13.30 - 15.30', activity: 'Sesi Diskusi Sesi II, Rangkuman & Penutupan' }
    ]
  },
  'offroad': {
    title: 'Offroad Adventure 4x4 Jeep',
    badge: 'Adventure & Trip',
    tag: 'Adrenalin',
    price: 'Mulai Rp 350.000 / pax',
    peserta: 'Min. 10 Pax',
    durasi: '1 Hari',
    lokasi: 'Bromo / Tumpang / Lereng Arjuno',
    img: 'images/prog-offroad-jeep.webp',
    desc: 'Petualangan memacu adrenalin melintasi rute pasir berbisik, sungai berbatu, dan medan terjal berlumpur menggunakan armada Jeep 4WD legendaris bersama driver berpengalaman.',
    fasilitas: [
      'Jeep 4x4 terawat (kapasitas 4–5 penumpang)',
      'Driver offroad handal berlisensi & BBM',
      'Tiket rute offroad & izin lintas wilayah',
      'Spot foto alam eksotis tersembunyi',
      'Air mineral & snack lokal',
      'Dokumentasi aksi offroad spektakuler',
      'Asuransi penumpan petualangan'
    ],
    rundown: [
      { time: '08.00 - 08.30', activity: 'Briefing keselamatan berkendara & boarding jeep' },
      { time: '08.30 - 10.30', activity: 'Menembus trek hutan, sungai bebatuan & medan lumpur' },
      { time: '10.30 - 11.30', activity: 'Break santai di spot tebing pemandangan indah' },
      { time: '11.30 - 12.30', activity: 'Jalur turunan ekstrem & Finish kembali ke basecamp' }
    ]
  },
  'bromo-adventure': {
    title: 'Bromo Adventure Complete Trip',
    badge: 'Adventure & Trip',
    tag: 'Ikonik',
    price: 'Mulai Rp 325.000 / pax',
    peserta: 'Min. 10 Pax',
    durasi: '1 – 2 Hari',
    lokasi: 'Kaldera Bromo Tengger Semeru',
    img: 'images/hero-bromo-sunrise.webp',
    desc: 'Eksplorasi lengkap pesona Kawah Bromo aktif, lautan Pasir Berbisik, Savana Bukit Teletubbies, dan keunikan budaya Suku Tengger yang melegenda.',
    fasilitas: [
      'Hardtop Jeep 4x4 Bromo terawat',
      'Driver ramah merangkap tour guide & photographer',
      'Tiket masuk resmi Taman Nasional TNBTS',
      'Kunjungan 5 spot utama Bromo tanpa terlewat',
      'Snack & air mineral botol',
      'Masker debu & briefing keselamatan',
      'P3K standard pendakian'
    ],
    rundown: [
      { time: '00.00 - 02.30', activity: 'Penjemputan meeting point Malang/Batu & otw Bromo' },
      { time: '03.00 - 04.00', activity: 'Transit Jeep di rest area Wonokitri / Sukapura' },
      { time: '04.00 - 06.00', activity: 'Golden Sunrise di Penanjakan / Kingkong Hill' },
      { time: '06.30 - 08.30', activity: 'Trekking Kawah Bromo & Pura Luhur Poten' },
      { time: '08.30 - 10.30', activity: 'Pasir Berbisik, Savana & Bukit Teletubbies' },
      { time: '11.00 - 13.30', activity: 'Perjalanan pulang kembali ke Malang' }
    ]
  },
  'bromo-sunrise': {
    title: 'Bromo Sunrise Trip Golden Hour',
    badge: 'Adventure & Trip',
    tag: 'Emas Fajar',
    price: 'Mulai Rp 300.000 / pax',
    peserta: 'Min. 10 Pax',
    durasi: '01:00 – 12:00 WIB',
    lokasi: 'Pananjakan 1 Bromo',
    img: 'images/hero-bromo-sunrise.webp',
    desc: 'Saksikan fajar emas spektakuler di atas samudera awan kaldera Bromo dari gardu pandang tertinggi dengan siluet Gunung Semeru di kejauhan langit fajar jingga keemasan.',
    fasilitas: [
      'Jeep 4x4 Bromo + driver profesional',
      'Antar jemput dari penginapan di area Malang/Batu',
      'Tiket masuk kawasan Bromo',
      'Coffee / tea hangat di warung puncak Penanjakan',
      'Dokumentasi foto sunrise terbaik',
      'Fasilitas panduan rute terbaik bebas macet',
      'Asuransi perjalanan wisata'
    ],
    rundown: [
      { time: '23.30 - 00.30', activity: 'Penjemputan peserta di hotel / stasiun Malang' },
      { time: '01.00 - 03.30', activity: 'Perjalanan menuju pos Jeep TNBTS' },
      { time: '03.30 - 06.00', activity: 'Menikmati Golden Sunrise spektakuler di view point' },
      { time: '06.30 - 09.00', activity: 'Explore Lautan Pasir & Spot Foto Widodaren' },
      { time: '09.30 - 12.00', activity: 'Kembali menuju kota Malang' }
    ]
  },
  'outbound-pantai': {
    title: 'Outbound Pantai Tropis Malang Selatan',
    badge: 'Adventure & Trip',
    tag: 'Pesisir Tropis',
    price: 'Mulai Rp 175.000 / pax',
    peserta: 'Min. 30 Pax',
    durasi: '1 – 2 Hari',
    lokasi: 'Pantai Balekambang / Malang Selatan',
    img: 'images/dest-malang-selatan.webp',
    desc: 'Aktivitas outbound dinamis di hamparan pasir putih pantai Malang Selatan dengan permainan air tim, fun challenge, deburan ombak tropis, dan bonfire pantai.',
    fasilitas: [
      'Tiket masuk pantai & sewa area pantai eksklusif',
      'Fasilitator fun games outbound pantai berlisensi',
      'Peralatan permainan pantai & sound system portable',
      'Katering seafood bakar / prasmanan lezat',
      'Kelapa muda segar untuk seluruh peserta',
      'Penyediaan tenda teduh / gazebo pantai',
      'Tim pengaman pantai & medis siaga'
    ],
    rundown: [
      { time: '06.30 - 09.00', activity: 'Perjalanan Malang menuju pesisir Malang Selatan' },
      { time: '09.00 - 09.30', activity: 'Kelapa Muda Welcome & Persiapan' },
      { time: '09.30 - 12.00', activity: 'Coastal Fun Team Building Games di Pasir Putih' },
      { time: '12.00 - 13.30', activity: 'Makan siang Barbeque Ikan Laut Bakar & Istirahat' },
      { time: '13.30 - 15.30', activity: 'Eksplorasi karang laut, spot foto & Penutupan' },
      { time: '15.30 - 18.00', activity: 'Perjalanan pulang ke kota Malang' }
    ]
  }
};

document.querySelectorAll('.luxury-btn-detail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const progId = btn.dataset.program;
    const data = programDetails[progId];
    if (!data) return;

    const modalElem = document.getElementById('programDetailModal');
    if (!modalElem) return;

    // Populate elements
    const titleEl = document.getElementById('modalProgTitle');
    const badgeEl = document.getElementById('modalProgBadge');
    const tagEl = document.getElementById('modalProgTag');
    const priceEl = document.getElementById('modalProgPrice');
    const lokasiEl = document.getElementById('modalProgLokasi');
    const durasiEl = document.getElementById('modalProgDurasi');
    const pesertaEl = document.getElementById('modalProgPeserta');
    const descEl = document.getElementById('modalProgDesc');
    const imgEl = document.getElementById('modalProgImg');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (tagEl) tagEl.textContent = data.tag;
    if (priceEl) priceEl.textContent = data.price;
    if (lokasiEl) lokasiEl.textContent = data.lokasi;
    if (durasiEl) durasiEl.textContent = data.durasi;
    if (pesertaEl) pesertaEl.textContent = data.peserta;
    if (descEl) descEl.textContent = data.desc;
    if (imgEl) imgEl.src = data.img;

    // Fasilitas
    const fasList = document.getElementById('modalProgFasilitas');
    if (fasList) {
      fasList.innerHTML = '';
      data.fasilitas.forEach((f) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${f}</span>`;
        fasList.appendChild(li);
      });
    }

    // Rundown
    const runList = document.getElementById('modalProgRundown');
    if (runList) {
      runList.innerHTML = '';
      data.rundown.forEach((r) => {
        const item = document.createElement('div');
        item.className = 'luxury-rundown-item';
        item.innerHTML = `
          <span class="luxury-rundown-time">${r.time}</span>
          <span class="luxury-rundown-text">${r.activity}</span>
        `;
        runList.appendChild(item);
      });
    }

    // WA Action links
    const waText = encodeURIComponent(`Halo Malang Traveler, saya tertarik dengan detail program: ${data.title}. Mohon info penawaran lengkapnya.`);
    const waUrl = `https://wa.me/6288989643555?text=${waText}`;
    const waDirect = document.getElementById('modalProgWaDirect');
    const waAction = document.getElementById('modalProgWaAction');
    if (waDirect) waDirect.href = waUrl;
    if (waAction) waAction.href = waUrl;

    // Trigger Bootstrap modal
    if (window.bootstrap && bootstrap.Modal) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalElem);
      bsModal.show();
    }
  });
});

console.log('%cMalang Traveler Web ID — Initialized', 'color:#0E8A7D;font-weight:bold;font-size:14px');
