import React, { useReducer } from 'react';
import Product from './Product.jsx';

const initialData = [
  { id: 1, name: 'Apple', price: 1, inStock: true },
  { id: 2, name: 'Banana', price: 1, inStock: false },
  { id: 3, name: 'Cherry', price: 2, inStock: true }
];

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_STOCK':
      return state.map((item) =>
        item.id === action.id ? { ...item, inStock: !item.inStock } : item
      );
    default:
      return state;
  }
}

function ProductsListReducer() {
  const [products, dispatch] = useReducer(reducer, initialData);

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>useReducer Version</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onToggle={() => dispatch({ type: 'TOGGLE_STOCK', id: product.id })}
        />
      ))}
    </div>
  );
}

export default ProductsListReducer;
