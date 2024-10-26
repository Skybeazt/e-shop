import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";

import Button from "./../button/button.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = function () {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
