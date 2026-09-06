// src/data/config.ts

export interface RouteItem {
  id: string;
  origin: string;
  destination: string;
  price: string;
  duration: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  city: string;
  text: string;
  rating: number;
}

export interface StatisticItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CONFIG = {
  // === INFORMASI BISNIS ===
  companyName: "Sakila Travel",
  tagline: "Travel Door-to-Door Nyaman & Terpercaya",
  
  // Masukkan nomor WhatsApp tanpa tanda + atau spasi (format internasional: 628...)
  whatsappNumber: "6281234567890", 
  
  phone: "+62 812-3456-7890",
  email: "info@sakilatravel.com",
  address: "Jl. Riau No. 123, Kota Bandung, Jawa Barat 40115",
  
  socials: {
    instagram: "@sakilatravel",
    facebook: "Sakila Travel Official",
  },

  // === RUTE PERJALANAN (EDITABLE) ===
  routes: [
    { id: "1", origin: "Jakarta", destination: "Bandung", price: "Mulai dari Rp XXX.XXX", duration: "± 3 Jam" },
    { id: "2", origin: "Bandung", destination: "Jakarta", price: "Mulai dari Rp XXX.XXX", duration: "± 3 Jam" },
    { id: "3", origin: "Jakarta", destination: "Cirebon", price: "Mulai dari Rp XXX.XXX", duration: "± 4 Jam" },
    { id: "4", origin: "Cirebon", destination: "Jakarta", price: "Mulai dari Rp XXX.XXX", duration: "± 4 Jam" },
    { id: "5", origin: "Bandung", destination: "Yogyakarta", price: "Mulai dari Rp XXX.XXX", duration: "± 8 Jam" },
    { id: "6", origin: "Yogyakarta", destination: "Bandung", price: "Mulai dari Rp XXX.XXX", duration: "± 8 Jam" },
  ] as RouteItem[],

  // === FITUR UTAMA ===
  features: [
    {
      icon: "MapPin",
      title: "Door-to-Door",
      description: "Jemput dan antar langsung ke lokasi tujuan Anda tanpa perlu ganti transportasi."
    },
    {
      icon: "Car",
      title: "Nyaman",
      description: "Armada eksekutif terawat dengan AC dingin dan kursi reclining untuk perjalanan santai."
    },
    {
      icon: "ShieldCheck",
      title: "Aman",
      description: "Driver profesional, berpengalaman, dan mengutamakan keselamatan penumpang."
    },
    {
      icon: "MessageSquare",
      title: "Mudah Dipesan",
      description: "Proses pemesanan cepat dan langsung terhubung dengan customer service via WhatsApp."
    }
  ] as FeatureItem[],

  // === LAYANAN ===
  services: [
    {
      title: "Travel Antar Kota",
      description: "Perjalanan antar kota dengan jadwal reguler dan layanan door-to-door yang tepat waktu.",
      icon: "Car"
    },
    {
      title: "Antar Jemput",
      description: "Jemput dari rumah, hotel, bandara, stasiun, kantor, atau lokasi yang disepakati.",
      icon: "MapPin"
    },
    {
      title: "Private / Charter",
      description: "Layanan sewa kendaraan khusus rombongan keluarga, bisnis, atau kebutuhan perjalanan privat.",
      icon: "Users"
    }
  ] as ServiceItem[],

  // === KEUNGGULAN TAMBAHAN ===
  whyTrustUsList: [
    "Layanan Jemput & Antar Door-to-Door",
    "Driver Berpengalaman & Ramah",
    "Kendaraan Selalu Dalam Kondisi Prima",
    "Proses Booking Cepat via WhatsApp",
    "Customer Support Responsif",
    "Informasi Harga Transparan Tanpa Biaya Tersembunyi"
  ],

  // === STATISTIK ===
  statistics: [
    { value: "10.000+", label: "Penumpang Terlayani" },
    { value: "50+", label: "Rute Perjalanan" },
    { value: "4.9/5", label: "Rating Kepuasan" },
    { value: "99%", label: "Tingkat Kepuasan" }
  ] as StatisticItem[],

  // === TESTIMONI ===
  testimonials: [
    {
      name: "Andi Kurniawan",
      city: "Jakarta",
      text: "Booking sangat mudah dan dijemput langsung dari depan rumah. Mobil bersih, AC dingin, dan drivernya ramah banget.",
      rating: 5
    },
    {
      name: "Rina Sastrowardoyo",
      city: "Bandung",
      text: "Sangat membantu buat saya yang sering dinas luar kota. Tidak perlu repot ke terminal, langsung sampai titik lokasi tujuan.",
      rating: 5
    },
    {
      name: "Dimas Pratama",
      city: "Cirebon",
      text: "Respon WhatsApp cepat sekali dan informasinya jelas. Perjalanan nyaman, waktu tempuh juga sesuai dengan estimasi.",
      rating: 5
    }
  ] as TestimonialItem[],

  // === FAQ ===
  faqs: [
    {
      question: "Apakah Sakila Travel menyediakan layanan door-to-door?",
      answer: "Ya, betul! Kami melayani sistem door-to-door, di mana kami akan menjemput Anda langsung di alamat lokasi asal dan mengantarkan hingga ke alamat tujuan spesifik Anda."
    },
    {
      question: "Bagaimana cara melakukan booking?",
      answer: "Anda cukup memilih rute atau mengisi formulir pemesanan di website ini. Setelah mengeklik tombol 'Pesan via WhatsApp', sistem akan otomatis memformat pesan detail perjalanan Anda untuk dikirimkan ke WhatsApp CS kami."
    },
    {
      question: "Apakah saya bisa menentukan lokasi penjemputan?",
      answer: "Bisa. Anda bebas menentukan lokasi penjemputan seperti rumah, apartemen, hotel, kantor, atau titik temu yang telah disepakati."
    },
    {
      question: "Bagaimana cara mengetahui harga pasti perjalanan?",
      answer: "Harga awal tertera pada rute. Untuk penjemputan atau pengantaran di luar area cakupan utama, customer service kami akan memberikan detail total harga secara transparan via WhatsApp."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Pembayaran dapat dilakukan melalui transfer bank resmi atau dibayarkan secara tunai langsung kepada driver saat penjemputan."
    },
    {
      question: "Apakah tersedia armada private atau charter?",
      answer: "Ya, kami menyediakan opsi charter khusus satu mobil penuh bagi Anda yang menginginkan privasi ekstra bersama keluarga atau rombongan."
    },
    {
      question: "Bagaimana jika saya ingin mengubah jadwal keberangkatan?",
      answer: "Perubahan jadwal dapat dilakukan dengan menghubungi admin WhatsApp kami selambat-lambatnya 12 jam sebelum waktu keberangkatan yang dijadwalkan."
    }
  ] as FAQItem[]
};

// === HELPER FUNCTION: WHATSAPP REDIRECT ===
export const openWhatsApp = (customMessage?: string) => {
  const defaultMessage = `Halo ${CONFIG.companyName}, saya ingin bertanya mengenai layanan travel door-to-door.`;
  const messageToSend = customMessage || defaultMessage;
  const encoded = encodeURIComponent(messageToSend);
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
  window.open(waUrl, "_blank");
};