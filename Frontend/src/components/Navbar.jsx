import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/worknAI logo.jpeg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showOthersDropdown, setShowOthersDropdown] = useState(false);
  const [showOnlineDropdown, setShowOnlineDropdown] = useState(false);
  const [showOfflineDropdown, setShowOfflineDropdown] = useState(false);

  // Offline state dropdowns
  const [showMaharashtraDropdown, setShowMaharashtraDropdown] = useState(false);
  const [showKarnatakaDropdown, setShowKarnatakaDropdown] = useState(false);

  // City dropdowns under states
  const [showPuneDropdown, setShowPuneDropdown] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container topbar-flex">
          <div className="top-left">
            <a href="worknai009@gmail.com" className="contact-link">
              worknai009@gmail.com
            </a>
            <a href="tel:+919923400442" className="contact-link">
              +91 9923400442
            </a>
          </div>

          
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/home" className="logo" onClick={closeMobile}>
              <div className="logo-img-wrap">
                <img src={logo} alt="WORKNAI SOFTECH" className="logo-img" />
              </div>
              <div className="logo-text">
                <div className="logo-title">WorknAi</div>
                <div className="logo-subtitle">Technologies</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li>
                <Link to="/home">Home</Link>
              </li>

              {/* ✅ Online Courses Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setShowOnlineDropdown(true)}
                onMouseLeave={() => setShowOnlineDropdown(false)}
              >
                <button className="dropdown-toggle" type="button">
                  Online Courses
                </button>
                {showOnlineDropdown && (
                  <div className="dropdown-menu mega-menu">
                    <div className="mega-menu-grid">
                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">DEVELOPMENT COURSES</h3>
                        <Link to="/DotNetPage" className="course-link">
                          .NET Full Stack Developer
                        </Link>
                        <Link to="/JavaPage" className="course-link">
                          Java Full Stack Developer
                        </Link>
                        <Link to="/PythonPage" className="course-link">
                          Python Full Stack Developer
                        </Link>
                        <Link to="/MernPage" className="course-link">
                          MERN Full Stack Developer
                        </Link>
                      </div>

                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">DATABASE COURSES</h3>
                        <Link to="/SqlPage" className="course-link">
                          PL/SQL Developer
                        </Link>
                        <Link to="/DataAnalyst" className="course-link">
                          Data Analyst
                        </Link>
                        <Link to="/DataEng" className="course-link">
                          Data Engineering
                        </Link>
                        <Link to="/DataScience" className="course-link">
                          Data Science
                        </Link>
                      </div>

                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">CLOUD & TESTING</h3>
                        <Link to="/AwsPage" className="course-link">
                          AWS DevOps
                        </Link>
                        <Link to="/AzurePage" className="course-link">
                          Azure
                        </Link>
                        <Link to="/Devops" className="course-link">
                          DevOps
                        </Link>
                        <Link to="/ManualT" className="course-link">
                          Manual Testing
                        </Link>
                        <Link to="/Automation" className="course-link">
                          Automation Testing
                        </Link>
                      </div>

                      <div className="mega-menu-column">
                        <h3 className="mega-menu-title">SAP COURSES</h3>
                        <Link to="/SapMM" className="course-link">
                          SAP MM
                        </Link>
                        <Link to="/SapFico" className="course-link">
                          SAP FICO
                        </Link>
                        <Link to="/SapPP" className="course-link">
                          SAP PP
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* ✅ Offline Centers Dropdown (Updated for right-side submenus) */}
              <li
                className="dropdown"
                onMouseEnter={() => {
                  clearTimeout(window.offlineTimer);
                  setShowOfflineDropdown(true);
                }}
                onMouseLeave={() => {
                  window.offlineTimer = setTimeout(() => {
                    setShowOfflineDropdown(false);
                    setShowMaharashtraDropdown(false);
                    setShowKarnatakaDropdown(false);
                    setShowPuneDropdown(false);
                  }, 300);
                }}
              >
                <button className="dropdown-toggle" type="button">
                  Offline Centers
                </button>

                {showOfflineDropdown && (
                  <div
                    className="dropdown-menu offline-menu"
                    onMouseEnter={() => clearTimeout(window.offlineTimer)}
                    onMouseLeave={() => {
                      window.offlineTimer = setTimeout(
                        () => setShowOfflineDropdown(false),
                        300
                      );
                    }}
                    style={{
                      position: "absolute",
                      background: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      padding: "8px 0",
                      zIndex: 9,
                    }}
                  >
                    {/* Maharashtra Section */}
                    <div
                      className="offline-option"
                      onMouseEnter={() => {
                        clearTimeout(window.subTimer);
                        setShowMaharashtraDropdown(true);
                        setShowKarnatakaDropdown(false);
                      }}
                      onMouseLeave={() => {
                        window.subTimer = setTimeout(
                          () => setShowMaharashtraDropdown(false),
                          200
                        );
                      }}
                      style={{ position: "relative" }}
                    >
                      <span className="offline-title">Maharashtra ▸</span>
                      {showMaharashtraDropdown && (
                        <div
                          className="dropdown-menu sub-dropdown"
                          onMouseEnter={() => clearTimeout(window.subTimer)}
                          onMouseLeave={() => {
                            window.subTimer = setTimeout(
                              () => setShowMaharashtraDropdown(false),
                              200
                            );
                          }}
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "100%",
                            background: "#fff",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            borderRadius: "8px",
                            padding: "8px 0",
                            zIndex: 10,
                            minWidth: "180px",
                          }}
                        >
                          {/* Pune inside Maharashtra */}
                          <div
                            className="offline-option"
                            onMouseEnter={() => {
                              clearTimeout(window.puneTimer);
                              setShowPuneDropdown(true);
                            }}
                            onMouseLeave={() => {
                              window.puneTimer = setTimeout(
                                () => setShowPuneDropdown(false),
                                200
                              );
                            }}
                            style={{ position: "relative" }}
                          >
                            <span className="offline-title">Pune ▸</span>
                            {showPuneDropdown && (
                              <div
                                className="dropdown-menu sub-dropdown"
                                style={{
                                  position: "absolute",
                                  top: "0",
                                  left: "100%",
                                  background: "#fff",
                                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                  borderRadius: "8px",
                                  padding: "8px 0",
                                  zIndex: 15,
                                  minWidth: "180px",
                                }}
                              >
                                <Link to="/centers/maharashtra/pune/hinjewadi">
                                  Hinjewadi
                                </Link>
                                <Link to="/centers/maharashtra/pune/talawade">
                                  Talawade
                                </Link>
                                <Link to="/centers/maharashtra/pune/bhumkar">
                                  Bhumkar Chowk
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Other cities of Maharashtra */}
                          <Link to="#">Mumbai</Link>
                          <Link to="#">Nagpur</Link>
                        </div>
                      )}
                    </div>

                    {/* Karnataka Section */}
                    <div
                      className="offline-option"
                      onMouseEnter={() => {
                        clearTimeout(window.karnatakaTimer);
                        setShowKarnatakaDropdown(true);
                        setShowMaharashtraDropdown(false);
                      }}
                      onMouseLeave={() => {
                        window.karnatakaTimer = setTimeout(
                          () => setShowKarnatakaDropdown(false),
                          200
                        );
                      }}
                    >
                      <span className="offline-title">Karnataka ▸</span>
                      {showKarnatakaDropdown && (
                        <div
                          className="dropdown-menu sub-dropdown"
                          onMouseEnter={() =>
                            clearTimeout(window.karnatakaTimer)
                          }
                          onMouseLeave={() => {
                            window.karnatakaTimer = setTimeout(
                              () => setShowKarnatakaDropdown(false),
                              200
                            );
                          }}
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "100%",
                            background: "#fff",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            borderRadius: "8px",
                            padding: "8px 0",
                            zIndex: 10,
                            minWidth: "180px",
                          }}
                        >
                          <Link to="#">Bangalore</Link>
                          <Link to="#">Bidar</Link>
                          <Link to="#">Basavakalyan</Link>
                          <Link to="#">Kalaburagi</Link>
                          <Link to="#">Hubli</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>

              {/* Existing Menu Items */}
              <li>
                <Link to="/CompanyPage">Development</Link>
              </li>
              <li>
                <Link to="/TechnicalPage">Technical Support</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/ContactPage">Contact Us</Link>
              </li>

              {/* Others Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setShowOthersDropdown(true)}
                onMouseLeave={() => setShowOthersDropdown(false)}
              >
                <button className="dropdown-toggle" type="button">
                  Others
                </button>
                {showOthersDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/blog">Blog</Link>
                    <Link to="/JobPage">Job Openings</Link>
                    <Link to="/enrollment">Enrollment Form</Link>
                  </div>
                )}
              </li>
            </ul>

            {/* Right Actions */}
            <div className="nav-actions">
              <button className="search-btn" type="button">
                🔍
              </button>

              <Link
                className="enroll-btn"
                to="/enrollment"
                onClick={closeMobile}
              >
                Enroll Now
              </Link>

              <Link
                to="/admin-login"
                className="admin-login-icon"
                title="Admin Login"
                onClick={closeMobile}
                style={{
                  marginLeft: "10px",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                👤
              </Link>

              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                type="button"
              >
                {isMobileMenuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/home" onClick={closeMobile}>
                Home
              </Link>
              <Link to="/CompanyPage" onClick={closeMobile}>
                Development
              </Link>
              <Link to="/TechnicalPage" onClick={closeMobile}>
                Technical Support
              </Link>
              <Link to="/AboutUs" onClick={closeMobile}>
                About Us
              </Link>
              <Link to="/ContactPage" onClick={closeMobile}>
                Contact Us
              </Link>

              <details className="mobile-accordion">
                <summary>Others</summary>
                <div className="mobile-accordion-panel">
                  <Link to="/blog" onClick={closeMobile}>
                    Blog
                  </Link>
                  <Link to="/JobPage" onClick={closeMobile}>
                    Job Openings
                  </Link>
                  <Link to="/enrollment" onClick={closeMobile}>
                    Enrollment Form
                  </Link>
                </div>
              </details>

              <Link
                className="enroll-btn-mobile"
                to="/enrollment"
                onClick={closeMobile}
              >
                Enroll Now
              </Link>

              <Link to="/admin-login" onClick={closeMobile}>
                👤 Admin Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
