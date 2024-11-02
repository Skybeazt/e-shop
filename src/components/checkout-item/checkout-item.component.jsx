import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import "./checkout-item.styles.scss";

const CheckoutItem = function ({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = function () {
    clearItemFromCart(cartItem);
  };

  const addItemHandler = function () {
    addItemToCart(cartItem);
  };

  const removeItemHandler = function () {
    removeItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} image`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
