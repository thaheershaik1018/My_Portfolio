import React from "react";
import "../styles/EmploymentHistory.css";

const employmentData = [
  {
    
    role: "TDS 2 - Decision Scientist",
    company: "Mu Sigma, Bangalore",
    duration: " Mar 2025 - Present",
    responsibilities: [
      "Developed a predictive ML model using Python to estimate EUR for oil & gas wells, leveraging XGBoost, Random Forest, and spatial features via Geopy.",  
      "Deployed a Flask-based web app with Docker and Heroku, enabling real-time predictions through an interactive UI.",   
      "Automated CI/CD with GitLab, reducing EUR estimation from months to minutes through seamless updates and containerized delivery."
]
  },
  {
    role: "TDS 2 - Data Engineer",
    company: "Mu Sigma, Bangalore",
    duration: " Sep 2024 - Mar 2025",
    responsibilities: [
      "Worked as a Data Engineer for one of the world’s largest petroleum refinery clients, responsible for ingesting data from multiple sources using Azure Data Factory.",
      "Designed and developed transformation pipelines using Azure Databricks and implemented the medallion architecture to organize and store data efficiently in centralized data layers",
      "Hands-on experience with data pipeline orchestration, notebook development, and integration with Delta Lake for scalable and reliable analytics",
    ]
  },
  {
    role: "TDS 1 - Backend Developer",
    company: "Mu Sigma, Bangalore",
    duration: "Nov 2023 - Aug 2024",
    responsibilities: [
   "Worked as a Backend Developer on internal Biz Apps (Employee Management), building RESTful APIs using Node.js and JavaScript.",
"Designed the database schema in PostgreSQL, created views and stored procedures to support business logic.",
"Tested APIs with Postman and used GitLab for version control, collaborating with frontend and QA teams for smooth delivery."
    ]
  },
  
  {
    role: "Trainee Decision Scientist Intern",
    company: "Mu Sigma, Bangalore",
    duration: "July 2023 - Oct 2023",
    responsibilities: [
     "Built predictive models for customer churn using ML algorithms like Random Forest and SVM, following thorough data cleaning, preprocessing, and feature engineering.",
    "Evaluated model performance with AUC and ROC metrics, and collaborated with the team to derive actionable business insights."

    ]
  }
];

const projectsData = [
   {
    name: "Enhancing Oil & Gas Well Forecasting with EUR Prediction",
    company: "Petroleum Refinery Client",
    period: "Mar 2025 - present",
    details: [
   "Designed and implemented a predictive model using Python and ML algorithms to forecast Estimated Ultimate Recovery (EUR) for oil and gas wells.",
"Performed data preprocessing, spatial feature enrichment using Geopy, and applied thresholds to key features for better segmentation.",
"Trained and evaluated multiple regression models including XGBoost, Random Forest, and Linear Regression using MSE and other performance metrics.",
"Built a Flask-based web application to allow users to interact with the model through a simple interface for predictions.",
"Containerized the app with Docker and deployed it to Heroku via GitLab CI/CD, enabling automated builds and seamless updates.",
"Transformed the EUR estimation process from a manual months-long effort to an automated solution delivering results in minutes."
    ]
  },
  {
    name: "Data Subscription Usage Analysis",
    company: "Petroleum Refinery Client",
    period: "Sep 2024 - Mar 2025",
    details: [
    "Gained domain knowledge of the oil and gas industry while working on large-scale data engineering projects.",
    "Hands-on experience with Azure Data Factory (ADF) for data ingestion and orchestration.",
    "Worked with Azure Data Lake Storage (ADLS) for centralized, scalable storage of raw and processed data.",
    "Built and maintained data transformation workflows in Azure Databricks using PySpark.",
    "Optimized transformations using techniques such as broadcast joins, caching, and shuffle partition tuning.",
    "Implemented scalable and reusable pipelines by parameterizing notebooks and ADF pipelines.",
    "Worked with Service Principals and Microsoft Entra ID (formerly Azure AD) for secure access and authentication.",
    "Designed and implemented the Medallion Architecture (Bronze, Silver, Gold) for structured data processing.",
    "Collaborated on performance tuning and best practices for working with large datasets in Delta Lake and Data Lake environments."
    ]
  },
  {
    name: "BIZ APP Migration – Internal Client",
    period: "Nov 2023 – Aug 2024",
    details: [
    "Worked as a Backend Developer for building internal Biz Apps (Employee Management Applications).",
    "Developed RESTful APIs using Node.js and JavaScript to handle business logic and employee-related operations.",
    "Designed and implemented the database schema and performed data modeling in PostgreSQL.",
    "Created views and stored procedures based on application requirements.",
    "Tested APIs using Postman to ensure proper request/response flows and error handling.",
    "Used GitLab for version control, code management, and collaboration.",
    "Collaborated with frontend and QA teams to support integration and ensure end-to-end functionality."
    ]
  }
  ,
  {
    name: "Customer Chrun Prediction - Intern Project",
    period: "July 2023- Oct 2023",
    details: [
    "Conducted comprehensive data cleaning and preprocessing on a customer churn dataset sourced from the organization during internship, ensuring data integrity and reliability for analysis.",
    "Employed advanced feature engineering techniques to extract meaningful insights from the dataset, enhancing model performance and predictive accuracy.",
    "Utilized various machine learning algorithms including Random Forest, Logistic Regression, and Support Vector Machines (SVM) to build predictive models for customer churn prediction.",
    "Evaluated model performance using industry-standard metrics such as Area Under the Curve (AUC) and Receiver Operating Characteristic (ROC) curves to assess model effectiveness and deployment readiness.",
    "Collaborated with team members to analyze model outputs and translate findings into actionable recommendations for business improvements."
    ]
  }
  
];

const EmploymentHistory = () => {
  return (
    <section className="employment-history-section">
      <h2>Employment History</h2>
      <p className="employment-note">All roles held at Mu Sigma, Bangalore from July 2023 to Present</p>
      <div className="timeline">
        {employmentData.map(({ role, company, duration, responsibilities }, idx) => (
          <div className="timeline-entry" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{role}</h3>
              <p className="duration">{duration}</p>
              <ul>
                {responsibilities.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2>Key Projects</h2>
      <h4>Have worked on Mutiple Projects as Decision Scientist, Data Engineer, Backend Developer .</h4>
      {projectsData.map(({ name, company, period, details }, idx) => (
        <div className="project" key={idx}>
          <h4 className="project-name">{name}</h4>
          {company && <p className="project-company">{company}</p>}
          {period && <p className="project-period">{period}</p>}
          <ul>
            {details.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EmploymentHistory;
