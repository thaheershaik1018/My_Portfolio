import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="name">Shaik Mohammad Thaheer</h1>
        <h3 className="title">CLOUD / AZURE / ETL & ANALYTICS - DATA ENGINEER</h3>

        <p className="contact">
          📍 Bangalore | 📞 +91 8639472276 | 📧{" "}
          <a href="mailto:shaikmohammadthaheer@gmail.com" className="link">
            shaikmohammadthaheer@gmail.com
          </a>
        </p>

        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/shaik-mohammad-thaheer-bb93a5222/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/shaik.jpeg`}
        alt="Profile"
        className="profile-pic"
      />
    </header>
  );
};

export default Header;
