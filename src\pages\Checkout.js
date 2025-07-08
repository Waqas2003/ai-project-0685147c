import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>Card Number:</label>
        <input type="text" />
        <br />
        <label>Expiration Date:</label>
        <input type="text" />
        <br />
        <label>CVV:</label>
        <input type="text" />
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Checkout;