import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "./../../store/cart/cart.action.js";
import { selectCartCount } from "./../../store/cart/cart.selector.js";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = function () {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = function () {
    dispatch(setIsCartOpen());
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
