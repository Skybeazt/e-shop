import { Fragment, useContext } from "react";
import { UserContext } from "./../../contexts/user.contexts.jsx";
import { CartContext } from "./../../contexts/cart.context.jsx";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "./../../utils/firebase/firebase.utils.js";

import CartIcon from "./../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.component.jsx";

import { ReactComponent as CrwnLogo } from "./../../assets/87 - crown.svg";
import "./navigation.styles.scss";

const Navigation = function () {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async function () {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN UP
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
