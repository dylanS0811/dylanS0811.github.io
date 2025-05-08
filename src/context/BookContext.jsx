// src/context/BookContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const BookContext = createContext(null);

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const resetBooks = async () => {
    try {
      setLoading(true);
      const defaultBooks = [
        { title: 'React Basics', author: 'Dan Abramov' },
        { title: 'Clean Code', author: 'Robert C. Martin' },
        { title: 'You Don’t Know JS', author: 'Kyle Simpson' }
      ];

      for (const book of defaultBooks) {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(book)
        });
      }

      getBooks(); // 刷新列表
    } catch (err) {
      setError('Failed to reset books');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      });
      const newBook = await res.json();
      setBooks((prev) => [...prev, newBook]);
    } catch (err) {
      setError('Failed to add book');
    }
  };

  const updateBook = async (id, updatedBook) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook)
      });
      const data = await res.json();
      setBooks((prev) => prev.map((book) => (book.id === id ? data : book)));
    } catch (err) {
      setError('Failed to update book');
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      setError('Failed to delete book');
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{ books, loading, error, resetBooks, addBook, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
