import React, { useState } from "react";

const navLinks = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Bisnis Kami", href: "#bisnis-kami" },
  { label: "Standar & Mutu", href: "#standar-mutu" },
  { label: "Katalog Produk", href: "#katalog" },
  { label: "Layanan Konsultasi", href: "#konsultasi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-links">
          <a href="#pengadaan">Pengadaan / Mitra</a>
          <a href="#karir">Karir</a>
          <a href="#kontak">Hubungi Kami</a>

          <span className="language">
            ID <span className="flag">🇮🇩</span>
          </span>

          <a href="#agen" className="agent-link">
            Agen & Penyalur
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="navbar">
        <a href="/" className="brand">
          <div className="brand-logo">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo UD Pratama Mulya"
            >
              <path
                d="M15 48 C30 15, 68 10, 85 38 C70 30, 57 34, 49 47 C65 40, 78 47, 86 58 C64 49, 48 59, 38 78 C42 60, 32 51, 15 48Z"
                fill="#11b7b0"
              />
              <path
                d="M18 60 C35 72, 58 73, 80 58 C69 81, 39 91, 18 60Z"
                fill="#0787a8"
              />
              <path
                d="M31 46 C41 38, 57 39, 68 48"
                stroke="#ffffff"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="brand-text">
            <strong>UD PRATAMA MULYA</strong>
            <span>MARINE SUPPLY &</span>
            <span>LOGISTICS</span>
          </div>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={index === 0 ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#search"
            className="search-link"
            aria-label="Pencarian"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
