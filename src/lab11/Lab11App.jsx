import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from '../context/BookContext';
import AddBook from './AddBook';
import EditBook from './EditBook';
import ListBooks from './ListBooks';
import styles from './lab11.module.css';

export default function Lab11App() {
  return (
    <BookProvider>
      <div className={styles.container}>
        <h1>📚 Book Library</h1>
        <nav className={styles.nav}>
          <Link to="/lab11/add" className={styles.btnPrimary}>
            Add Book
          </Link>
          <Link to="/lab11/list" className={styles.btnPrimary}>
            Book List
          </Link>
        </nav>

        <Routes>
          <Route path="add" element={<AddBook />} />
          <Route path="list" element={<ListBooks />} />
          <Route path="edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </BookProvider>
  );
}
