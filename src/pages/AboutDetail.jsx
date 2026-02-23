import React from "react";
import "../styles/public.css";

import aboutHero from "../assets/about-hero.jpg";

export default function AboutDetail() {
  return (
    <div className="public-about-page">
      {/* HERO SECTION */}
      <section
        className="public-about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="public-about-hero-overlay"></div>
        <div className="public-about-hero-dots"></div>

        <div className="public-about-hero-content">
          <p className="public-about-hero-tag">About Us</p>

          <h1 className="public-about-hero-title">
            About <br /> Company
          </h1>

          <p className="public-about-hero-desc">
            Profil singkat perusahaan dan sistem terintegrasi Readymix Business
            Solution. Kami membangun solusi digital untuk meningkatkan
            produktivitas industri konstruksi.
          </p>

          <button className="public-about-hero-btn">Explore More</button>
        </div>
      </section>
    </div>
  );
}
