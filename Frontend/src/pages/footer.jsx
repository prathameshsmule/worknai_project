import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/worknAI logo.jpeg"; // ✅ imported logo

const Footer = () => {
  return (
    <>
      {/* Demo Section */}
      <div className={styles.demoSection}>
        <video
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={require("../assets/home.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.demoContent}>
          <h2 className={styles.demoTitle}>Get A Free Demo Session</h2>
          <p className={styles.demoDescription}>
            Discover what it's like to be part of Newgen–real experiences from
            those who've been there.
          </p>
          <button className={styles.demoButton}>Get Access Now</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerGradient}></div>
        <div className={styles.footerContent}>
          {/* ================= LEFT SECTION ================= */}
          <div className={styles.footerSection}>
            <div
              className={styles.logoSection}
              style={{
                marginBottom: "8px", // 🟢 reduced gap under logo
              }}
            >
              <div className={styles.logo}>
                <img
                  src={logo}
                  alt="WorknAI Logo"
                  className={styles.companyLogo}
                />
                <div className={styles.logoText}>
                  <span className={styles.logoworknai}>WORKNAI</span>
                  <span className={styles.logoSoftech}>Technologies</span>
                </div>
              </div>
            </div>

            {/* ✅ Contact Info — reduced top margin */}
            <div
              className={styles.contactInfo}
              style={{
                marginTop: "5px", // 🟢 tighter space between logo & contact
                paddingTop: "5px",
                color: "#f0f0f0",
                lineHeight: "1.8",
              }}
            >
              <h3
                className={styles.contactTitle}
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginBottom: "10px",
                  color: "#ffffff",
                }}
              >
                Contact Us at:
              </h3>

              {/* Address Block */}
              <div style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "4px",
                    fontSize: "0.95rem",
                    color: "#ffffff",
                  }}
                >
                  WorknAI Technologies India Pvt Ltd
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#c7c7c7",
                    maxWidth: "280px",
                    lineHeight: "1.6",
                  }}
                >
                  Unit 101, Oxford Towers, Airport Road, Bangalore, Karnataka
                  560008
                </p>
              </div>

              {/* Email Line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  ✉
                </span>
                <a
                  href="mailto:info@worknai.in"
                  style={{
                    color: "#c7c7c7",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  worknai009@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE SECTION ================= */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>IMPORTANT LINKS</h3>
            <div className={styles.sectionDivider}></div>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#courses">All Courses</a>
              </li>
              <li>
                <a href="#development">Development</a>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>OUR COMPANY</h3>
            <div className={styles.sectionDivider}></div>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#support">Technical Support</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>

          {/* ================= SOCIAL ICONS ================= */}
          <div className={`${styles.footerSection} ${styles.socialSection}`}>
            <div className={styles.socialIcons}>
              <a
                href="#facebook"
                className={`${styles.socialIcon} ${styles.facebook}`}
              >
                <Facebook size={24} />
              </a>
              <a
                href="#twitter"
                className={`${styles.socialIcon} ${styles.twitter}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#youtube"
                className={`${styles.socialIcon} ${styles.youtube}`}
              >
                <Youtube size={24} />
              </a>
              <a
                href="#instagram"
                className={`${styles.socialIcon} ${styles.instagram}`}
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
