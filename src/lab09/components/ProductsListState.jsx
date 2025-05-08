import React, { useState } from 'react';
import Product from './Product.jsx';

const initialData = [
  { id: 1, name: 'Apple', price: 1, inStock: true },
  { id: 2, name: 'Banana', price: 1, inStock: false },
  { id: 3, name: 'Cherry', price: 2, inStock: true }
];

function ProductsList() {
  const [products, setProducts] = useState(initialData);

  const toggleStock = (id) => {
    const updated = products.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p));
    setProducts(updated);
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} onToggle={() => toggleStock(product.id)} />
      ))}
    </div>
  );
}

export default ProductsList;
