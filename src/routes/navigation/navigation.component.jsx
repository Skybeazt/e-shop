import { Fragment, useContext } from "react";
import { UserContext } from "./../../contexts/user.contexts.jsx";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "./../../utils/firebase/firebase.utils.js";

import { ReactComponent as CrwnLogo } from "./../../assets/87 - crown.svg";
import "./navigation.styles.scss";

const Navigation = function () {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async function () {
    const response = await signOutUser();
    if (response === undefined) setCurrentUser(null);
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
              REGISTER / SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
