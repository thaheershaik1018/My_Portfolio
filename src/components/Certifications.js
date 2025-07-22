import React from 'react';
import '../styles/Certifications.css';

const certifications = [
  {
    title: "Genrative AI Fundamentals",
    date: "07/2027",
    credential: "https://credentials.databricks.com/730e8139-b9eb-45fb-981b-a1edf3c243d8#acc.KCw5ToHv",
  },
  
  {
    title: "Microsoft Azure Fundamentals: Describe Azure architecture and services",
    date: "",
    credential: "https://learn.microsoft.com/api/achievements/share/en-us/ThaheerShaik-7702/3A4U3K9H?sharingId=62D1F2944CBE5178",
  },

  {
    title: "Introduction To Machine Learning Concepts",
    date: "",
    credential: "https://learn.microsoft.com/api/achievements/share/en-us/ThaheerShaik-7702/FMG98JPX?sharingId=62D1F2944CBE5178",
  },
  
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certifications / Courses / Badges</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <strong>{cert.title}</strong> {cert.date && <span className="date">({cert.date})</span>}
            <br />
            <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="cert-link">
              View Credential
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
