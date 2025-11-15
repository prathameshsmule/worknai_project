import React from 'react';
import styles from '../styles/DotNetPage.module.css';

const DataEng = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
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

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <h1 className={styles.heading}>
              
              <span className={styles.dotNetText}>DATA</span>
              <span className={styles.developerText}>Engineering</span>
            </h1>

            <div className={styles.websiteLink}>
              <div className={styles.globeIcon}>🌐</div>
              <span>www.worknai.com</span>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            {/* Card */}
            <div className={styles.card}>
              <p className={styles.cardText}>
                Become a Data Pipeline Architect<br />
                 with Our End-to-End Data<br />
                Engineering Course
              </p>

              <div className={styles.stars}>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
                <span className={styles.star}>⭐</span>
              </div>

              <button className={styles.joinButton}>JOIN NOW</button>
            </div>

            {/* Image Section */}
            <div className={styles.imageSection}>
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

      {/* Background Decorations */}
      <div className={styles.purpleStripe1}></div>
      <div className={styles.purpleStripe2}></div>
      <div className={styles.purpleStripe3}></div>

      {/* New Section */}
      <div className={styles.newSection}>
        <div className={styles.newSectionContent}>
          {/* Left Content */}
          <div className={styles.newLeftContent}>
            <div className={styles.badge}>
              <span>💻 Hello Database Champs! 🚀</span>
            </div>

            <h2 className={styles.newHeading}>
              DATA Engineering
            </h2>

            <p className={styles.newDescription}>
             Build the backbone of modern data systems with our Data Engineering Training Course, designed to equip you with the skills to design, build, and manage scalable data pipelines and architectures. This hands-on program covers ETL processes, data warehousing, big data tools, cloud platforms, SQL, Python, Apache Spark, Kafka, and modern data lakes. Whether you’re a fresher or IT professional, this course prepares you for high-demand data engineering roles by providing practical knowledge of data workflows, storage systems, and real-world project execution
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.enrollButton}>
                Enroll Now →
              </button>
              <button className={styles.syllabusButton}>
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right Content - Info Box */}
          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>₹</span>
              <span className={styles.infoLabel}>Fees</span>
              <span className={styles.infoValue}>40000</span>
            </div>

            <div className={styles.infoDivider}></div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <span className={styles.infoLabel}>Duration</span>
              <span className={styles.infoValue}>3 - 4 Months</span>
            </div>

            <div className={styles.infoDivider}></div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <span className={styles.infoLabel}>Contact</span>
              <span className={styles.infoValue}>9890446612</span>
            </div>

            <div className={styles.infoDivider}></div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>💬</span>
              <span className={styles.infoLabel}>Whatsapp</span>
              <span className={styles.infoValueLink}>Link</span>
            </div>
          </div>
        </div>
      </div>

      {/* What you will learn Section */}
      <div className={styles.learnSection}>
        <div className={styles.learnContent}>
          {/* Left Side - Image */}
          <div className={styles.learnLeft}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                alt="Developer workspace"
                className={styles.learnImage}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.learnRight}>
            <h2 className={styles.learnTitle}>What you'll learn</h2>
            <p className={styles.learnSubtitle}>
             Build Scalable Data Infrastructure with Our Data Engineering Training
            </p>

            <h3 className={styles.skillsTitle}>Skills you'll gain</h3>

            <div className={styles.skillsGrid}>
              <div className={styles.skillsColumn}>
                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Understand the core principles of data engineering and data architecture
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                   Design and implement ETL/ELT pipelines using Python and SQL
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Work with relational and non-relational databases like MySQL, MongoDB, and Cassandra
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Use Apache Spark for distributed data processing
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Integrate and stream data using Apache Kafka and Flume
                  </p>
                </div>
              </div>

              <div className={styles.skillsColumn}>
                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Build and manage data warehouses and data lakes

                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                   Deploy solutions on cloud platforms like AWS, Azure, or GCP
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Apply data partitioning, indexing, and performance tuning
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                  Ensure data quality, lineage, and governance
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                   Execute real-world data engineering projects across industries
                  </p>
                </div>
              </div>
            </div>

            <button className={styles.enrollNowButton}>
              Enroll Now! →
            </button>
          </div>
        </div>
      </div>
      {/* What you will learn Section */}
      <div className={styles.learnSection}>
        <div className={styles.learnContent}>
          {/* Left Side - Image */}
          <div className={styles.learnLeft}>
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                alt="Developer workspace"
                className={styles.learnImage}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.learnRight}>
            <h2 className={styles.learnTitle}>What you'll learn</h2>
            <p className={styles.learnSubtitle}>
              Build Enterprise-Ready Full-Stack Applications<br />
              with the .NET Stack
            </p>

            <h3 className={styles.skillsTitle}>Skills you'll gain</h3>

            <div className={styles.skillsGrid}>
              <div className={styles.skillsColumn}>
                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Master full-stack development with C#, ASP.NET Core, and Angular/React
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Build responsive, component-driven single-page applications (SPAs)
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Develop robust backend services using MVC and Web API
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Perform database operations using Entity Framework and SQL Server
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Implement authentication, role-based authorization, and security protocols
                  </p>
                </div>
              </div>

              <div className={styles.skillsColumn}>
                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Manage state and data flow in modern frontend frameworks
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Consume and expose RESTful APIs for seamless integration
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Utilize Visual Studio and Azure for professional-grade development and deployment
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Follow industry best practices for clean code, testing, and debugging
                  </p>
                </div>

                <div className={styles.skillItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <p className={styles.skillText}>
                    Work on real-world projects to gain hands-on enterprise experience
                  </p>
                </div>
              </div>
            </div>

            <button className={styles.enrollNowButton}>
              Enroll Now! →
            </button>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className={styles.coursesSection}>
        <div className={styles.coursesContent}>
          <div className={styles.coursesHeader}>
            <h2 className={styles.coursesTitle}>
              <span className={styles.yourJourney}>Your Journey</span>{' '}
              <span className={styles.beginsHere}>Begins Here</span>
            </h2>
            <p className={styles.coursesSubtitle}>
              Explore More and Achieve More!
            </p>
          </div>

          <div className={styles.coursesGrid}>
            <div className={styles.coursesLeft}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Developer working"
                className={styles.coursesImage}
              />
            </div>

            <div className={styles.coursesRight}>
              <div className={styles.coursesList}>
                <details className={styles.courseItem} open>
                  <summary className={styles.courseSummary}>
                    <span>.NET</span>
                    <span className={styles.expandIcon}>−</span>
                  </summary>
                  <div className={styles.courseContent}>
                    <p>C# 6.0</p>
                    <p>ASP.NET (latest) Forms</p>
                    <p>ASP.NET MVC-CS</p>
                    <p>WebServices & WCF</p>
                    <p>WPF & Silverlight</p>
                    <p>LINQ</p>
                    <p>Entity Framework</p>
                    <p>M-NET Lite Project</p>
                    <p>Design Pattern</p>
                    <p>.NET Developer</p>
                  </div>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>C & C++</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Web Technologies</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Digital Marketing</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>New Courses</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>App Development</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Sharepoint</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Testing Tools</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Cloud Computing</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>

                <details className={styles.courseItem}>
                  <summary className={styles.courseSummary}>
                    <span>Salesforce</span>
                    <span className={styles.expandIcon}>+</span>
                  </summary>
                </details>
              </div>

              <button className={styles.exploreCoursesButton}>
                Explore Courses →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className={styles.certificationSection}>
        <div className={styles.certificationContent}>
          <div className={styles.certificationLeft}>
            <div className={styles.certificateCard}>
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=400&fit=crop"
                alt="Certificate of Achievement"
                className={styles.certificateImage}
              />
            </div>
          </div>

          <div className={styles.certificationRight}>
            <h2 className={styles.certificationTitle}>
              Get Certified and Boost<br />
              Your Career!
            </h2>
            <p className={styles.certificationDescription}>
              Enroll in our courses and earn industry-recognized<br />
              certificates to boost your skills and career!
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
      </div>
    </>
  );
};


export default DataEng;
