// Importing components
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
import Footer from "./components/Footer.jsx";


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState("about");

  return (
    <>
      <Header />
      <Navbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <p id="content">
        {activeComponent === "about" && <Aboutme />}
        {activeComponent === "portfolio" && <Portfolio />}
        {activeComponent === "contact" && <Contact />}
        {activeComponent === "resume" && <Resume />}
      </p>
      
      <footer>
      <Footer />
      </footer>
    </>
  );
}

export default App;