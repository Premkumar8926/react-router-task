import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';

// Import components for each route
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import JavaScriptBasics from './components/JavaScriptBasics';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GUVI Courses</h1>
        </header>
        <nav className="App-nav">
  <ul>
    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>All</NavLink></li>
    <li><NavLink to="/full-stack-development" className={({ isActive }) => isActive ? 'active' : ''}>Full Stack Development</NavLink></li>
    <li><NavLink to="/data-science" className={({ isActive }) => isActive ? 'active' : ''}>Data Science</NavLink></li>
    <li><NavLink to="/cyber-security" className={({ isActive }) => isActive ? 'active' : ''}>Cyber Security</NavLink></li>
    <li><NavLink to="/javascript-basics" className={({ isActive }) => isActive ? 'active' : ''}>Javascript Basics</NavLink></li>
    <li><NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink></li>
  </ul>
</nav>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="/javascript-basics" element={<JavaScriptBasics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;