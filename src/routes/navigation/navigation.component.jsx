import { Fragment, useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../store/user/user.selector.js";
import { signOutUser } from "./../../utils/firebase/firebase.utils.js";

import CartIcon from "./../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.component.jsx";

import { ReactComponent as CrwnLogo } from "./../../assets/87 - crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = function () {
  const currentUser = useSelector(userSelector);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async function () {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN UP</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
