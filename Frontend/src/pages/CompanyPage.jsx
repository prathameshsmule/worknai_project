import React, { useState, useEffect } from "react";
import styles from "../styles/CompanyPage.module.css";
import walmartLogo from "../assets/walmart.png";

const CompanyPage = () => {
  const [currentText, setCurrentText] = useState("Vision");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === "Vision" ? "Mission" : "Vision"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.companyPage}>
      {/* Section 1 - Our Approach */}
      <section className={styles.approachSection}>
        <div className={styles.tagline}>
          🏆 Innovating Technology, Empowering Businesses
        </div>
        <div className={styles.approachContent}>
          <h1 className={styles.approachTitle}>
            Our <span className={styles.gradientText}>{currentText}.</span>
          </h1>
          <p className={styles.approachDescription}>
            At WORKNAI TECHNOLOGIES, we craft cutting-edge web, mobile, and
            software solutions to accelerate business growth. Stay ahead with
            our expertise in custom development, cloud solutions, and emerging
            technologies! 🚀
          </p>
        </div>
      </section>

      {/* Section 2 - Team Image */}
      <section className={styles.teamSection}>
        <div className={styles.teamImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
            alt="Diverse team using devices"
            className={styles.teamImage}
          />
        </div>
      </section>

      {/* Section 3 - Web Design & Development */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesIllustration}>
            <svg viewBox="0 0 500 400" className={styles.devIllustration}>
              {/* Monitor */}
              <rect
                x="80"
                y="60"
                width="340"
                height="220"
                rx="8"
                fill="#3D4A5C"
              />
              <rect
                x="95"
                y="75"
                width="310"
                height="185"
                rx="4"
                fill="#F8F9FA"
              />

              {/* Code Lines */}
              <rect
                x="120"
                y="100"
                width="80"
                height="8"
                rx="4"
                fill="#60A5FA"
              />
              <rect
                x="210"
                y="100"
                width="120"
                height="8"
                rx="4"
                fill="#E0E7FF"
              />
              <rect
                x="120"
                y="125"
                width="60"
                height="8"
                rx="4"
                fill="#FBBF24"
              />
              <rect
                x="190"
                y="125"
                width="140"
                height="8"
                rx="4"
                fill="#E0E7FF"
              />
              <rect
                x="120"
                y="150"
                width="100"
                height="8"
                rx="4"
                fill="#34D399"
              />
              <rect
                x="230"
                y="150"
                width="100"
                height="8"
                rx="4"
                fill="#E0E7FF"
              />

              {/* Color Boxes */}
              <rect
                x="360"
                y="100"
                width="30"
                height="30"
                rx="4"
                fill="#60A5FA"
              />
              <rect
                x="360"
                y="140"
                width="30"
                height="30"
                rx="4"
                fill="#FBBF24"
              />
              <rect
                x="360"
                y="180"
                width="30"
                height="30"
                rx="4"
                fill="#34D399"
              />
              <rect
                x="360"
                y="220"
                width="30"
                height="30"
                rx="4"
                fill="#F87171"
              />

              {/* Gear Icon */}
              <circle cx="180" cy="200" r="35" fill="#FF6B9D" opacity="0.9" />
              <circle cx="180" cy="200" r="20" fill="#F8F9FA" />
              <rect x="175" y="165" width="10" height="15" fill="#FF6B9D" />
              <rect x="175" y="220" width="10" height="15" fill="#FF6B9D" />
              <rect x="145" y="195" width="15" height="10" fill="#FF6B9D" />
              <rect x="200" y="195" width="15" height="10" fill="#FF6B9D" />

              {/* Keyboard */}
              <rect
                x="150"
                y="310"
                width="200"
                height="70"
                rx="6"
                fill="#3D4A5C"
              />
              <g className={styles.keys}>
                {[...Array(45)].map((_, i) => {
                  const row = Math.floor(i / 15);
                  const col = i % 15;
                  return (
                    <rect
                      key={i}
                      x={158 + col * 12}
                      y={318 + row * 18}
                      width="10"
                      height="10"
                      rx="2"
                      fill="#CBD5E1"
                    />
                  );
                })}
              </g>

              {/* Code Symbol */}
              <rect
                x="100"
                y="320"
                width="40"
                height="50"
                rx="6"
                fill="#8B5CF6"
              />
              <text
                x="120"
                y="352"
                fontSize="24"
                fill="white"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {"{ }"}
              </text>
            </svg>
          </div>

          <div className={styles.servicesContent}>
            <div className={styles.servicesBadge}>DEVELOPMENT SERVICES</div>
            <h2 className={styles.servicesTitle}>Web Design & Development</h2>
            <p className={styles.servicesDescription}>
              In today's digital age, a well-crafted website is not just an
              online presence—it's a powerful tool for business growth, brand
              visibility, and customer engagement.
            </p>
            <p className={styles.servicesDescription}>
              With over 18 years of experience and 1,000+ successful web
              projects, we specialize in creating high-performance websites and
              tailored software solutions. Our expertise in web development
              ensures that businesses leverage cutting-edge technology for
              increased efficiency and revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Core Application Development */}
      <section className={styles.coreAppSection}>
        <div className={styles.coreAppContainer}>
          <div className={styles.coreAppContent}>
            <h2 className={styles.coreAppTitle}>
              Core
              <br />
              Application
              <br />
              Development
            </h2>
          </div>

          <div className={styles.coreAppDescription}>
            <p>
              At Worknai Technologies, we are a globally recognized team of
              software engineers, delivering custom software solutions that
              drive innovation and business success. Since 1997, we have
              developed numerous enterprise applications, CMS platforms, process
              automation tools, and databases— adapting to the latest
              technologies to offer scalable and future-ready solutions. We
              prioritize customized software engineering that aligns with your
              business goals, industry trends, and evolving technology to ensure
              a competitive edge.
            </p>
          </div>

          <button className={styles.coreAppContactBtn}>Contact Us →</button>
        </div>
      </section>

      {/* Section 5 - Mobile Application Development */}
      <section className={styles.mobileAppSection}>
        <div className={styles.mobileAppContainer}>
          <div className={styles.mobileAppIllustration}>
            <img
              src="https://newgensoftech.com/wp-content/uploads/2025/02/app-development-3.png"
              alt="Mobile Application Development"
              className={styles.mobileAppImage}
            />
          </div>

          <div className={styles.mobileAppContent}>
            <h2 className={styles.mobileAppTitle}>
              Mobile Application Development
            </h2>
            <p className={styles.mobileAppDescription}>
              Smartphones have transformed how businesses engage with customers.
              Worknai Technologies has been at the forefront of mobile
              technology, developing high-performance mobile applications that
              enhance user experience and drive business growth.
            </p>
            <p className={styles.mobileAppDescription}>
              Our team of mobile app developers creates feature-rich, scalable,
              and intuitive applications tailored to your business
              needs—ensuring a seamless digital experience for your customers.
              Whether it's Android or iOS, we develop apps that increase
              customer engagement and boost your ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Technologies We Use */}
      <section className={styles.technologiesSection}>
        <h2 className={styles.technologiesTitle}>Technologies We Use</h2>

        <div className={styles.technologiesGrid}>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>💡</div>
            <h3 className={styles.techCardTitle}>Programming Languages</h3>
            <p className={styles.techCardText}>
              .NET, ASP.NET, VB.NET, JAVA, JSP, J2EE, PHP, C, C++, C#, PL/SQL,
              XML
            </p>
          </div>

          <div className={styles.techCard}>
            <div className={styles.techIcon}>🎓</div>
            <h3 className={styles.techCardTitle}>Databases</h3>
            <p className={styles.techCardText}>
              SQL, MySQL, Oracle, PostgreSQL, MongoDB
            </p>
          </div>

          <div className={styles.techCard}>
            <div className={styles.techIcon}>📋</div>
            <h3 className={styles.techCardTitle}>Content Management Systems</h3>
            <p className={styles.techCardText}>
              WordPress, Joomla, Umbraco, Drupal
            </p>
          </div>

          <div className={styles.techCard}>
            <div className={styles.techIcon}>🏅</div>
            <h3 className={styles.techCardTitle}>Microsoft Technologies</h3>
            <p className={styles.techCardText}>
              .NET Framework, Bespoke Solutions
            </p>
          </div>

          <div className={styles.techCard}>
            <div className={styles.techIcon}>🎓</div>
            <h3 className={styles.techCardTitle}>Other Skills & Protocols</h3>
            <p className={styles.techCardText}>
              TIBCO Enterprise Service Bus, FIX Protocol, SWIFT, COM+, SOAP
            </p>
          </div>

          <div className={styles.techCard}>
            <div className={styles.techIcon}>💡</div>
            <h3 className={styles.techCardTitle}>Mobile Technology</h3>
            <p className={styles.techCardText}>Android, iOS</p>
          </div>
        </div>
      </section>

      {/* Section 7 - Our Students are Working at */}
      <section className={styles.studentsSection}>
        <h2 className={styles.studentsTitle}>
          Our Students are <span className={styles.workingText}>Working</span>{" "}
          at
        </h2>

        <div className={styles.companiesGrid}>
          {[...Array(6)].map((_, i) => (
            <div className={styles.companyLogo} key={i}>
              <img src={walmartLogo} alt="Walmart" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
