import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Jennifer Savino</h1>
        <nav>
          <Link to="/" className="active">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <footer>
        <div>
          <a href="https://github.com/jsavino26">GitHub</a>
          <a href="https://www.linkedin.com/in/jennifer-savino-29344b161">LinkedIn</a>
          <a href="https://stackoverflow.com/users/yourid">Stack Overflow</a>
        </div>
        <p>&copy; 2025 Savino</p>
      </footer>
    </Router>
  );
}

export default App;
