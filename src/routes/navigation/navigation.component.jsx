import { selectIsCartOpen } from "./../../store/cart/cart.selector.js";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { signOutUserStart } from "./../../store/user/user.action.js";
import { useSelector, useDispatch } from "react-redux";

import { userSelector } from "../../store/user/user.selector.js";

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
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async function () {
    dispatch(signOutUserStart());
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
