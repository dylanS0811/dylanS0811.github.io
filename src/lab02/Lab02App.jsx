// src/lab02/Lab02App.jsx
import React from 'react';
import styles from './lab02.module.css';

export default function Lab02App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Haining Song</h1>
      <p className={styles.description}>Just a programmer who enjoys playing piano and singing.</p>

      <h2 className={styles.sectionTitle}>Current MIU Courses</h2>
      <ul className={styles.list}>
        <li>CS500 STC</li>
        <li>CS390 FPP</li>
        <li>CS401 MPP</li>
        <li>CS472 WAP</li>
      </ul>

      <h2 className={styles.sectionTitle}>My Favorite Movies and Series</h2>
      <ol className={styles.list}>
        <li>
          <a href="https://www.imdb.com/title/tt0903747/" target="_blank" rel="noreferrer">
            Breaking Bad
          </a>
        </li>
        <li>The Social Network</li>
        <li>Black Mirror</li>
      </ol>

      <h2 className={styles.sectionTitle}>My Mood</h2>
      <div className={styles.moodImages}>
        <div className={styles.moodItem}>
          <img src="/images/happy.png" alt="Happy" />
          <p className={`${styles.moodLabel} ${styles.happy}`}>Happy</p>
        </div>
        <div className={styles.moodItem}>
          <img src="/images/sad.png" alt="Sad" />
          <p className={`${styles.moodLabel} ${styles.sad}`}>Sad</p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Fun Fact About My Neighbors</h2>
      <p className={styles.description}>
        <b>Furkan</b> is really good at the game :)
      </p>

      <div className={styles.validatorWrapper}>
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
