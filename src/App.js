// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import ProfessionalSummary from './components/ProfessionalSummary';
// import Skills from './components/skills';
// import EmploymentHistory from './components/EmploymentHistory';
// import Education from './components/Education';
// import Certifications from './components/Certifications';

// function App() {
//   return (
//     <div className="App">
//      <Header/>
//      <ProfessionalSummary/>
//      <Skills/>
//      <EmploymentHistory/>
//      <Education/>
//      <Certifications/>
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import "./App.css";
import EmploymentHistory from "./components/EmploymentHistory";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import { useState } from "react";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed (e.g., 2.5 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    // Initialize AOS only after the main content is loaded
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: true, // Animations happen only once
      });
    }
  }, [isLoading]); // Re-run this effect when isLoading changes

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Navbar />
      <section id="home" data-aos="fade-in">
        <Header />
      </section>
      <section id="professional-summary" data-aos="fade-up">
        <ProfessionalSummary />
  
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="employment-history" data-aos="fade-up">
        <EmploymentHistory />
      </section>
      <section id="education" data-aos="fade-up">
        <Education />
      </section>
      <section id="certifications" data-aos="fade-up">
        <Certifications />
      </section>
      <section data-aos="fade-up">
        <Footer />
      </section>
    </div>
  );
}

export default App;