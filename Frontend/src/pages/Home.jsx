import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "../styles/Home.module.css";
import worknAiLogo from "../assets/worknAI logo.jpeg";

const CourseLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  const courseSlides = [
    {
      title: "Development & Database Courses",
      courses: [
        {
          name: ".NET FULL STACK DEVELOPER",
          icon: "🔷",
          color: "#0078D4",
          url: "/courses/dotnet-fullstack",
        },
        {
          name: "MERN FULL STACK DEVELOPER",
          icon: "⚛️",
          color: "#61DAFB",
          url: "/courses/mern-fullstack",
        },
        {
          name: "DATA ENGINEERING",
          icon: "🔧",
          color: "#FF6B6B",
          url: "/courses/data-engineering",
        },
        {
          name: "JAVA FULL STACK DEVELOPER",
          icon: "☕",
          color: "#007396",
          url: "/courses/java-fullstack",
        },
        {
          name: "PL/SQL DEVELOPER",
          icon: "💾",
          color: "#F80000",
          url: "/courses/plsql-developer",
        },
        {
          name: "DATA SCIENCE",
          icon: "📊",
          color: "#4285F4",
          url: "/courses/data-science",
        },
        {
          name: "PYTHON FULL STACK DEVELOPER",
          icon: "🐍",
          color: "#3776AB",
          url: "/courses/python-fullstack",
        },
        {
          name: "DATA ANALYST",
          icon: "📈",
          color: "#FF9800",
          url: "/courses/data-analyst",
        },
        {
          name: "AI DEVELOPER",
          icon: "🤖",
          color: "#00BCD4",
          url: "/courses/ai-developer",
        },
      ],
    },
    {
      title: "Cloud Computing, Software Testing & SAP Courses",
      courses: [
        {
          name: "AWS DEVOPS",
          icon: "☁️",
          color: "#FF9900",
          url: "/courses/aws-devops",
        },
        {
          name: "MANUAL TESTING",
          icon: "🧪",
          color: "#9C27B0",
          url: "/courses/manual-testing",
        },
        {
          name: "AWS SOLUTION ARCHITECT",
          icon: "🏗️",
          color: "#FFB300",
          url: "/courses/aws-solution-architect",
        },
        {
          name: "SAP FINANCIAL ACCOUNTING & CONTROLLING",
          icon: "💼",
          color: "#0052CC",
          url: "/courses/sap-fico",
        },
        { name: "AZURE", icon: "☁️", color: "#0078D4", url: "/courses/azure" },
        {
          name: "AUTOMATION TESTING",
          icon: "🤖",
          color: "#4CAF50",
          url: "/courses/automation-testing",
        },
        {
          name: "SAP PRODUCTION PLANNING",
          icon: "📦",
          color: "#0052CC",
          url: "/courses/sap-pp",
        },
        {
          name: "DEVOPS",
          icon: "♾️",
          color: "#326CE5",
          url: "/courses/devops",
        },
        {
          name: "SAP MATERIALS MANAGEMENT",
          icon: "📋",
          color: "#0052CC",
          url: "/courses/sap-mm",
        },
      ],
    },
    {
      title: "Advanced Technology & Business Courses",
      courses: [
        {
          name: "MACHINE LEARNING",
          icon: "🧠",
          color: "#FF6F00",
          url: "/courses/machine-learning",
        },
        {
          name: "BLOCKCHAIN DEVELOPER",
          icon: "⛓️",
          color: "#3C3C3D",
          url: "/courses/blockchain",
        },
        {
          name: "CYBER SECURITY",
          icon: "🔒",
          color: "#D32F2F",
          url: "/courses/cyber-security",
        },
        {
          name: "UI/UX DESIGN",
          icon: "🎨",
          color: "#E91E63",
          url: "/courses/uiux-design",
        },
        {
          name: "DIGITAL MARKETING",
          icon: "📱",
          color: "#00897B",
          url: "/courses/digital-marketing",
        },
        {
          name: "BUSINESS ANALYTICS",
          icon: "💼",
          color: "#5E35B1",
          url: "/courses/business-analytics",
        },
        {
          name: "CLOUD ARCHITECT",
          icon: "🏗️",
          color: "#1976D2",
          url: "/courses/cloud-architect",
        },
        {
          name: "MOBILE APP DEVELOPMENT",
          icon: "📲",
          color: "#43A047",
          url: "/courses/mobile-development",
        },
        {
          name: "IoT SOLUTIONS",
          icon: "🌐",
          color: "#F57C00",
          url: "/courses/iot-solutions",
        },
      ],
    },
  ];

  const featuredCourses = [
    {
      category: "DEVELOPMENT COURSES",
      title: ".NET FULL STACK DEVELOPER",
      description:
        "Advance your career in web development with our .NET Full Stack Developer Course....",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=540&fit=crop",
      url: "/courses/dotnet-fullstack",
    },
    {
      category: "DATABASE COURSES",
      title: "PL/SQL DEVELOPER",
      description:
        "Boost your database development career with our PL/SQL Developer Training Course....",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&h=540&fit=crop",
      url: "/courses/plsql-developer",
    },
    {
      category: "CLOUD COMPUTING COURSES",
      title: "AWS DEVOPS",
      description:
        "Accelerate your cloud career with our AWS DevOps Training Course, designed to equip.....",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=540&fit=crop",
      url: "/courses/aws-devops",
    },
  ];

  const stats = [
    {
      icon: "👥",
      number: "1k hr +",
      title: "Expert-Led Courses:",
      description: "Covering diverse topics to enhance your skills.",
      gradient: "linear-gradient(135deg, #FFB6C1 0%, #FFA5B8 100%)",
    },
    {
      icon: "👨‍👩‍👧",
      number: "10k +",
      title: "Happy Learners:",
      description: "Transforming lives through education.",
      gradient: "linear-gradient(135deg, #A8C0FF 0%, #C2E9FB 100%)",
    },
    {
      icon: "🎯",
      number: "95% +",
      title: "Success Rate:",
      description: "Learners achieving their goals with our courses.",
      gradient: "linear-gradient(135deg, #FFE8E8 0%, #FFF0F0 100%)",
    },
    {
      icon: "⭐",
      number: "4.9 +",
      title: "Learner Rating:",
      description: "Trusted by thousands for quality education.",
      gradient: "linear-gradient(135deg, #FFF9E6 0%, #FFFAED 100%)",
    },
  ];

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % courseSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [courseSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % courseSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + courseSlides.length) % courseSlides.length
    );

  // Touch swipe for mobile
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchMove = (e) => {
      if (touchStartX.current === null) return;
      const diff = e.touches[0].clientX - touchStartX.current;
      if (Math.abs(diff) > 60) {
        diff > 0 ? prevSlide() : nextSlide();
        touchStartX.current = null;
      }
    };
    const onTouchEnd = () => {
      touchStartX.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Keyboard controls (a11y)
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleCourseClick = (url) => {
    // Internal routes: navigate in same tab
    window.location.href = url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiry/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setShowContactForm(false);
      } else {
        alert("❌ " + (data.message || "Failed to submit form"));
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("⚠️ Error submitting form. Check console or backend connection.");
    }
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      {/* Slider Section */}
      <div className={styles.landingContainer}>
        <div className={`${styles.decorativeLines} ${styles.left}`}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={styles.line}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className={`${styles.decorativeLines} ${styles.right}`}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={styles.line}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        <div className={styles.decorativeCircle}>
          <div className={styles.decorativeCircleBefore}></div>
          <div className={styles.decorativeCircleAfter}></div>
        </div>
        <div className={styles.decorativePattern}></div>

        <header className={styles.header}>
          <h1 className={styles.mainTitle}>
            Empowering Students and Corporates with Real-World Skills.
          </h1>
        </header>

        <div
          className={styles.sliderContainer}
          ref={sliderRef}
          aria-roledescription="carousel"
          aria-label="Course categories"
        >
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.contentWrapper}>
            <div className={styles.browserFrame}>
              <div className={styles.browserDots}>
                <span className={`${styles.dot} ${styles.dotRed}`}></span>
                <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                <span className={`${styles.dot} ${styles.dotGreen}`}></span>
              </div>
              <div className={styles.browserTitle}>
                {courseSlides[currentSlide].title}
              </div>
            </div>

            <div className={styles.coursesGrid}>
              {courseSlides[currentSlide].courses.map((course, index) => (
                <button
                  key={index}
                  className={styles.courseCard}
                  onClick={() => handleCourseClick(course.url)}
                  aria-label={`Open ${course.name}`}
                >
                  <div
                    className={styles.courseIcon}
                    style={{ backgroundColor: `${course.color}20` }}
                  >
                    <span style={{ color: course.color }}>{course.icon}</span>
                  </div>
                  <div className={styles.courseName}>{course.name}</div>
                  <div className={styles.coursePattern}></div>
                </button>
              ))}
            </div>
          </div>

          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.upArrows} aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <ChevronRight
              key={i}
              className={styles.arrowUp}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <span className={styles.heroEmoji}>🎯</span>
              <span className={styles.heroTagText}>
                Upgrade your Skills, Transform your Future!
              </span>
              <span className={styles.heroEmoji}>📚</span>
            </div>

            <h2 className={styles.heroTitle}>
              Your Gateway To
              <br />
              Knowledge, Anytime, Anywhere!
            </h2>

            <p className={styles.heroDescription}>
              <strong>
                Learn the skills you need to stay ahead in a fast-changing
                world.
              </strong>{" "}
              Our platform provides comprehensive courses that cater to learners
              at all levels, helping you achieve success.
            </p>

            <button className={styles.heroButton}>Sign Up Today →</button>
          </div>

          <div className={styles.heroImageWrapper}>
            <div className={styles.heroBlobBackground} />
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&h=1200&fit=crop"
              alt="Learner with laptop"
              className={styles.heroImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Contact Sidebar */}
        <div
          className={styles.contactSidebar}
          role="navigation"
          aria-label="Quick contact"
        >
          <div
            className={styles.sidebarItem}
            onMouseEnter={() => setShowContactForm(true)}
            onClick={() => setShowContactForm(true)}
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" ? setShowContactForm(true) : null
            }
          >
            <span className={styles.sidebarIcon}>📧</span>
            <span className={styles.sidebarText}>Contact Us</span>
          </div>
          <a
            href="https://wa.me/918888848588"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sidebarItem}
          >
            <span className={styles.sidebarIcon}>💬</span>
            <span className={styles.sidebarText}>WhatsApp</span>
          </a>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <div
            className={styles.contactFormOverlay}
            onClick={() => setShowContactForm(false)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={styles.contactFormModal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setShowContactForm(false)}
                aria-label="Close contact form"
              >
                <X size={20} />
              </button>
              <h3 className={styles.formTitle}>Contact Form</h3>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={styles.formInput}
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.formTextarea}
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button type="submit" className={styles.formSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Chat Widget */}
        <a
          href="https://wa.me/918888848588"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.chatWidget}
          aria-label="Open WhatsApp chat"
        >
          <span className={styles.chatIcon}>💬</span>
        </a>
      </section>

      {/* Featured Courses */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredHeader}>
          <span className={styles.featuredBadge}>FEATURED COURSES</span>
          <h2 className={styles.featuredTitle}>
            Enhance Your Skills with
            <br />
            Expert-Led Learning.
          </h2>
          <button className={styles.viewAllButton}>VIEW ALL COURSES →</button>
        </div>

        <div className={styles.featuredCoursesGrid}>
          {featuredCourses.map((course, index) => (
            <article key={index} className={styles.featuredCourseCard}>
              <div className={styles.featuredCardHeader}>
                <h3 className={styles.featuredCategory}>{course.category}</h3>
                <div className={styles.arrowIcon}>↗</div>
              </div>

              <div className={styles.featuredImageContainer}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={styles.featuredImage}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.featuredOverlay}>
                  <div className={styles.featuredOverlayContent}>
                    <div className={styles.featuredIconBox}>
                      {course.category === "DEVELOPMENT COURSES" && (
                        <>
                          <div className={styles.techLogo}>
                            <svg
                              viewBox="0 0 100 100"
                              className={styles.netLogo}
                              aria-hidden="true"
                            >
                              <ellipse
                                cx="50"
                                cy="50"
                                rx="35"
                                ry="35"
                                fill="#0078D4"
                              />
                              <path
                                d="M 30 40 L 50 60 L 70 40"
                                stroke="white"
                                strokeWidth="6"
                                fill="none"
                              />
                            </svg>
                          </div>
                          <div className={styles.techLabel}>.NET</div>
                        </>
                      )}
                      {course.category === "DATABASE COURSES" && (
                        <>
                          <div
                            className={`${styles.techLogo} ${styles.dbLogo}`}
                          >
                            <div className={styles.sqlIcon}>SQL</div>
                            <div className={styles.dbIcon}>💾</div>
                          </div>
                          <div className={styles.techLabel}>PL/SQL</div>
                        </>
                      )}
                      {course.category === "CLOUD COMPUTING COURSES" && (
                        <>
                          <div
                            className={`${styles.techLogo} ${styles.awsLogo}`}
                          >
                            <div className={styles.awsText}>aws</div>
                            <div className={styles.awsSmile}>⌣</div>
                          </div>
                          <div className={styles.techLabel}>AWS</div>
                        </>
                      )}
                    </div>
                    <h4 className={styles.featuredCourseTitle}>
                      {course.title.split(" ").slice(-2).join(" ")}
                    </h4>
                  </div>
                </div>
              </div>

              <div className={styles.featuredCardBody}>
                <h4 className={styles.featuredCourseName}>{course.title}</h4>
                <p className={styles.featuredCourseDesc}>
                  {course.description}
                </p>
                <button
                  className={styles.knowMoreButton}
                  onClick={() => handleCourseClick(course.url)}
                >
                  Know More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          <div className={styles.whyChooseBadge}>WHY CHOOSE US ?</div>
          <h2 className={styles.whyChooseTitle}>
            Creating A Community Of
            <br />
            Life Long Learners.
          </h2>

          <div className={styles.statsTimeline}>
            <div className={styles.timelineLine}></div>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineConnector}></div>

                  <div className={styles.statCardInner}>
                    <div className={styles.statIcon}>{stat.icon}</div>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statTitle}>{stat.title}</div>
                    <div className={styles.statDescription}>
                      {stat.description}
                    </div>
                    <div className={styles.statProgress}>
                      <div className={styles.statProgressBar}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className={styles.corporateSection}>
        <div className={styles.corporateContainer}>
          <div className={styles.corporateContent}>
            <h2 className={styles.corporateTitle}>
              Corporate Training
              <br />
              Program
            </h2>
            <p className={styles.corporateSubtitle}>
              Enhance Your Employees' IT Skills
            </p>
            <div className={styles.corporatePoints}>
              <p className={styles.corporatePoint}>
                <span className={styles.pointNumber}>1.</span> Providing
                IT-related corporate training for the past two years, focusing
                on top corporate companies across India.
              </p>
              <p className={styles.corporatePoint}>
                <span className={styles.pointNumber}>2.</span> Training
                available in Pune and Bangalore with a strong emphasis on
                clearing doubts and enhancing technical expertise.
              </p>
            </div>
            <button className={styles.corporateButton}>Enquire Now</button>
          </div>

          <div className={styles.corporateImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop"
              alt="Corporate Training Session"
              className={styles.corporateImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImagesCollage}>
            <div className={styles.collageImage1}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                alt="Team collaboration"
                className={styles.aboutImage}
                loading="lazy"
              />
            </div>
            <div className={styles.collageImage2}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=560&h=440&fit=crop"
                alt="Professional working"
                className={styles.aboutImage}
                loading="lazy"
              />
            </div>
            <div className={styles.collageImage3}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&h=760&fit=crop"
                alt="Student learning"
                className={styles.aboutImage}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutBadge}>KNOW ABOUT US</div>
            <h2 className={styles.aboutTitle}>
              Innovate, Learn, and
              <br />
              Lead with Technology
              <br />
              Excellence
            </h2>
            <p className={styles.aboutDescription}>
              <strong>Empowering learners</strong> through transformative
              education, cutting-edge technology training, and immersive
              development experiences
              <strong>
                {" "}
                to become future-ready professionals and leaders in the
                ever-evolving digital landscape.
              </strong>
            </p>

            <div className={styles.aboutFeatures}>
              <div className={styles.featureItem}>
                <div
                  className={styles.featureIconCircle}
                  style={{ background: "#E3F2FD" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#2196F3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#2196F3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#2196F3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>
                    Industry-Ready Training
                  </h3>
                  <p className={styles.featureDesc}>
                    Transforming individuals into industry-ready professionals
                    through cutting-edge technology training and development.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div
                  className={styles.featureIconCircle}
                  style={{ background: "#E8EAF6" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Innovative Learning</h3>
                  <p className={styles.featureDesc}>
                    Blending emerging web and mobile technologies with proven
                    teaching methodologies for a transformative online education
                    experience.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div
                  className={styles.featureIconCircle}
                  style={{ background: "#E8EAF6" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 21C3 17.134 6.134 14 10 14C13.866 14 17 17.134 17 21"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 11C17.657 11 19 9.657 19 8C19 6.343 17.657 5 16 5"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 21C21 18.791 19.209 17 17 17"
                      stroke="#5C6BC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Community Engagement</h3>
                  <p className={styles.featureDesc}>
                    Inspiring learners, engaging educators, and connecting with
                    communities through insightful content and interactive
                    learning sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsBadge}>
            WORDS FROM THOSE WE'VE EMPOWERED
          </div>
          <h2 className={styles.testimonialsTitle}>
            Real success stories from students powered by our expert IT
            <br />
            training. See how we transform teams! 🚀
          </h2>
        </div>

        <div className={styles.testimonialsContainer}>
          {/* Left Row */}
          <div
            className={`${styles.testimonialsRow} ${styles.testimonialsRowLeft}`}
            aria-hidden="true"
          >
            {[
              {
                quote:
                  "The training was clear, concise, and easy to follow. Highly recommended!",
                name: "Priya M.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
              {
                quote:
                  "Real-world applications made learning effective and impactful.",
                name: "Vikram R.",
                color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
              },
              {
                quote:
                  "Covered the latest industry trends–our team is ahead in tech!",
                name: "Anjali D.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
              {
                quote:
                  "Trainers were approachable and cleared all doubts effectively.",
                name: "Karthik P.",
                color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
              },
              {
                quote: "Boosted our team's productivity–high ROI!",
                name: "Suresh K.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
              {
                quote:
                  "Tailored to our needs, making training even more valuable.",
                name: "Meera J.",
                color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
              },
            ]
              .concat([
                {
                  quote:
                    "The training was clear, concise, and easy to follow. Highly recommended!",
                  name: "Priya M.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
                {
                  quote:
                    "Real-world applications made learning effective and impactful.",
                  name: "Vikram R.",
                  color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
                },
                {
                  quote:
                    "Covered the latest industry trends–our team is ahead in tech!",
                  name: "Anjali D.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
                {
                  quote:
                    "Trainers were approachable and cleared all doubts effectively.",
                  name: "Karthik P.",
                  color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
                },
                {
                  quote: "Boosted our team's productivity–high ROI!",
                  name: "Suresh K.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
                {
                  quote:
                    "Tailored to our needs, making training even more valuable.",
                  name: "Meera J.",
                  color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
                },
              ])
              .map((t, i) => (
                <div
                  key={`left-${i}`}
                  className={styles.testimonialCard}
                  style={{ background: t.color }}
                >
                  <div className={styles.cardHeader}>
                    <img
                      src={worknAiLogo}
                      alt="Company Logo"
                      className={styles.companyLogo}
                    />
                    <div className={styles.quoteIcon} aria-hidden="true">
                      "
                    </div>
                  </div>
                  <p className={styles.testimonialQuote}>{t.quote}</p>
                  <div className={styles.testimonialFooter}>
                    <div className={styles.avatarCircle}>
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 1}`}
                        alt={t.name}
                        className={styles.avatarImg}
                        loading="lazy"
                      />
                    </div>
                    <span className={styles.testimonialName}>— {t.name}</span>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Row */}
          <div
            className={`${styles.testimonialsRow} ${styles.testimonialsRowRight}`}
            aria-hidden="true"
          >
            {[
              {
                quote:
                  "Understood exactly what we needed and applied it to our real-world application.",
                name: "Rohan S.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
              {
                quote:
                  "Comprehensive training with a clear approach–helped our team immensely!",
                name: "Divya P.",
                color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
              },
              {
                quote:
                  "The trainers were knowledgeable and always ready to help. Highly recommended!",
                name: "Vikas M.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
              {
                quote:
                  "Customized training that perfectly aligned with our business goals.",
                name: "Sanjay T.",
                color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
              },
              {
                quote:
                  "Our employees are now more confident and skilled, thanks to NewGenSoftech!",
                name: "Megha S.",
                color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
              },
            ]
              .concat([
                {
                  quote:
                    "Understood exactly what we needed and applied it to our real-world application.",
                  name: "Rohan S.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
                {
                  quote:
                    "Comprehensive training with a clear approach–helped our team immensely!",
                  name: "Divya P.",
                  color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
                },
                {
                  quote:
                    "The trainers were knowledgeable and always ready to help. Highly recommended!",
                  name: "Vikas M.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
                {
                  quote:
                    "Customized training that perfectly aligned with our business goals.",
                  name: "Sanjay T.",
                  color: "linear-gradient(135deg, #8B5CF6 0%, #B794F6 100%)",
                },
                {
                  quote:
                    "Our employees are now more confident and skilled, thanks to NewGenSoftech!",
                  name: "Megha S.",
                  color: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                },
              ])
              .map((t, i) => (
                <div
                  key={`right-${i}`}
                  className={styles.testimonialCard}
                  style={{ background: t.color }}
                >
                  <div className={styles.cardHeader}>
                    <img
                      src={worknAiLogo}
                      alt="Company Logo"
                      className={styles.companyLogo}
                    />
                    <div className={styles.quoteIcon} aria-hidden="true">
                      "
                    </div>
                  </div>
                  <p className={styles.testimonialQuote}>{t.quote}</p>
                  <div className={styles.testimonialFooter}>
                    <div className={styles.avatarCircle}>
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 20}`}
                        alt={t.name}
                        className={styles.avatarImg}
                        loading="lazy"
                      />
                    </div>
                    <span className={styles.testimonialName}>— {t.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseLandingPage;
