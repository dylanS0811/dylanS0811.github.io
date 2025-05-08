import React from 'react';

function Product({ name, price, inStock, onToggle }) {
  const style = {
    color: inStock ? 'green' : 'red',
    marginBottom: '10px',
    display: 'block'
  };

  return (
    <div>
      <span style={style}>
        {name} — ${price}
      </span>
      <button onClick={onToggle}>Toggle In Stock</button>
    </div>
  );
}

export default Product;
