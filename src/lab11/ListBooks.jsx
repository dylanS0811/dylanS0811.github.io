import React from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import styles from './lab11.module.css';

export default function ListBooks() {
  const { books, deleteBook, loading, error } = useBookContext();

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>Book List</h3>
      <ul className={styles.bookList}>
        {books.map((book) => (
          <li key={book.id} className={styles.bookItem}>
            <strong>{book.title}</strong> by {book.author}
            <div>
              <button className={styles.btnDanger} onClick={() => deleteBook(book.id)}>
                Delete
              </button>
              <Link to={`/lab11/edit/${book.id}`} className={styles.btnPrimary}>
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
