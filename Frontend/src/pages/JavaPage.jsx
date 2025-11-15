import React from 'react';
import styles from '../styles/DotNetPage.module.css';

const JavaDev = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} aria-label="Worknai Softech logo">
          <div className={styles.logoIcon} aria-hidden="true">
            <div className={styles.logoCircle}>
              <div className={styles.logoLeft}></div>
              <div className={styles.logoRight}></div>
            </div>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoNewgen}>WORKNAI</span>
            <span className={styles.logoSoftech}>SOFTECH</span>
            <div className={styles.logoUnderline}></div>
          </div>
        </div>

        {/* Main */}
        <div className={styles.mainContent}>
          {/* Left */}
          <div className={styles.leftSection}>
            <h1 className={styles.heading}>
              <span className={styles.becomeText}>Become a</span>
              <span className={styles.dotNetText}>JAVA FullStack</span>
              <span className={styles.developerText}>Developer</span>
            </h1>

            <a
              className={styles.websiteLink}
              href="https://www.worknai.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit worknai.com"
            >
              <div className={styles.globeIcon} aria-hidden="true">🌐</div>
              <span>www.worknai.com</span>
            </a>
          </div>

          {/* Right */}
          <div className={styles.rightSection}>
            <div className={styles.card} role="region" aria-label="Course highlight">
              <p className={styles.cardText}>
                Become a Full-Stack<br />
                Pro with Our JAVA FullStack<br />
                Developer Course
              </p>

              <div className={styles.stars} aria-label="5 star rating">
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
              </div>

              <button className={styles.joinButton} type="button">JOIN NOW</button>
            </div>

            <div className={styles.imageSection} aria-hidden="true">
              <div className={styles.laptopImage}>
                <div className={styles.screen}>
                  <div className={styles.codeLines}>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}></div>
                  </div>
                </div>
                <div className={styles.keyboard}></div>
              </div>
              <div className={styles.hands}>
                <div className={styles.hand}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative stripes */}
      <div className={styles.purpleStripe1} aria-hidden="true"></div>
      <div className={styles.purpleStripe2} aria-hidden="true"></div>
      <div className={styles.purpleStripe3} aria-hidden="true"></div>

      {/* Intro / Hero 2 */}
      <section className={styles.newSection}>
        <div className={styles.newSectionContent}>
          <div className={styles.newLeftContent}>
            <div className={styles.badge}><span>💻 Hello JAVA Champs! 🚀</span></div>
            <h2 className={styles.newHeading}>JAVA Full Stack Developer</h2>
            <p className={styles.newDescription}>
              Kickstart your career in web development with our Java Full Stack Developer Course, designed to equip
              you with the skills to build robust, end-to-end applications using Core Java, Spring Boot, Hibernate,
              Angular/React, and MySQL. Ideal for students, freshers, and professionals aiming to become industry-ready.
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.enrollButton} type="button">Enroll Now →</button>
              <button className={styles.syllabusButton} type="button">Download Syllabus</button>
            </div>
          </div>

          <aside className={styles.infoBox} aria-label="Course facts">
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>₹</span>
              <span className={styles.infoLabel}>Fees</span>
              <span className={styles.infoValue}>40,000</span>
            </div>
            <div className={styles.infoDivider}></div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <span className={styles.infoLabel}>Duration</span>
              <span className={styles.infoValue}>3 – 4 Months</span>
            </div>
            <div className={styles.infoDivider}></div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <span className={styles.infoLabel}>Contact</span>
              <a href="tel:+919890446612" className={styles.infoValue}>9890446612</a>
            </div>
            <div className={styles.infoDivider}></div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>💬</span>
              <span className={styles.infoLabel}>WhatsApp</span>
              <a
                className={styles.infoValueLink}
                href="https://wa.me/919890446612"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open chat
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Learn (Java) */}
      <section className={styles.learnSection}>
        <div className={styles.learnContent}>
          <div className={styles.learnLeft}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                alt="Developer workspace"
                className={styles.learnImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.learnRight}>
            <h2 className={styles.learnTitle}>What you’ll learn</h2>
            <p className={styles.learnSubtitle}>
              Build Robust and Enterprise-Grade Full-Stack Applications with the Java Stack
            </p>

            <h3 className={styles.skillsTitle}>Skills you’ll gain</h3>

            <div className={styles.skillsGrid}>
              <div className={styles.skillsColumn}>
                {[
                  'Master end-to-end web development using Java, Spring Boot, and Angular/React',
                  'Build responsive and dynamic single-page applications (SPAs)',
                  'Apply OOP principles with Core Java',
                  'Develop and consume RESTful APIs with Spring Boot',
                  'Use Hibernate for ORM and seamless database interactions'
                ].map((t, i) => (
                  <div className={styles.skillItem} key={`j1-${i}`}>
                    <span className={styles.checkIcon}>✓</span>
                    <p className={styles.skillText}>{t}</p>
                  </div>
                ))}
              </div>

              <div className={styles.skillsColumn}>
                {[
                  'Manage relational data using MySQL or PostgreSQL',
                  'Implement DI, data binding, and MVC architecture',
                  'Handle authentication, authorization, and sessions',
                  'Deploy full-stack apps on cloud platforms',
                  'Build real-world projects with enterprise practices'
                ].map((t, i) => (
                  <div className={styles.skillItem} key={`j2-${i}`}>
                    <span className={styles.checkIcon}>✓</span>
                    <p className={styles.skillText}>{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.enrollNowButton} type="button">Enroll Now! →</button>
          </div>
        </div>
      </section>

      {/* Learn (.NET) – kept for reuse, now responsive */}
      <section className={styles.learnSection}>
        <div className={styles.learnContent}>
          <div className={styles.learnLeft}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                alt="Developer workspace"
                className={styles.learnImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.learnRight}>
            <h2 className={styles.learnTitle}>What you’ll learn</h2>
            <p className={styles.learnSubtitle}>
              Build Enterprise-Ready Full-Stack Applications<br />with the .NET Stack
            </p>

            <h3 className={styles.skillsTitle}>Skills you’ll gain</h3>

            <div className={styles.skillsGrid}>
              <div className={styles.skillsColumn}>
                {[
                  'C#, ASP.NET Core, and Angular/React full-stack',
                  'Component-driven SPAs',
                  'Backend services with MVC & Web API',
                  'Entity Framework & SQL Server',
                  'Auth, RBAC, and security protocols'
                ].map((t, i) => (
                  <div className={styles.skillItem} key={`n1-${i}`}>
                    <span className={styles.checkIcon}>✓</span>
                    <p className={styles.skillText}>{t}</p>
                  </div>
                ))}
              </div>

              <div className={styles.skillsColumn}>
                {[
                  'State management & data flow',
                  'Consume/expose RESTful APIs',
                  'Visual Studio & Azure deployment',
                  'Best practices: clean code, testing, debugging',
                  'Hands-on enterprise projects'
                ].map((t, i) => (
                  <div className={styles.skillItem} key={`n2-${i}`}>
                    <span className={styles.checkIcon}>✓</span>
                    <p className={styles.skillText}>{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.enrollNowButton} type="button">Enroll Now! →</button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesContent}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>
              <span className={styles.yourJourney}>Your Journey</span>{' '}
              <span className={styles.beginsHere}>Begins Here</span>
            </h2>
            <p className={styles.coursesSubtitle}>Explore More and Achieve More!</p>
          </div>

          <div className={styles.coursesGrid}>
            <div className={styles.coursesLeft}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Developer working"
                className={styles.coursesImage}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles.coursesRight}>
              <div className={styles.coursesList}>
                <details className={styles.courseItem} open>
                  <summary className={styles.courseSummary}>
                    <span>.NET</span>
                    <span className={styles.expandIcon} aria-hidden="true">−</span>
                  </summary>
                  <div className={styles.courseContent}>
                    {['C# 6.0', 'ASP.NET Forms', 'ASP.NET MVC-CS', 'WebServices & WCF', 'WPF & Silverlight', 'LINQ', 'Entity Framework', 'M-NET Lite Project', 'Design Pattern', '.NET Developer'].map((x) => (
                      <p key={x}>{x}</p>
                    ))}
                  </div>
                </details>

                {[
                  'C & C++',
                  'Web Technologies',
                  'Digital Marketing',
                  'New Courses',
                  'App Development',
                  'Sharepoint',
                  'Testing Tools',
                  'Cloud Computing',
                  'Salesforce'
                ].map((label) => (
                  <details className={styles.courseItem} key={label}>
                    <summary className={styles.courseSummary}>
                      <span>{label}</span>
                      <span className={styles.expandIcon} aria-hidden="true">+</span>
                    </summary>
                  </details>
                ))}
              </div>

              <button className={styles.exploreCoursesButton} type="button">Explore Courses →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className={styles.certificationSection}>
        <div className={styles.certificationContent}>
          <div className={styles.certificationLeft}>
            <div className={styles.certificateCard}>
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=400&fit=crop"
                alt="Certificate of Achievement"
                className={styles.certificateImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={styles.certificationRight}>
            <h2 className={styles.certificationTitle}>
              Get Certified and Boost<br />Your Career!
            </h2>
            <p className={styles.certificationDescription}>
              Enroll in our courses and earn industry-recognized certificates to boost your skills and career!
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>🏆</div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>3K+</div>
                  <div className={styles.statLabel}>Got Hired</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>👥</div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>10K+</div>
                  <div className={styles.statLabel}>Enrolled</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>📚</div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>Industry Relevant</div>
                  <div className={styles.statLabel}>Curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JavaDev;
