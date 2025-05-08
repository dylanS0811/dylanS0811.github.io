// src/lab07/Lab07App.jsx
import React, { useEffect } from 'react';
import styles from './lab07.module.css';

import './q1-constructor.js';
import './q2-class.js';
import './q3-movie-manager.js';

export default function Lab07App() {
  useEffect(() => {
    window.setOutput = (msg) => {
      document.getElementById('output').textContent = msg;
    };
  }, []);

  return (
    <>
      <header className={styles.header}>Lab 7 — Classes</header>
      <div className={styles.container}>
        <button onClick={() => window.runQ1()}>Run Question 1 (Constructor)</button>
        <button onClick={() => window.runQ2()}>Run Question 2 (Class)</button>
        <button onClick={() => window.runQ3()}>Run Question 3 (Movie Manager)</button>
        <pre id="output" className={styles.output}></pre>
      </div>
    </>
  );
}
