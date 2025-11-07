import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ productTitle, productPrice, productAvailability, removeProduct, product }) {
  return (
    <>
      <div className = {productAvailability ? 'inStock' : 'outOfStockClass'}>
        <h3>{productTitle}</h3>
        <p>{productPrice}</p>
        <p>{productAvailability}</p>
        
      </div>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
      
    </> 
  );
};

export default ProductCard;
