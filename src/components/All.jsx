import React from 'react';
import { Link } from 'react-router-dom';

function All() {
  return (
    <div>
      <h2>All Courses</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div className="card">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-Image-A-Comprehensive-Guide-On-Objects-Methods-and-Classes-In-JavaScript-768x286.webp" alt="JavaScript Basics" />
        <div className="card-content">
          <h3>A Comprehensive Guide On Objects, Methods, and Classes in JavaScript</h3>
          <p>By Jaishree Tomar - 18 Mar, 2024 - 7 Min Read</p>
          <Link to="/javascript-basics">Read More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp" alt="Full Stack Development" />
        <div className="card-content">
          <h3>Full Stack Developer Roadmap:</h3>
          <h3>A complete Guide [2024]</h3>
          <p>By Meghana D - 19 Mar, 2024 - 6 Min Read</p>
          <Link to="/full-stack-development">Read More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp" alt="Data Science" />
        <div className="card-content">
          <h3>Top 10 High Paying Non-Coding</h3>
          <h3>Jobs in Data Science in 2024</h3>
          <p>By Isha Sharma  - 23 Jul, 2024 - 6 Min Read</p>
          <Link to="/data-science">Read More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp" alt="Cyber Security" />
        <div className="card-content">
          <h3>Non-Coding Jobs in Cybersecurity:</h3>
          <h3>A Comprehensive Guide</h3>
          <p>By Jaishree Tomar - 26 Mar, 2024 - 4 Min Read</p>
          <Link to="/cyber-security">Read More</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Career-Opportunities-for-DevOps-Engineers.jpg" alt="Career" />
        <div className="card-content">
          <h3>Career Opportunities for Devops Engineers</h3>
          <h3>A Comprehensive Guide</h3>
          <p>By Lukesh S - 29 Jul, 2024 - 5 Min Read</p>
          <Link to="/career">Read More</Link>
        </div>
      </div>

      </div>
    </div>
  );
}

export default All;
