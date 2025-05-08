// src/lab10/Lab10App.jsx
import React from 'react';
import { BookProvider, useBookContext } from '../context/BookContext';
import AddBookForm from './AddBookForm';
import BookManager from './BookManager';
import styles from './lab10.module.css';

function ResetButton() {
  const { resetBooks } = useBookContext();

  return (
    <button
      onClick={resetBooks}
      style={{ marginBottom: '1rem', backgroundColor: '#f44336', color: 'white' }}
    >
      Reset Books
    </button>
  );
}

export default function Lab10App() {
  return (
    <BookProvider>
      <div className={styles.container}>
        <h1>📚 Book Library</h1>
        <ResetButton />
        <AddBookForm />
        <BookManager />
      </div>
    </BookProvider>
  );
}
