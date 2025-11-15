
import React, { useState } from 'react';
import styles from '../styles/TechnicalSupport.module.css';
import Footer from './footer.jsx';
const TechnicalSupport = () => {
  const [expandedSection, setExpandedSection] = useState('ms-net');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Technical Support Section */}
      <div className={styles.technicalSupportContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" 
              alt="Technical Support Representative"
              className={styles.supportImage}
            />
            <div className={styles.overlayImage}>
              <div className={styles.techIconContainer}>
                <svg className={styles.wrenchIcon} viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" stroke="url(#gradient)" strokeWidth="2" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" stroke="url(#gradient)" strokeWidth="2" opacity="0.5"/>
                  <circle cx="100" cy="100" r="40" stroke="url(#gradient)" strokeWidth="2" opacity="0.7"/>
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="100%" stopColor="#ff6b00" />
                    </linearGradient>
                  </defs>
                  
                  <g transform="translate(100, 100)">
                    <path 
                      d="M-15,-30 L-15,-10 L-25,-10 L-25,10 L-15,10 L-15,25 L-5,35 L10,20 L20,30 L35,15 L25,5 L15,-5 L5,-15 L-5,-25 L-15,-30 Z" 
                      fill="white"
                    />
                    <circle cx="18" cy="18" r="8" fill="none" stroke="white" strokeWidth="3"/>
                  </g>
                </svg>
                <div className={styles.glowEffect}></div>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.badge}>TECHNICAL SUPPORT</div>
            <h1 className={styles.mainHeading}>We Support</h1>
            <h2 className={styles.subHeading}>Personalized Solutions for Your Unique Needs.</h2>

            <div className={styles.accordionContainer}>
              {/* MS.NET */}
              <div className={styles.accordionItem}>
                <div 
                  className={`${styles.accordionHeader} ${expandedSection === 'ms-net' ? styles.active : ''}`}
                  onClick={() => toggleSection('ms-net')}
                >
                  <span className={styles.accordionTitle}>MS.NET Development</span>
                  <span className={styles.accordionIcon}>{expandedSection === 'ms-net' ? '−' : '+'}</span>
                </div>
                {expandedSection === 'ms-net' && (
                  <div className={styles.accordionContent}>
                    <p>Expertise in C#, VB.NET, ASP.NET Web Forms, ASP.NET MVC, WCF, WPF, and Cloud Hosting solutions.</p>
                  </div>
                )}
              </div>

              {/* Java */}
              <div className={styles.accordionItem}>
                <div 
                  className={`${styles.accordionHeader} ${expandedSection === 'java' ? styles.active : ''}`}
                  onClick={() => toggleSection('java')}
                >
                  <span className={styles.accordionTitle}>Java Application Development</span>
                  <span className={styles.accordionIcon}>{expandedSection === 'java' ? '−' : '+'}</span>
                </div>
                {expandedSection === 'java' && (
                  <div className={styles.accordionContent}>
                    <p>Comprehensive Java development services including Spring Framework, Hibernate, and enterprise application solutions.</p>
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className={styles.accordionItem}>
                <div 
                  className={`${styles.accordionHeader} ${expandedSection === 'mobile' ? styles.active : ''}`}
                  onClick={() => toggleSection('mobile')}
                >
                  <span className={styles.accordionTitle}>Mobile Application Development</span>
                  <span className={styles.accordionIcon}>{expandedSection === 'mobile' ? '−' : '+'}</span>
                </div>
                {expandedSection === 'mobile' && (
                  <div className={styles.accordionContent}>
                    <p>Native and cross-platform mobile app development for iOS and Android using React Native, Flutter, and native technologies.</p>
                  </div>
                )}
              </div>

              {/* Web */}
              <div className={styles.accordionItem}>
                <div 
                  className={`${styles.accordionHeader} ${expandedSection === 'web' ? styles.active : ''}`}
                  onClick={() => toggleSection('web')}
                >
                  <span className={styles.accordionTitle}>Web Development</span>
                  <span className={styles.accordionIcon}>{expandedSection === 'web' ? '−' : '+'}</span>
                </div>
                {expandedSection === 'web' && (
                  <div className={styles.accordionContent}>
                    <p>Modern web development using React, Angular, Vue.js, and backend technologies to create responsive and scalable web applications.</p>
                  </div>
                )}
              </div>

              {/* Database */}
              <div className={styles.accordionItem}>
                <div 
                  className={`${styles.accordionHeader} ${expandedSection === 'database' ? styles.active : ''}`}
                  onClick={() => toggleSection('database')}
                >
                  <span className={styles.accordionTitle}>Database Technologies</span>
                  <span className={styles.accordionIcon}>{expandedSection === 'database' ? '−' : '+'}</span>
                </div>
                {expandedSection === 'database' && (
                  <div className={styles.accordionContent}>
                    <p>Expert database design and management with SQL Server, MySQL, PostgreSQL, MongoDB, and cloud database solutions.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Process Section */}
      <div className={styles.supportProcessSection}>
        <div className={styles.supportProcessContent}>
          <div className={styles.supportProcessLeft}>
            <div className={styles.supportProcessBadge}>SUPPORT PROCESS</div>
            <h2 className={styles.supportProcessHeading}>
              Before we accept your support requirements you will have to provide with us the details like
            </h2>
            
            <ul className={styles.supportProcessList}>
              <li>Major Technologies used.</li>
              <li>Additional Technologies used.</li>
              <li>How will you provide us access to your machine?</li>
              <li>Can we do a remote desktop or you will send us the complete code by email or shared directory?</li>
              <li>What are your convenient hours for interacting with our support engineer.</li>
            </ul>

            <div className={styles.faqSection}>
              <div className={styles.faqHeader}>
                <span className={styles.faqQuestion}>Is sharing this information necessary?</span>
                <span className={styles.faqIcon}>−</span>
              </div>
              <div className={styles.faqAnswer}>
                Yes! we will need this information so as to help you in best suitable way.
              </div>
            </div>
          </div>

          <div className={styles.supportProcessRight}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop" 
              alt="Support Team"
              className={styles.supportTeamImage}
            />
          </div>
        </div>
      </div>
       
    </>
  );
};

export default TechnicalSupport;

