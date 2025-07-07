// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shaik Mohammad Thaheer</p>
      <p>
       Built rapidly with ❤️ using React and AI Tools for Development |{" "}
        <a
          href="https://github.com/thaheershaik1018/My_Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
