import React, { useState } from 'react';
import styles from '../styles/JobOpenings.module.css'
import Footer from './footer.jsx';

const JobOpenings = () => {
  const [activeCategory, setActiveCategory] = useState('Devops');

  const jobData = {
    Devops: [
      {
        id: 1,
        title: 'Azure Dot Net Full Stack Developer',
        description: 'Experienced in .NET best practices like MVC and dependency injection, with strong skills in C#, ASP.NET, SQL Server, and Visual Studio. Proficient in Azure services and accessibility tools like NVDA and JAWS. Knowledgeable in WCAG 2.1 and ADA standards, and effective in collaborating on accessibility-focused development solutions.'
      },
      {
        id: 2,
        title: '.NET and Azure API Developer (short NP only)',
        description: 'We are looking for a seasoned .NET and Azure API developer who also has DevOps expertise to join our dynamic team. Your role will involve working closely with a group of talented software developers to create new APIs and ensure the smooth functioning of existing ones within the Azure environment.'
      }
    ],
    Java: [
      {
        id: 1,
        title: 'Junior Java Developer',
        description: 'Looking for a Java Microservices Developer with 4-7 years\' experience for Bhubaneswar, Kolkata, or Pune. Must have strong skills in Java/J2EE, Spring Boot, Hibernate, AWS, and REST APIs. Experience with responsive web design, DB2, GitHub, and testing tools like JUnit or Selenium is essential. Strong communication skills required.'
      },
      {
        id: 2,
        title: 'Java Full Stack Developer',
        description: 'We\'re seeking an experienced Java Fullstack Developer with 5-8 years of hands-on experience in developing scalable and efficient software solutions. The ideal candidate will possess strong expertise in Java, Microservices, Kubernetes, SQL, PLSQL, Unix, Shell Scripting, Python, DevOps tools like GitHub, Jenkins, Maven, OpenShift, React, mat-ui, and Angular Power Platform (APCA). You\'ll play a crucial role in designing, developing, and deploying high-quality software applications.'
      },
      {
        id: 3,
        title: 'Back End Developer',
        description: 'We are seeking an experienced Back-End Engineer to join our dynamic team at a pivotal stage in our growth. In this role, you will design, develop, deploy, and maintain scalable, high-performance back-end systems that underpin our enterprise applications. You will drive key architectural decisions, embrace strategic technical initiatives, and mentor team members, ensuring robust code quality, exceptional performance, and overall system reliability.'
      }
    ],
    'Data Science': [
      {
        id: 1,
        title: 'Data Science',
        description: 'We believe in the power of digital to transform businesses for the better. Our global consulting firm combines creativity and innovative technology to deliver industry-leading digital solutions. Synechron\'s progressive technologies and optimization strategies span end-to-end Artificial Intelligence, Consulting, Digital, Cloud & DevOps, Data, and Software Engineering, servicing an array of noteworthy financial services and technology firms.'
      },
      {
        id: 2,
        title: 'Data Scientist',
        description: 'A Data Scientist is responsible for designing and implementing data-driven solutions to complex business problems. The role requires creativity and extensive experience in data analysis, statistical modeling, machine learning, and data visualization.'
      },
      {
        id: 3,
        title: 'Data Scientist',
        description: 'We are seeking a highly skilled Senior Machine Learning Engineer with expertise in Classical ML, LLM-based AI solutions, real-time ML processing, MLOps, and full-stack AI development. The ideal candidate will have experience building, optimizing, and deploying AI/ML models at scale, with a strong understanding of data-driven AI applications and cloud-based deployments.'
      }
    ]
  };

  const categories = ['Devops', 'Java', 'Data Science'];

  return (
    <>
    <div className={styles.jobOpeningsContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.mainTitle}>Job Openings</h1>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbHome}>Home</span>
          <span className={styles.breadcrumbSeparator}> › </span>
          <span className={styles.breadcrumbCurrent}>Job Openings</span>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.jobsSection}>
          <div className={styles.categoryHeader}>
            <h2>{activeCategory}</h2>
          </div>

          <div className={styles.jobsList}>
            {jobData[activeCategory].map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobImage}>
                  <div className={styles.hiringBadge}>
                    <div className={styles.badgeText1}>WE ARE</div>
                    <div className={styles.badgeText2}>HIRING</div>
                    <div className={styles.badgeText3}>JOIN OUR TEAM</div>
                  </div>
                </div>
                <div className={styles.jobContent}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default JobOpenings;