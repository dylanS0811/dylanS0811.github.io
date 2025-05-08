// src/lab08/Lab08App.jsx
import React, { useState } from 'react';
import styles from './lab08.module.css';

export default function Lab08App() {
  const [output, setOutput] = useState([]);
  const [isMeditating, setIsMeditating] = useState(false);
  const [btn2Disabled, setBtn2Disabled] = useState(false);
  const [btn3Disabled, setBtn3Disabled] = useState(false);

  const log = (msg) => {
    setOutput((prev) => [...prev, msg]);
  };

  const clearOutput = () => setOutput([]);

  const runExercise1 = () => {
    if (isMeditating) return;

    setIsMeditating(true);
    setBtn2Disabled(true);
    setBtn3Disabled(true);
    clearOutput();

    let seconds = 5;
    log('Start meditation');

    const interval = setInterval(() => {
      log(seconds--);
      if (seconds === 0) {
        clearInterval(interval);
        log('Jay Guru Dev');
        setIsMeditating(false);
        setBtn2Disabled(false);
        setBtn3Disabled(false);
      }
    }, 1000);
  };

  const isPrime = (n) => {
    return new Promise((resolve, reject) => {
      if (n <= 1) return reject({ prime: false });
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return reject({ prime: false });
      }
      resolve({ prime: true });
    });
  };

  const runExercise2 = async () => {
    if (isMeditating || btn2Disabled) return;

    setBtn2Disabled(true);
    clearOutput();
    log('start');
    try {
      const result = await isPrime(7);
      log(JSON.stringify(result));
    } catch (err) {
      log('Error: ' + JSON.stringify(err));
    }
    log('end');
    setBtn2Disabled(false);
  };

  const runExercise3 = async () => {
    if (isMeditating || btn3Disabled) return;

    setBtn3Disabled(true);
    clearOutput();
    try {
      const res = await fetch('https://dummyjson.com/recipes');
      const data = await res.json();
      data.recipes.forEach((recipe) => log(recipe.name));
    } catch (err) {
      log('Fetch error: ' + err.message);
    }
    setBtn3Disabled(false);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>Lab 8 — Timers, Promises, Async & Await</header>
      <div className={styles.container}>
        <button onClick={runExercise1} disabled={isMeditating}>
          Run Exercise 1 (Meditation)
        </button>
        <button onClick={runExercise2} disabled={btn2Disabled || isMeditating}>
          Run Exercise 2 (isPrime)
        </button>
        <button onClick={runExercise3} disabled={btn3Disabled || isMeditating}>
          Run Exercise 3 (Fetch Recipes)
        </button>
        <pre className={styles.output}>{output.join('\n')}</pre>
      </div>
    </div>
  );
}
