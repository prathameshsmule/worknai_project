import React from 'react';
import styles from '../styles/AboutUs.module.css';
import Footer from './footer.jsx';

const AboutUs = () => {
  return (
     <>
    <div className={styles.aboutUsContainer}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Driving a culture of learning and innovation by crafting technology solutions that empower individuals to succeed.
          </h1>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem1}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Team collaboration" />
          </div>
          <div className={styles.imageItem2}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Professional working" />
          </div>
          <div className={styles.imageItem3}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Student learning" />
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.sectionLabel}>KNOW ABOUT US</div>
          <h2 className={styles.sectionHeading}>Innovate, Learn, and Lead with Technology Excellence</h2>
          <p className={styles.sectionDescription}>
            <span className={styles.boldText}>Empowering learners</span> through transformative education, cutting-edge technology training, and immersive development experiences <span className={styles.boldText}>to become future-ready professionals and leaders in the ever-evolving digital landscape.</span>
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Industry-Ready Training</h3>
                <p className={styles.featureText}>Transforming individuals into industry-ready professionals through cutting-edge technology training and development.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Innovative Learning</h3>
                <p className={styles.featureText}>Blending emerging web and mobile technologies with proven teaching methodologies for a transformative online education experience.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Community Engagement</h3>
                <p className={styles.featureText}>Inspiring learners, engaging educators, and connecting with communities through insightful content and interactive learning sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <div className={styles.progressLabel}>PROGRESS THAT POWERS SUCCESS</div>
            <h2 className={styles.progressHeading}>On Track for Excellence</h2>
          </div>

          <div className={styles.progressBars}>
            <div className={styles.progressItem}>
              <div className={styles.progressInfo}>
                <span className={styles.progressTitle}>Practical Guidance</span>
                <span className={styles.progressPercentage}>99%</span>
              </div>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{width: '99%', backgroundColor: '#3b82f6'}}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <div className={styles.progressInfo}>
                <span className={styles.progressTitle}>Placements</span>
                <span className={styles.progressPercentage}>100%</span>
              </div>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{width: '100%', backgroundColor: '#ef4444'}}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <div className={styles.progressInfo}>
                <span className={styles.progressTitle}>Certification Support</span>
                <span className={styles.progressPercentage}>99%</span>
              </div>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{width: '99%', backgroundColor: '#ec4899'}}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <div className={styles.progressInfo}>
                <span className={styles.progressTitle}>Instructor Effectiveness</span>
                <span className={styles.progressPercentage}>100%</span>
              </div>
              <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{width: '100%', backgroundColor: '#3b82f6'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* <Footer /> */}
    </>
    
  );
};

export default AboutUs;