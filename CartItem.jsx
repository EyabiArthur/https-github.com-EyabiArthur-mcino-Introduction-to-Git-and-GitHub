import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost of all items
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Our checkout experience is under construction. Thank you for shopping at Paradise Nursery!');
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. 🌱</p>
          <Link to="/plants" className="continue-btn" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            Browse Plants
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                {/* Thumbnail */}
                <img src={item.image} alt={item.name} />

                {/* Info */}
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                  <p className="item-total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>
                  <span className="qty-number">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑 Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary & Actions */}
          <div className="cart-summary">
            <p className="cart-total">
              Total: <strong>${totalAmount.toFixed(2)}</strong>
            </p>
            <div className="cart-actions">
              <Link to="/plants" className="continue-btn">
                ← Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
