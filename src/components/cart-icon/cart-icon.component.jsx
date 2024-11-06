import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = function () {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toggleIsCartOpen = function () {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
