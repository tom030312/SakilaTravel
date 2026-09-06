import React, { useState, useRef } from "react";
import {
  MapPin,
  Car,
  ShieldCheck,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Phone,
  Instagram,
  Mail,
  Menu,
  X,
  ArrowRight,
  Clock,
  Star,
  Send,
  Sparkles
} from "lucide-react";
import { CONFIG, openWhatsApp, RouteItem } from "./data/config";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nama: "",
    phone: "",
    asal: "",
    tujuan: "",
    tanggal: "",
    penumpang: "1",
    lokasiJemput: "",
    lokasiTujuan: "",
    catatan: ""
  });

  const bookingSectionRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = (asal = "", tujuan = "") => {
    if (asal || tujuan) {
      setFormData((prev) => ({ ...prev, asal, tujuan }));
    }
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Halo ${CONFIG.companyName}, saya ingin melakukan pemesanan travel.

📌 *DETAIL PEMESANAN*
• Nama: ${formData.nama}
• No. WhatsApp: ${formData.phone}
• Rute: ${formData.asal} → ${formData.tujuan}
• Tanggal: ${formData.tanggal}
• Jumlah Penumpang: ${formData.penumpang} Orang
• Lokasi Jemput: ${formData.lokasiJemput}
• Lokasi Tujuan: ${formData.lokasiTujuan}
• Catatan Tambahan: ${formData.catatan || "-"}

Mohon informasi ketersediaan jadwal dan total harganya. Terima kasih!`;

    openWhatsApp(formattedMessage);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#303534] font-sans antialiased selection:bg-[#55B7B0] selection:text-white">
      {/* ========================================================= */}
      {/* HEADER / STICKY NAVBAR                                    */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#55B7B0] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#303534]">
                Sakila<span className="text-[#55B7B0]">Travel</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider -mt-1 uppercase">
                Door to Door
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#beranda" className="hover:text-[#55B7B0] transition-colors">Beranda</a>
            <a href="#rute" className="hover:text-[#55B7B0] transition-colors">Rute</a>
            <a href="#layanan" className="hover:text-[#55B7B0] transition-colors">Layanan</a>
            <a href="#tentang" className="hover:text-[#55B7B0] transition-colors">Tentang Kami</a>
            <a href="#faq" className="hover:text-[#55B7B0] transition-colors">FAQ</a>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => openWhatsApp("Halo Sakila Travel, saya ingin memesan perjalanan travel door-to-door.")}
              className="bg-[#55B7B0] hover:bg-[#439b95] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#55B7B0] hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a
              href="#beranda"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-[#55B7B0]"
            >
              Beranda
            </a>
            <a
              href="#rute"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-[#55B7B0]"
            >
              Rute
            </a>
            <a
              href="#layanan"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-[#55B7B0]"
            >
              Layanan
            </a>
            <a
              href="#tentang"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-[#55B7B0]"
            >
              Tentang Kami
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-semibold text-gray-700 hover:text-[#55B7B0]"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openWhatsApp("Halo Sakila Travel, saya ingin memesan travel.");
              }}
              className="w-full mt-2 bg-[#55B7B0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              Pesan Sekarang
            </button>
          </div>
        )}
      </header>

      <main>
        {/* ========================================================= */}
        {/* 1. HERO SECTION (WHITE SECTION)                           */}
        {/* ========================================================= */}
        <section id="beranda" className="bg-white py-12 lg:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Copywriting & Actions */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#55B7B0]/10 text-[#55B7B0] font-semibold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Layanan Travel Door-to-Door Terpercaya</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#303534] tracking-tight leading-tight">
                  Perjalanan Nyaman, <br className="hidden sm:block" />
                  <span className="text-[#55B7B0]">Langsung Sampai Tujuan</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Travel door-to-door yang aman, nyaman, dan praktis untuk perjalanan antar kota. Kami jemput di depan pintu asal dan antar langsung ke lokasi tujuan Anda.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => scrollToBooking()}
                    className="w-full sm:w-auto bg-[#55B7B0] hover:bg-[#439b95] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Pesan Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="#rute"
                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-[#303534] px-8 py-4 rounded-xl font-semibold text-base transition-all text-center"
                  >
                    Lihat Rute
                  </a>
                </div>

                {/* Hero Feature Highlights */}
                <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center lg:text-left">
                  <div>
                    <p className="font-bold text-[#303534] text-sm sm:text-base">Jemput Alamat</p>
                    <p className="text-xs text-gray-500">Tanpa Perlu Ke Terminal</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#303534] text-sm sm:text-base">Armada Bagus</p>
                    <p className="text-xs text-gray-500">Ber-AC & Reclining Seat</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#303534] text-sm sm:text-base">Driver Ramah</p>
                    <p className="text-xs text-gray-500">Pengalaman Antar Kota</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Hero Visual & Quick Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Hero Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200 mb-6 border-4 border-white">
                    <img
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                      alt="Sakila Travel Vehicle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                      <span className="text-white text-sm font-semibold backdrop-blur-sm bg-black/30 px-3 py-1 rounded-lg">
                        🚘 Eksekutif Minibus Sakila Travel
                      </span>
                    </div>
                  </div>

                  {/* Hero Quick Search Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative z-10">
                    <h3 className="text-lg font-bold text-[#303534] mb-4 flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#55B7B0]" />
                      Pesan Perjalanan
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Kota Asal</label>
                        <select
                          value={formData.asal}
                          onChange={(e) => setFormData({ ...formData, asal: e.target.value })}
                          className="w-full bg-[#F7F8F6] border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                        >
                          <option value="">Pilih Kota Asal</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Cirebon">Cirebon</option>
                          <option value="Yogyakarta">Yogyakarta</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">Kota Tujuan</label>
                        <select
                          value={formData.tujuan}
                          onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                          className="w-full bg-[#F7F8F6] border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                        >
                          <option value="">Pilih Kota Tujuan</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Cirebon">Cirebon</option>
                          <option value="Yogyakarta">Yogyakarta</option>
                        </select>
                      </div>

                      <button
                        onClick={() => scrollToBooking()}
                        className="w-full mt-2 bg-[#303534] hover:bg-[#1f2221] text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                      >
                        Cari Perjalanan
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. WHY SAKILA TRAVEL (TURQUOISE SECTION)                  */}
        {/* ========================================================= */}
        <section className="bg-[#55B7B0] text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Kenapa Pilih Sakila Travel?
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                Komitmen kami adalah memberikan pengalaman perjalanan antar kota terbaik, tepat waktu, dan menyenangkan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFIG.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#55B7B0] flex items-center justify-center mb-4 shadow-md font-bold">
                    {feature.icon === "MapPin" && <MapPin className="w-6 h-6" />}
                    {feature.icon === "Car" && <Car className="w-6 h-6" />}
                    {feature.icon === "ShieldCheck" && <ShieldCheck className="w-6 h-6" />}
                    {feature.icon === "MessageSquare" && <MessageSquare className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. RUTE PERJALANAN & LAYANAN (WHITE SECTION)              */}
        {/* ========================================================= */}
        <section id="rute" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Pilihan Rute Favorit</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303534] mt-1 mb-4">
                Rute Perjalanan Popular
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Pilih rute perjalanan Anda dan pesan dengan mudah via WhatsApp.
              </p>
            </div>

            {/* Route Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {CONFIG.routes.map((route: RouteItem) => (
                <div
                  key={route.id}
                  className="bg-[#F7F8F6] border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#55B7B0]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-bold text-lg text-[#303534]">{route.origin}</span>
                      <div className="flex-1 flex items-center justify-center px-2">
                        <div className="h-[2px] w-full bg-gray-300 relative">
                          <Car className="w-4 h-4 text-[#55B7B0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F7F8F6] px-0.5" />
                        </div>
                      </div>
                      <span className="font-bold text-lg text-[#303534]">{route.destination}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-6 bg-white p-3 rounded-xl border border-gray-100">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#55B7B0]" />
                        {route.duration}
                      </span>
                      <span className="font-semibold text-[#55B7B0]">{route.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToBooking(route.origin, route.destination)}
                    className="w-full bg-[#303534] hover:bg-[#55B7B0] text-white py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    Pesan Rute Ini
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Layanan Sub-section */}
            <div id="layanan" className="pt-12 border-t border-gray-100">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#303534] mb-3">
                  Layanan Sakila Travel
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fleksibilitas layanan transportasi untuk mengakomodasi berbagai kebutuhan perjalanan Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CONFIG.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-[#F7F8F6] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#55B7B0]/10 text-[#55B7B0] flex items-center justify-center mb-6">
                      {service.icon === "Car" && <Car className="w-6 h-6" />}
                      {service.icon === "MapPin" && <MapPin className="w-6 h-6" />}
                      {service.icon === "Users" && <Users className="w-6 h-6" />}
                    </div>
                    <h4 className="text-xl font-bold text-[#303534] mb-3">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. TRAVEL EXPERIENCE & STATS & HOW IT WORKS (DARK SECTION) */}
        {/* ========================================================= */}
        <section className="bg-[#303534] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Experience Feature */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Pengalaman Terbaik</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6 leading-tight">
                  Perjalanan Lebih Nyaman Bersama Sakila Travel
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  Dari penjemputan hingga tiba di tujuan, kami hadir untuk membuat perjalanan Anda lebih mudah, tanpa stres, dan selalu tepat waktu.
                </p>
                <button
                  onClick={() => openWhatsApp("Halo Sakila Travel, saya ingin berkonsultasi mengenai perjalanan travel.")}
                  className="bg-[#55B7B0] hover:bg-[#439b95] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  Lihat Layanan
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80"
                  alt="Sakila Travel Experience"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="mb-20 pt-12 border-t border-gray-800">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Pesan Travel Semudah 1-2-3
                </h3>
                <p className="text-gray-400 text-sm">
                  Proses cepat tanpa kerumitan registrasi akun atau pembayaran membingungkan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {CONFIG.howItWorks.map((step) => (
                  <div
                    key={step.step}
                    className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 text-center relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#55B7B0] text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-800/40 rounded-2xl p-8 border border-gray-800 text-center">
              {CONFIG.statistics.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#55B7B0]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. MAIN BOOKING FORM & TRUST (WHITE SECTION)               */}
        {/* ========================================================= */}
        <section ref={bookingSectionRef} id="booking" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form Side (7 Cols) */}
              <div className="lg:col-span-7 bg-[#F7F8F6] border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl">
                <div className="mb-8">
                  <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Formulir Pemesanan</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303534] mt-1">
                    Pesan Perjalanan Anda
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Isi formulir di bawah ini untuk terhubung langsung ke WhatsApp admin Sakila Travel.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap *</label>
                      <input
                        type="text"
                        name="nama"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nomor WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Contoh: 08123456789"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Kota Asal *</label>
                      <input
                        type="text"
                        name="asal"
                        required
                        placeholder="Contoh: Jakarta / Bandung"
                        value={formData.asal}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Kota Tujuan *</label>
                      <input
                        type="text"
                        name="tujuan"
                        required
                        placeholder="Contoh: Bandung / Cirebon"
                        value={formData.tujuan}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Tanggal Berangkat *</label>
                      <input
                        type="date"
                        name="tanggal"
                        required
                        value={formData.tanggal}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Jumlah Penumpang *</label>
                      <select
                        name="penumpang"
                        value={formData.penumpang}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} Orang
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Lokasi Penjemputan (Alamat Lengkap) *</label>
                    <input
                      type="text"
                      name="lokasiJemput"
                      required
                      placeholder="Nama jalan, nomor rumah, RT/RW, kecamatan"
                      value={formData.lokasiJemput}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Lokasi Tujuan (Alamat Lengkap) *</label>
                    <input
                      type="text"
                      name="lokasiTujuan"
                      required
                      placeholder="Nama jalan, nomor rumah/hotel/kantor"
                      value={formData.lokasiTujuan}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
                    <textarea
                      name="catatan"
                      rows={3}
                      placeholder="Contoh: Bawa bagasi besar, jam berangkat khusus, dll."
                      value={formData.catatan}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#55B7B0] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#55B7B0] hover:bg-[#439b95] text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-5 h-5" />
                    Pesan via WhatsApp
                  </button>
                </form>
              </div>

              {/* Trust Section Side (5 Cols) */}
              <div id="tentang" className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Mengapa Memilih Kami</span>
                  <h2 className="text-3xl font-extrabold text-[#303534] mt-1 mb-4">
                    Lebih dari Sekadar Perjalanan
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Kami memahami pentingnya kenyamanan dan ketepatan waktu. Setiap perjalanan dirancang agar Anda bisa bersantai atau bekerja selama di jalan tanpa rasa khawatir.
                  </p>
                </div>

                <div className="space-y-3">
                  {CONFIG.whyTrustUsList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#55B7B0] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#303534]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                    alt="Travel Journey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TESTIMONIALS                                              */}
        {/* ========================================================= */}
        <section className="bg-[#F7F8F6] py-16 lg:py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Testimoni Pelanggan</span>
              <h2 className="text-3xl font-extrabold text-[#303534] mt-1">
                Pengalaman Pelanggan Kami
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CONFIG.testimonials.map((testi, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-6">"{testi.text}"</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-[#303534] text-sm">{testi.name}</p>
                    <p className="text-xs text-gray-400">{testi.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FAQ SECTION                                               */}
        {/* ========================================================= */}
        <section id="faq" className="bg-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#55B7B0] font-bold text-sm tracking-wider uppercase">Paling Sering Ditanyakan</span>
              <h2 className="text-3xl font-extrabold text-[#303534] mt-1">
                Pertanyaan Umum (FAQ)
              </h2>
            </div>

            <div className="space-y-4">
              {CONFIG.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 bg-[#F7F8F6] hover:bg-gray-100 font-bold text-base text-[#303534] flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {activeFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#55B7B0] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-5 sm:p-6 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FINAL CTA (TURQUOISE SECTION)                          */}
        {/* ========================================================= */}
        <section className="bg-[#55B7B0] text-white py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Siap Berangkat Bersama Sakila Travel?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
              Pesan perjalanan Anda sekarang. Isi data perjalanan dan lanjutkan pesan langsung melalui WhatsApp CS kami.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openWhatsApp("Halo Sakila Travel, saya siap pesan travel hari ini.")}
                className="bg-[#303534] hover:bg-[#1f2221] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Pesan via WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* 7. FOOTER (DARK SECTION)                                  */}
      {/* ========================================================= */}
      <footer className="bg-[#303534] text-white pt-16 pb-24 md:pb-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#55B7B0] flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Sakila<span className="text-[#55B7B0]">Travel</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Travel door-to-door yang nyaman, aman, dan terpercaya untuk perjalanan antar kota Anda.
              </p>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="font-bold text-base text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#layanan" className="hover:text-[#55B7B0] transition-colors">Travel Antar Kota</a></li>
                <li><a href="#layanan" className="hover:text-[#55B7B0] transition-colors">Door-to-Door</a></li>
                <li><a href="#layanan" className="hover:text-[#55B7B0] transition-colors">Charter Private</a></li>
                <li><a href="#layanan" className="hover:text-[#55B7B0] transition-colors">Antar Jemput Bandara</a></li>
              </ul>
            </div>

            {/* Informasi */}
            <div>
              <h4 className="font-bold text-base text-white mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#tentang" className="hover:text-[#55B7B0] transition-colors">Tentang Kami</a></li>
                <li><a href="#rute" className="hover:text-[#55B7B0] transition-colors">Rute Perjalanan</a></li>
                <li><a href="#faq" className="hover:text-[#55B7B0] transition-colors">FAQ</a></li>
                <li><a href="#booking" className="hover:text-[#55B7B0] transition-colors">Cara Pemesanan</a></li>
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-bold text-base text-white mb-4">Kontak Kami</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#55B7B0]" />
                  <span>{CONFIG.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#55B7B0]" />
                  <span>{CONFIG.socials.instagram}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#55B7B0]" />
                  <span>{CONFIG.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#55B7B0] flex-shrink-0 mt-0.5" />
                  <span className="text-xs">{CONFIG.address}</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center">
            <p>© 2026 Sakila Travel. All Rights Reserved.</p>
            <p>Designed for fast & practical WhatsApp booking conversion.</p>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* MOBILE STICKY BOTTOM CTA                                  */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <button
          onClick={() => openWhatsApp("Halo Sakila Travel, saya ingin pesan travel sekarang.")}
          className="w-full bg-[#55B7B0] hover:bg-[#439b95] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5" />
          💬 Pesan Sekarang via WhatsApp
        </button>
      </div>
    </div>
  );
}