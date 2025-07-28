import React from "react";
import "../styles/ProfessionalSummary.css";

const ProfessionalSummary = () => {
  return (
    <section className="professional-summary">
      <h2>Professional Summary</h2>
      <p>
       Engineer with 2 years of experience and a strong passion for learning emerging technologies and solving real-world problems. Continuously upskilling and exploring diverse tools to broaden technical expertise. Focused on applying innovative solutions to practical challenges, currently exploring Generative AI and integrating LLMs into enterprise workflows
      </p>

      <ul>
       <li>🌩️ <strong>Cloud & Azure:</strong> Built robust data pipelines using Azure Data Factory (ADF) and Azure Data Lake Storage (ADLS) to ingest data from multiple sources.</li>
      <li>🏗️ <strong>Medallion Architecture Implementation:</strong> Structured data pipelines using RAW, TRANSFORMED, and PROD layers in Delta Lake on Databricks to manage raw ingestion, cleansing, and business-curated datasets. Ensured data traceability, reusability, and governed access across analytics use cases.</li>
      <li>⚙️ <strong>Databricks & PySpark:</strong> Built scalable ETL pipelines with performance optimizations like broadcast joins, caching, and partitioning; used widgets and ADF parameters for dynamic, reusable workflows.</li>
      <li>🧠 <strong>Machine Learning & Forecasting:</strong> Designed and deployed a predictive model using Python to estimate EUR (Estimated Ultimate Recovery) for oil & gas wells. Integrated spatial enrichment using Geopy and evaluated models like XGBoost and Random Forest using MSE and other metrics.</li>
      <li>🚀 <strong>ML Deployment:</strong> Developed a Flask-based prediction app, containerized it with Docker, and deployed it to Heroku via GitLab CI/CD—automating updates and enabling real-time predictions through a web interface.</li>
      <li>💻 <strong>Backend Development:</strong> Developed scalable RESTful APIs for internal employee management applications, working on a Linux environment with GitLab for version control.</li>
      <li>🔗 <strong>API & Business Logic Implementation:</strong> Translated business requirements into functional backend logic using JavaScript/Node.js & Express.js, ensuring robust data validation, error handling, and service-layer architecture.</li>
      <li>🗄️ <strong>Database Integration:</strong> Designed schemas, modeled relational data, and created views to support backend CRUD operations and reporting across internal applications.</li>
      <li>📈 <strong>Collaboration & Mentorship:</strong> Collaborated with team members to ensure smooth task completion and project delivery, while mentoring juniors through regular KT sessions and hands-on support.</li>
      <li>🛠️ <strong>Technical Communication:</strong> Proficient in creating architecture diagrams (PlantUML, Draw.io), and writing clear functional & technical documentation.</li>  
      </ul>

    </section>
  );
};

export default ProfessionalSummary;
