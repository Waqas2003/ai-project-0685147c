import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li>
      {item.name} x {item.quantity} = ${item.price * item.quantity}
    </li>
  );
};

export default CartItem;