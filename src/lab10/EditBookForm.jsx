// src/lab10/EditBookForm.jsx
import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import styles from './lab10.module.css';

export default function EditBookForm({ book, onClose }) {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('All fields are required.');
      return;
    }
    updateBook(book.id, { title, author });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Edit Book</h3>

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
        Update
      </button>
      <button
        type="button"
        onClick={onClose}
        className={styles.btnDanger}
        style={{ marginLeft: '10px' }}
      >
        Cancel
      </button>
    </form>
  );
}
