import React from "react";
import "../styles/public.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function PublicDashboard() {
  return (
    <div className="public-wrapper">
      {/* ================= HEADER TOP ================= */}
      <header className="public-header">
        <div className="public-header-container">
          <div className="public-logo-area">
            <div className="public-logo-text-area">
              <h2>PT TEKNOLOGI READYMIX INDONESIA</h2>
              <p>KNOWLEDGE MANAGEMENT SYSTEM (KMS)</p>
            </div>
          </div>

          <nav className="public-top-nav">
            <a href="#">Tentang Kami</a>

            {/* ===== BISNIS KAMI DROPDOWN ===== */}
            <div className="nav-dropdown">
              <span className="nav-dropdown-title">Bisnis Kami</span>

              <div className="nav-dropdown-panel">
                <ul>
                  <li>RBS...</li>
                  <li>RBS...</li>
                  <li>RBS...</li>
                  <li>RBS...</li>
                  <li>RBS...</li>
                </ul>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-dropdown-title">Media & Informasi</span>

              <div className="nav-dropdown-panel">
                <ul>
                  <li>Pengumuman</li>
                  <li>Article</li>
                  <li>Dokumen</li>
                </ul>
              </div>
            </div>

            <a href="#">Keberlanjutan</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ABOUT ================= */}
      <section className="public-about-hero">
        <div className="public-about-overlay"></div>

        <div className="public-about-content">
          <h1 className="public-about-title">Tentang Kami</h1>

          <p className="public-about-desc">
            Lebih dari satu dekade menyediakan produk readymix berkualitas untuk
            mendukung pembangunan infrastruktur nasional dan berbagai wilayah di
            Indonesia.
          </p>

          <div className="public-about-buttons">
            <button className="public-about-btn primary">
              Selengkapnya <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURE CARD SECTION ================= */}
      <section className="public-subholding-section">
        <div className="public-subholding-container">
          <div className="public-subholding-card bg-sub1">
            <div className="public-subholding-overlay"></div>
            <h3>Upstream Subholding</h3>
          </div>

          <div className="public-subholding-card bg-sub2">
            <div className="public-subholding-overlay"></div>
            <h3>Gas Subholding</h3>
          </div>

          <div className="public-subholding-card bg-sub3">
            <div className="public-subholding-overlay"></div>
            <h3>Power &amp; NRE Subholding</h3>
          </div>

          <div className="public-subholding-card bg-sub4">
            <div className="public-subholding-overlay"></div>
            <h3>Commercial and Trading Subholding</h3>
          </div>

          <div className="public-subholding-card bg-sub5">
            <div className="public-subholding-overlay"></div>
            <h3>Refining and Petrochemical Subholding</h3>
          </div>

          <div className="public-subholding-card bg-sub6">
            <div className="public-subholding-overlay"></div>
            <h3>Integrated Marine Logistics Subholding</h3>
          </div>
        </div>
      </section>

      {/* ================= CONTENT GRID SECTION ================= */}
      <section className="public-content-grid">
        <div className="public-content-grid-container">
          <div className="public-content-item">
            <div className="public-content-img img1"></div>

            <h2 className="public-content-title">
              Pencapaian dan Peringkat ESG
            </h2>

            <p className="public-content-desc">
              Beberapa pengakuan nasional dan internasional yang kami raih pada
              tahun ini mencerminkan kinerja solid dan upaya keberlanjutan kami.
            </p>

            <button className="public-content-btn">
              Selengkapnya <span>→</span>
            </button>
          </div>

          <div className="public-content-item">
            <div className="public-content-img img2"></div>

            <h2 className="public-content-title">Komitmen Keberlanjutan</h2>

            <p className="public-content-desc">
              Temukan prestasi dan rating perusahaan di Lingkungan, Sosial, dan
              Tata Kelola (ESG). Pelajari kemajuan dan pengakuan kami dalam
              upaya keberlanjutan.
            </p>

            <button className="public-content-btn">
              Selengkapnya <span>→</span>
            </button>
          </div>

          <div className="public-content-item">
            <div className="public-content-img img3"></div>

            <h2 className="public-content-title">Laporan dan Publikasi</h2>

            <p className="public-content-desc">
              Telusuri laporan, artikel, siaran pers, dan pembaruan terbaru kami
              yang menyoroti komitmen kami terhadap keberlanjutan.
            </p>

            <button className="public-content-btn">
              Selengkapnya <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="public-footer-modern">
        <div className="footer-top-info">
          <p>
            <b>Address:</b> Semarang, JawaTengah, Indonesia.
          </p>
          <p>
            <b>Email:</b> infopublik@readymix.com
          </p>
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <h4>Announcement</h4>
            <ul>
              <li>Readymix Info</li>
              <li>Pengadaan Umum</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Situs Terkait</h4>
            <ul>
              <li>RBS...</li>
              <li>RBS...</li>
              <li>RBS...</li>
              <li>Rbs...</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Tools</h4>
            <ul>
              <li>Tata Kelola Perusahaan</li>
              <li>Informasi Publik</li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4>Kontak Kami</h4>

            <div className="footer-contact-box">
              <h5>Whistle Blowing System</h5>
              <p>https://pertaminaclean.tipoffs.info/</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>
              © Copyright PT Teknologi Readymix Indonesia 2026. All Right
              Reserved.
            </p>

            <div className="footer-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Waspada Penipuan</a>
            </div>
          </div>

          {/* ====== SOCIAL ICONS ASLI ====== */}
          <div className="footer-social">
            <a href="#" className="footer-social-icon">
              <FaFacebookF />
            </a>

            <a href="#" className="footer-social-icon">
              <FaXTwitter />
            </a>

            <a href="#" className="footer-social-icon">
              <FaInstagram />
            </a>

            <a href="#" className="footer-social-icon">
              <FaLinkedinIn />
            </a>

            <a href="#" className="footer-social-icon">
              <FaTiktok />
            </a>

            <a href="#" className="footer-social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
