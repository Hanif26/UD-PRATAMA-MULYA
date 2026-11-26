import React from "react";
import Navbar from "../components/Navbar";

import backgroundImage from "../assets/background1.jpg";
import aboutImage from "../assets/photo1.jpg";

import "./AboutUs.css";

const quickLinks = [
  {
    title: "Tentang Perusahaan",
    href: "#tentang-kami",
  },
  {
    title: "Komitmen Kualitas",
    href: "#komitmen-kualitas",
  },
  {
    title: "Standar Proses",
    href: "#standar-proses",
  },
  {
    title: "Produk Unggulan",
    href: "#produk-unggulan",
  },
];

export default function AboutUs() {
  return (
    <main className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section
        className="about-hero"
        style={{
          "--hero-background": `url("${backgroundImage}")`,
        }}
      >
        <Navbar />

        <div className="hero-content">
          <div className="breadcrumb">
            <a href="/">Beranda</a>
            <span>/</span>
            <span>Tentang Kami</span>
          </div>

          <h1>Tentang Kami</h1>

          <p>
            Pelajari profil, komitmen mutu, filosofi penanganan
            terstandar, dan pasokan hasil perikanan andalan yang
            mendukung kebutuhan bisnis perikanan Anda.
          </p>

          <div className="hero-buttons">
            <a href="/katalog" className="btn-primary">
              Jelajahi Katalog Ikan
            </a>

            <a href="#tentang-kami" className="btn-outline">
              Kenali Kami
            </a>
          </div>
        </div>
      </section>

      {/* ================= QUICK NAVIGATION ================= */}
      <section className="quick-navigation">
        {quickLinks.map((item) => (
          <a
            href={item.href}
            className="quick-navigation-item"
            key={item.title}
          >
            <span>{item.title}</span>

            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        ))}
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section
        className="about-company"
        id="tentang-kami"
      >
        <div className="about-company-content">

          <span className="section-label">
            TENTANG KAMI
          </span>

          <h2>
            Mengenal UD PRATAMA MULYA
          </h2>

          <p>
            UD PRATAMA MULYA hadir untuk memenuhi kebutuhan
            produk ikan dengan mengutamakan kualitas produk,
            penanganan yang baik, dan pelayanan kepada pelanggan.
          </p>

          <p>
            Dengan dedikasi berkesinambungan pada seleksi bahan
            baku dan manajemen higienitas terstruktur, kami
            mendistribusikan hasil perikanan segar dan terawat
            guna memenuhi standar konsumsi domestik serta
            kebutuhan mitra komersial di berbagai sektor.
          </p>

          <a
            href="#selengkapnya"
            className="about-more"
          >
            Selengkapnya Tentang Kami

            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="about-company-image">
          <img
            src={aboutImage}
            alt="Budidaya ikan UD PRATAMA MULYA"
          />
        </div>
      </section>

    </main>
  );
}
