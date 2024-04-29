import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li style={{ color: isDiscounted ? 'green' : 'black' }}>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </li>
  );
};

export default ProductItem;