import React from 'react';
import ProductsList from './components/ProductsList.jsx';
import './lab09.css';

function App() {
  return (
    <div className="lab09">
      <header>Lab09 — Product List</header>
      <div className="container">
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
