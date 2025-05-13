import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import styles from './lab11.module.css';

export default function EditBook() {
  const { id } = useParams();
  const { books, updateBook } = useBookContext();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('All fields are required.');
      return;
    }
    updateBook(id, { title, author });
    navigate('/lab11/list');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Edit Book</h3>
      <div className={styles.formGroup}>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>Author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
        />
      </div>
      <button className={styles.btnPrimary}>Update</button>
      <button type="button" className={styles.btnDanger} onClick={() => navigate('/lab11/list')}>
        Cancel
      </button>
    </form>
  );
}
