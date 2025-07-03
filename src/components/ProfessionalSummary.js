import React from "react";
import "../styles/ProfessionalSummary.css";

const ProfessionalSummary = () => {
  return (
    <section className="professional-summary">
      <h2>Professional Summary</h2>
      <p>
       Software Engineer with 2 years of experience in backend development and data engineering. Skilled in building scalable data pipelines on Azure and Databricks. Passionate about Data Science, AI, and real-world problem solving. Currently exploring Generative AI with Mosaic AI and Azure AI Studio to integrate LLMs into enterprise workflows.
      </p>

      <ul>
        <li>🌩️ <strong>Cloud & Azure:</strong> Built robust data pipelines using Azure Data Factory (ADF) and Azure Data Lake Storage (ADLS) to ingest data from multiple sources.</li>
        <li>🏗️ <strong>Medallion Architecture Implementation:</strong>Structured data pipelines using RAW, TRANSFORMED, and PROD layers in Delta Lake on Databricks to manage raw ingestion, cleansing, and business-curated datasets. Ensured data traceability, reusability, and governed access across analytics use cases.</li>
        <li>⚙️ <strong>Databricks & PySpark:</strong>Built scalable ETL pipelines with performance optimizations like broadcast joins, caching, and partitioning; used widgets and ADF parameters for dynamic, reusable workflows.</li>
        <li>💻 <strong> Backend Development:</strong> Developed scalable RESTful APIs for internal employee management applications, working on a Linux environment with GitLab for version control</li>
        <li>🔗 <strong> API & Business Logic Implementation:</strong>Translated business requirements into functional backend logic using JavaScript/Node.js & Express js ensuring robust data validation, error handling, and service-layer architecture.</li>
        <li>🗄️ <strong> Database Integration:</strong> Designed schemas, modeled relational data, and created views to support backend CRUD operations and reporting across internal applications.</li>
        <li>📈 <strong> Collaboration & Mentorship:</strong>  Collaborated with team members to ensure smooth task completion and project delivery, while mentoring juniors through regular KT sessions and hands-on support.</li>
        <li>🛠️ <strong>Technical Communication:</strong> Proficient in creating architecture diagrams (PlantUML, Draw.io), and writing clear functional & technical documentation.</li>
        
      </ul>

    </section>
  );
};

export default ProfessionalSummary;
