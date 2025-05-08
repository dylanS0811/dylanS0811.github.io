// src/lab02/Lab02App.jsx
import React from 'react';
import './lab02.css';

export default function Lab02App() {
  return (
    <div className="container">
      <h1>Haining Song</h1>
      <p>Just a programmer who enjoys playing piano and singing.</p>

      <h2>Current MIU Courses</h2>
      <ul>
        <li>CS500 STC</li>
        <li>CS390 FPP</li>
        <li>CS401 MPP</li>
        <li>CS472 WAP</li>
      </ul>

      <h2>My Favorite Movies and Series</h2>
      <ol>
        <li>
          <a href="https://www.imdb.com/title/tt0903747/" target="_blank" rel="noreferrer">
            Breaking Bad
          </a>
        </li>
        <li>The Social Network</li>
        <li>Black Mirror</li>
      </ol>

      <h2>My Mood</h2>
      <div className="mood-images">
        <div className="mood-item">
          <img src="/images/happy.png" alt="Happy" />
          <p className="mood-label happy">Happy</p>
        </div>
        <div className="mood-item">
          <img src="/images/sad.png" alt="Sad" />
          <p className="mood-label sad">Sad</p>
        </div>
      </div>

      <h2>Fun Fact About My Neighbors</h2>
      <p>
        <b>Furkan</b> is really good at the game :)
      </p>

      <div className="validator-wrapper">
        <a
          href="https://validator.w3.org/check?url=https://dylans0811.github.io/lab02/aboutme.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/w3c-html5-logo.png" alt="Valid HTML!" />
        </a>
        <a
          href="https://jigsaw.w3.org/css-validator/validator?uri=https://dylans0811.github.io/lab02/styleme.css"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/w3c-css-logo.png" alt="Valid CSS!" />
        </a>
      </div>
    </div>
  );
}
