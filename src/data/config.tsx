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
  address: "Jl. Utama No. 123, Indonesia",
  description: "Layanan travel door-to-door antar kota dengan armada bersih, aman, dan pengemudi berpengalaman."
};

export const openWhatsApp = (message?: string) => {
  const defaultMsg = `Halo ${CONFIG.name}, saya ingin memesan tiket travel.`;
  const encodedMsg = encodeURIComponent(message || defaultMsg);
  window.open(`https://wa.me/${CONFIG.phone}?text=${encodedMsg}`, "_blank");
};

export const ROUTES: RouteItem[] = [
  { id: 1, from: "Jakarta", to: "Bandung", price: "Rp 150.000", schedule: "Setiap Jam", popular: true },
  { id: 2, from: "Bandung", to: "Jakarta", price: "Rp 150.000", schedule: "Setiap Jam", popular: true },
  { id: 3, from: "Jakarta", to: "Cirebon", price: "Rp 180.000", schedule: "08.00 & 16.00 WIB", popular: false }
];

export const FEATURES = [
  { id: 1, title: "Door-to-Door Service", description: "Dijemput di rumah, diantar sampai alamat tujuan." },
  { id: 2, title: "Armada Nyaman & AC", description: "Mobil terawat, wangi, bersih, dan full AC." },
  { id: 3, title: "Driver Profesional", description: "Pengemudi berpengalaman, ramah, dan tepat waktu." }
];

export const FLEET = [
  { name: "Toyota HiAce Premier", capacity: "11-14 Kursi", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600" },
  { name: "Toyota Innova Reborn", capacity: "6 Kursi", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600" }
];

export const FAQS = [
  { question: "Bagaimana cara pesan tiket?", answer: "Cukup klik tombol Pesan via WhatsApp dan isi rute Anda." },
  { question: "Apakah dijemput ke rumah?", answer: "Ya, kami melayani antar-jemput langsung di pintu rumah Anda." },
  { question: "Kapan pembayaran dilakukan?", answer: "Pembayaran dapat dilakukan via transfer atau tunai ke driver." }
];

export const TESTIMONIALS = [
  { id: 1, name: "Budi Santoso", role: "Penumpang Reguler", comment: "Pelayanan sangat memuaskan, driver tepat waktu!", rating: 5 },
  { id: 2, name: "Siti Rahma", role: "Wisatawan", comment: "Mobil bersih dan AC dingin sepanjang jalan.", rating: 5 }
];

export const STATS = [
  { label: "Penumpang Puas", value: "10,000+" },
  { label: "Kota Tujuan", value: "25+" },
  { label: "Armada Siap", value: "50+" }
];

export const SERVICES = FEATURES;
export const BENEFITS = FEATURES;
