import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = { id: 1, name: 'Product 1', price: 10.99 };

  return (
    <div>
      <h1>Product {id}</h1>
      <ProductCard product={product} />
    </div>
  );
};

export default Product;