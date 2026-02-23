import React, { useState, useRef, useEffect } from "react";
import "../styles/public.css";

import { useKnowledge } from "../knowledge/KnowledgeContext";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaCheckCircle,
  FaMobileAlt,
  FaArrowRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import heroImg from "../assets/page.png";
import logoImg from "../assets/logo-rbs.png";
import dashboardImg from "../assets/dashboard.png";
import highlight1 from "../assets/highlight/1.png";
import highlight2 from "../assets/highlight/2.png";
import highlight3 from "../assets/highlight/3.png";
import highlight4 from "../assets/highlight/4.png";
import saasImg from "../assets/saas.jpg";
import hardwareImg from "../assets/hardware.jpg";
import consultingImg from "../assets/consulting.jpg";
import truckImg from "../assets/truck-rbs.png";

export default function PublicDashboard() {
  const { knowledgeList } = useKnowledge();
  const navigate = useNavigate();

  const [activeHighlight, setActiveHighlight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const updatesSliderRef = useRef(null);

  const publishedList = knowledgeList.filter(
    (item) => item.status?.toLowerCase() === "published"
  );

  /* ================= HEADER SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= AUTO SCROLL (Kanan ke kiri) ================= */
  useEffect(() => {
    const slider = updatesSliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const highlightData = [
    {
      title: "The story talling of us 2025",
      desc: "At PETRONAS, every achievement is shaped by the people who give their best, year after year. We honour our long-serving colleagues and retirees for the time, effort, and experience they have shared with us. Thank you for helping build the journey we continue today.",
      linkText: "Watch full video",
      linkUrl: "#",
      img: highlight1,
    },
    {
      title: "Legacy Beneath the Waves",
      desc: "PETRONAS is dedicated to preserving marine ecosystems through pioneering initiatives such as Rigs-to-Reef and Tubular-to-Reef, which repurpose decommissioned offshore structures into flourishing artificial reefs.",
      linkText: "Read more",
      linkUrl: "#",
      img: highlight2,
    },
    {
      title: "The Spirit of Gresik",
      desc: "Explore how our people and communities continue shaping progress together, driving sustainable development and long-term impact for future generations.",
      linkText: "Read more",
      linkUrl: "#",
      img: highlight3,
    },
    {
      title: "Meet Our Women Trailblazers in Technology",
      desc: "Celebrating women leading transformation and innovation in the industry. Learn how they shape future technologies and inspire the next generation.",
      linkText: "Read more",
      linkUrl: "#",
      img: highlight4,
    },
  ];

  return (
    <div className="public-wrapper">
      {/* ================= HEADER ================= */}
      <header className={`public-header ${scrolled ? "scrolled" : ""}`}>
        <div className="public-header-container">
          {/* LOGO + TEXT */}
          <div className="public-logo-area">
            <img src={logoImg} alt="RBS Logo" className="public-logo-img" />

            <span className="public-logo-text">READYMIX BUSINESS SOLUTION</span>
          </div>

          {/* NAVIGATION */}
          <nav className="public-top-nav">
            <a href="#">Beranda</a>

            <div className="nav-dropdown">
              <span className="nav-dropdown-title">Our Business</span>

              <div className="nav-dropdown-panel">
                <ul>
                  <li onClick={() => navigate("/business/saas")}>
                    Software as a Service
                  </li>
                  <li onClick={() => navigate("/business/hardware")}>
                    Hardware
                  </li>
                  <li onClick={() => navigate("/business/consulting")}>
                    Consulting
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-dropdown-title">News & Media</span>

              <div className="nav-dropdown-panel">
                <ul>
                  <li>Media Releases</li>
                  <li>Article</li>
                  <li>Announcement</li>
                </ul>
              </div>
            </div>

            <a href="#">Keberlanjutan</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ABOUT ================= */}
      <section className="public-about-hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        <div className="hero-gradient"></div>

        <div className="public-about-content">
          <h1 className="public-about-title">
            <span className="title-main">Readymix Business Solution</span>
            <br />
          </h1>

          <p className="public-about-desc">
            Investasi untuk memaksimalkan potensi bisnis readymix anda
          </p>

          <div className="public-about-buttons">
            <button
              className="public-about-btn primary"
              onClick={() => navigate("/about-detail")}
            >
              Selengkapnya <span>↗</span>
            </button>
          </div>
        </div>

        <img src={truckImg} alt="Truck RBS" className="hero-truck" />
      </section>
      {/* ================= HERO BOTTOM ================= */}
      <section className="public-hero-bottom">
        <div className="hero-bottom-container">
          <div className="hero-bottom-left">
            <h2 className="hero-bottom-title">
              We help to <span>optimize</span> production
            </h2>

            <p className="hero-bottom-desc">
              Maksimalkan potensi bisnis Readymix dengan kontrol monitoring dan
              operasional yang terintegrasi.
            </p>

            <div className="hero-bottom-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Realtime</span>
              </div>

              <div className="feature-divider">|</div>

              <div className="feature-item">
                <GiGearStickPattern className="feature-icon" />
                <span>Integrated</span>
              </div>

              <div className="feature-divider">|</div>

              <div className="feature-item">
                <FaMobileAlt className="feature-icon" />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">
            Produk dan Layanan untuk bisnis readymix Anda
          </h2>

          {/* SaaS */}
          <div className="product-row">
            <div className="product-image">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={saasImg} alt="SaaS" />
                  </div>

                  <div className="flip-card-back">
                    <img src={logoImg} alt="RBS Logo" />
                    <span>READYMIX BUSINESS SOLUTION</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="section-title-large">
                SaaS (Software as a Service)
              </h2>

              <p>
                Solusi digital untuk memaksimalkan operasional dan manajemen
                bisnis readymix Anda.
              </p>

              <ul>
                <li>Manajemen produksi</li>
                <li>Dashboard real-time</li>
                <li>Monitoring distribusi</li>
              </ul>
              <button
                className="product-readmore-btn"
                onClick={() => navigate("/business/saas")}
              >
                Read More <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Hardware */}
          <div className="product-row reverse">
            <div className="product-image">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* FRONT */}
                  <div className="flip-card-front">
                    <img src={hardwareImg} alt="Hardware" />
                  </div>

                  {/* BACK */}
                  <div className="flip-card-back">
                    <img src={logoImg} alt="RBS Logo" />
                    <span>READYMIX BUSINESS SOLUTION</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="section-title-large">Hardware</h2>
              <p>
                Sistem automasi berbasis PLC untuk meningkatkan efisiensi
                produksi.
              </p>

              <ul>
                <li>Integrasi batching plant</li>
                <li>Sensor monitoring</li>
                <li>Support teknis</li>
              </ul>
              <button
                className="product-readmore-btn"
                onClick={() => navigate("/business/saas")}
              >
                Read More <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Consulting */}
          <div className="product-row">
            <div className="product-image">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={consultingImg} alt="Consulting" />
                  </div>

                  <div className="flip-card-back">
                    <img src={logoImg} alt="RBS Logo" />
                    <span>READYMIX BUSINESS SOLUTION</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="section-title-large">Consulting</h2>
              <p>
                Konsultasi strategis untuk pengembangan bisnis dan efisiensi
                operasional.
              </p>

              <ul>
                <li>Audit sistem produksi</li>
                <li>Optimasi workflow</li>
                <li>Training SDM</li>
              </ul>
              <button
                className="product-readmore-btn"
                onClick={() => navigate("/business/saas")}
              >
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INVEST SECTION ================= */}
      <section className="rbs-invest-section">
        <div className="rbs-invest-container">
          <div className="rbs-invest-left">
            <h2 className="rbs-invest-title">
              Investasi untuk memaksimalkan potensi <br />
              readymix perusahaan Anda
            </h2>

            <p className="rbs-invest-desc">
              Kebanyakan Operasional Bisnis Readymix berpotensi mengalami
              kerugian karena tidak memiliki kontrol dan monitoring operasional.
              RBS adalah investasi yang membantu Anda mempermudah manajemen
              readymix dengan cara menekan ketidaksesuaian seminimal mungkin
              untuk memperoleh hasil semaksimal mungkin.
            </p>

            <div className="rbs-invest-line"></div>

            <ul className="rbs-invest-list">
              <li>
                <span className="rbs-invest-check">
                  <FaCheckCircle />
                </span>
                Kelola dan monitor penjualan
              </li>

              <li>
                <span className="rbs-invest-check">
                  <FaCheckCircle />
                </span>
                Pantau dan prediksi kebutuhan stock material
              </li>

              <li>
                <span className="rbs-invest-check">
                  <FaCheckCircle />
                </span>
                Pastikan resource dan equipment beroperasi dengan baik
              </li>
            </ul>
          </div>

          <div className="rbs-invest-right">
            <img src={dashboardImg} alt="Dashboard Preview" />
          </div>
        </div>
      </section>

      {/* ================= LATEST UPDATES SECTION ================= */}
      <section
        className="petronas-updates-section"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundBlendMode: "soft-light",
          backgroundPosition: "top",
        }}
      >
        <div className="petronas-updates-container">
          {/* HEADER */}
          <div className="petronas-updates-header">
            <div className="petronas-updates-header-row">
              <h2 className="petronas-updates-title">
                Latest <span>Updates</span>
              </h2>

              {/* ✅ VIEW ALL KE HALAMAN BARU */}
              <button
                className="petronas-viewall-btn top"
                onClick={() => navigate("/latest-updates")}
              >
                <FaArrowRight />
                View all
              </button>
            </div>

            <p className="petronas-updates-subtitle">
              Stay informed with our latest media releases, featuring key
              announcements, insights,
              <br />
              and developments.
            </p>
          </div>

          {/* SLIDER AUTO */}
          <div
            className="petronas-updates-slider auto-scroll"
            ref={updatesSliderRef}
          >
            {publishedList.length > 0 ? (
              [...publishedList, ...publishedList].map((item, index) => (
                <div key={index} className="petronas-news-card">
                  <div className="petronas-news-thumb">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt={item.title} />
                    ) : (
                      <div className="petronas-thumb-empty">No Thumbnail</div>
                    )}
                  </div>

                  <button
                    className="petronas-news-readmore"
                    onClick={() => navigate(`/knowledge/${item.id}`)}
                  >
                    <FaArrowRight /> Read more
                  </button>

                  <div className="petronas-news-overlay">
                    <p className="petronas-news-date">
                      {item.date || "22 January 2026"}
                    </p>

                    <h3 className="petronas-news-title">{item.title}</h3>
                    <p className="petronas-news-type">Media Release</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="public-knowledge-empty">
                Belum ada berita terbaru.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="petronas-highlights-section">
        <div className="petronas-highlights-container">
          <div className="petronas-highlights-header">
            <h2 className="petronas-highlights-title">Highlights</h2>
            <p className="petronas-highlights-subtitle">
              Discover what's happening around PT Teknologi Readymix Indonesia.
            </p>
          </div>

          <div className="petronas-highlights-layout">
            <div className="petronas-highlights-image-card">
              <img
                src={highlightData[activeHighlight].img}
                alt={highlightData[activeHighlight].title}
              />
            </div>

            <div className="petronas-highlights-right">
              {highlightData.map((item, index) => {
                const isActive = index === activeHighlight;

                return (
                  <div key={index} className="petronas-highlight-item">
                    <div
                      className="petronas-highlight-header-row"
                      onClick={() => setActiveHighlight(index)}
                    >
                      <h4
                        className={`petronas-highlight-title ${
                          isActive ? "active" : ""
                        }`}
                      >
                        {item.title}
                      </h4>

                      <button
                        className={`petronas-highlight-toggle ${
                          isActive ? "active" : ""
                        }`}
                      >
                        {isActive ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>

                    {isActive && (
                      <div className="petronas-highlight-body">
                        <p className="petronas-highlight-desc">{item.desc}</p>

                        <a
                          href={item.linkUrl}
                          className="petronas-highlight-readmore"
                        >
                          <span className="petronas-highlight-readmore-icon">
                            <FaArrowRight />
                          </span>
                          {item.linkText}
                        </a>
                      </div>
                    )}

                    <div className="petronas-highlight-line"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="public-footer-modern">
        <div className="footer-top-info">
          <p>
            <b>Address:</b> Perum Bukit Asri 2 Blok S No. 8 Rt 11 Rw 09 Kel.
            Lerep Ungaran barat
          </p>
          <p>
            <b>Email:</b> teknologireadymix@gmail.com
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
