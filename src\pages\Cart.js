import React from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 9.99, quantity: 1 },
  ];

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;