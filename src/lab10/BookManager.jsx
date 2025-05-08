// src/lab10/BookManager.jsx
import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import EditBookForm from './EditBookForm';
import styles from './lab10.module.css';

export default function BookManager() {
  const { books, loading, error, deleteBook } = useBookContext();
  const [selectedBook, setSelectedBook] = useState(null);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul className={styles.bookList}>
          {books.map((book) => (
            <li key={book.id} className={styles.bookItem}>
              <div>
                <strong>{book.title}</strong> by {book.author}
              </div>
              <div>
                <button className={styles.btnDanger} onClick={() => deleteBook(book.id)}>
                  Delete
                </button>
                <button className={styles.btnPrimary} onClick={() => setSelectedBook(book)}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedBook && <EditBookForm book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
}
