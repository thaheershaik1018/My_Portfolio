import React from "react";
import "../styles/Skills.css";

const skillsData = [
  {
    category: "Cloud & AI Technologies",
    skills: [
      "Azure Data Factory (ADF)",
      "Azure Storage Account",
      "Azure SQL",
      "Azure Data Lake Storage (ADLS)",
      "Azure Functions",
      "Databricks SQL",
      "Azure Databricks",
      "Azure Devops",
      "Azure Entra ID",
      "Service Princple",
      "Azure Virtual Machines (Azure VM's)",
      "Delta Lake",
      "Azure Key Vault",
      "Databricks Mosiac Ai",
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      
    ],
  },
  {
    category: "Development & Tools",
    skills: [
      "Python",
      "Pyspark",
      "JavaScript",
      "HTML / CSS",
      "SQL",
      "Node js",
      "Postman",
      "Express js",
      "Pandas",
      "Git"
    ],
  },
  {
    category: "Soft Skills & Leadership",
    skills: [
  
      "Team Management",
      "Mentor Ship",
      "Ability to Multitask",
      "Fast Learner",
      "Communication Skills",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills & Technologies</h2>
      {skillsData.map(({ category, skills }) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <ul className="skills-list">
            {skills.map((skill, idx) => (
              <li key={idx} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
