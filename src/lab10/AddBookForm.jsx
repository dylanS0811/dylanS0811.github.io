// src/lab10/AddBookForm.jsx
import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import styles from './lab10.module.css';

export default function AddBookForm() {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('All fields are required.');
      return;
    }
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add New Book</h3>

      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.btnPrimary}>
        Add Book
      </button>
    </form>
  );
}
