import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <header>
        <h1>Haining Song</h1>
      </header>

      <div className="container">
        <img src="/images/myphoto.jpg" alt="My Photo" />
        <h2>Assignments</h2>
        <ul>
          <li>Day 1 — HTML</li>
          <li>
            <Link to="/lab02">Day 2 — CSS</Link>
          </li>
          <li>
            <Link to="/lab03">Day 3 — JS</Link>
          </li>
          <li>
            <Link to="/lab04">Day 4 — Execution Context</Link>
          </li>
          <li>
            <Link to="/lab05">Day 5 — callcontext</Link>
          </li>
          <li>
            <Link to="/lab06">Day 6 — Constructor Function</Link>
          </li>
          <li>
            <Link to="/lab07">Day 7 — Classes</Link>
          </li>
          <li>
            <Link to="/lab08">Day 8 — Asynchronous Programming</Link>
          </li>
          <li>
            <Link to="/lab09">Day 9 — React</Link>
          </li>
          <li>
            <Link to="/lab10">Day 10 — Communication</Link>
          </li>
        </ul>
      </div>

      <footer>
        <div className="footer-content">
          <span>&copy; 2025 Haining Song. All rights reserved.</span>
          <a href="https://validator.w3.org/check?url=https://dylans0811.github.io/">
            <img
              src="/images/w3c-html5-logo.png"
              alt="HTML Validator"
              className="validator-inline"
            />
          </a>
          <a href="https://jigsaw.w3.org/css-validator/validator?uri=https://dylans0811.github.io/index-style.css">
            <img src="/images/w3c-css-logo.png" alt="CSS Validator" className="validator-inline" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Homepage;
