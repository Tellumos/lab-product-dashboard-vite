import React, { useState } from 'react';
import ProductList from './components/ProductList';
function App() { 
    const[products, removeProducts] = useState([
      { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
      { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
      { "id": 3, "name": "Tablet", "price": "$499", "inStock": true },
    ])

  const remove = (id) => {
    removeProducts(products.filter(product => product.id !== id))
  }
    

  
  return (
    
    <div>
      <h1>Product Dashboard</h1>
      
      <ProductList products = {products} removeProduct = {remove}/>

    </div>
  );
}

export default App;
