import React from 'react';
import ProductsListState from './components/ProductsListState.jsx';
import ProductsListReducer from './components/ProductsListReducer.jsx';
import './lab09.css';

export default function Lab09App() {
  return (
    <div className="lab09">
      <header>Lab09 — Product List</header>
      <div className="container">
        <ProductsListState />
        <ProductsListReducer />
      </div>
    </div>
  );
}
