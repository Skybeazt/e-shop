import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context.jsx";

import CartItem from "../cart-item/cart-item.component.jsx";
import Button from "./../button/button.component.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = function () {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = function () {
    navigate("/checkout");
    setIsCartOpen();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage> Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
