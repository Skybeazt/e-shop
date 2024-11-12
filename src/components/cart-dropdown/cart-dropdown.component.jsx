import { useNavigate } from "react-router-dom";

import { selectCartItems } from "./../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../cart-item/cart-item.component.jsx";
import Button from "./../button/button.component.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = function () {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = function () {
    navigate("/checkout");
    dispatch(setIsCartOpen());
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
