// src/lab11/AddBook.jsx
import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import styles from './lab11.module.css';

export default function AddBook() {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('All fields are required.');
      return;
    }

    addBook({ title, author });

    setTitle('');
    setAuthor('');

    setSuccessMsg('✅ Book added successfully!');

    setTimeout(() => setSuccessMsg(''), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add New Book</h3>

      {successMsg && <p className={styles.success}>{successMsg}</p>}

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
      <button className={styles.btnPrimary}>Add Book</button>
    </form>
  );
}
