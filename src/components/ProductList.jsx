import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, removeProduct }) {
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} productTitle={product.name} productPrice={product.price} productAvailability={product.inStock} removeProduct = {removeProduct} product = {product}/>
            ))}
        </div>
    );
};

export default ProductList;
