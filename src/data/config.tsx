export interface RouteItem {
  id: number;
  from: string;
  to: string;
  price: string;
  schedule: string;
  popular?: boolean;
}

export const CONFIG = {
  name: "Sakila Travel",
  tagline: "Travel Door-to-Door Nyaman & Terpercaya",
  phone: "6281234567890", // Ganti dengan nomor WhatsApp Anda
  address: "Jl. Utama No. 123, Kota Anda",
  description: "Layanan travel door-to-door antar kota dengan armada bersih, aman, dan pengemudi berpengalaman."
};

// Fungsi membuka WhatsApp otomatis
export const openWhatsApp = (message?: string) => {
  const defaultMsg = `Halo ${CONFIG.name}, saya ingin memesan tiket travel.`;
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  window.open(`https://wa.me/${CONFIG.phone}?text=${encodedMsg}`, "_blank");
};

export const ROUTES: RouteItem[] = [
  {
    id: 1,
    from: "Jakarta",
    to: "Bandung",
    price: "Rp 150.000",
    schedule: "Setiap Jam",
    popular: true
  },
  {
    id: 2,
    from: "Bandung",
    to: "Jakarta",
    price: "Rp 150.000",
    schedule: "Setiap Jam",
    popular: true
  },
  {
    id: 3,
    from: "Jakarta",
    to: "Cirebon",
    price: "Rp 180.000",
    schedule: "08.00 & 16.00 WIB",
    popular: false
  }
];

export const FEATURES = [
  {
    id: 1,
    title: "Door-to-Door Service",
    description: "Dijemput langsung di alamat rumah Anda dan diantar sampai lokasi tujuan."
  },
  {
    id: 2,
    title: "Armada Bersih & Dingin",
    description: "Mobil terawat, wangi, ber-AC, dan full entertainment selama perjalanan."
  },
  {
    id: 3,
    title: "Driver Berpengalaman",
    description: "Pengemudi profesional, ramah, jujur, serta menguasai rute perjalanan."
  }
];

export const FLEET = [
  {
    name: "Toyota HiAce Premier",
    capacity: "11-14 Kursi",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Toyota Innova Reborn",
    capacity: "6 Kursi",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600"
  }
];

export const FAQS = [
  {
    question: "Bagaimana cara memesan tiket travel?",
    answer: "Sangat mudah! Cukup klik tombol 'Pesan via WhatsApp', tentukan rute dan tanggal, tim kami akan langsung mengonfirmasi jadwal Anda."
  },
  {
    question: "Apakah pasti dijemput sampai alamat rumah?",
    answer: "Ya, kami melayani antar-jemput pintu ke pintu (Door-to-Door) selama masih berada dalam area jangkauan kami."
  },
  {
    question: "Kapan pembayaran dilakukan?",
    answer: "Pembayaran dapat dilakukan via transfer Bank/E-Wallet atau tunai langsung ke driver saat penjemputan."
  }
];
