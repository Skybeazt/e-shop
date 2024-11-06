import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name} image`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
