import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";

function NavBar() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(user?.email);
  return (
    <div className="navbar">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="navbar__serach">
        <input type="text" />
        <i className="fa fa-search"></i>
      </div>
      <div className="navbar__nav">
        <Link to={user ? "/" : "/login"}>
          <div onClick={handleAuth} className="nav__option">
            <span className="nav__optionLineOne">
              Hello, {user ? user.displayName : "Guest"}
            </span>
            <span className="nav__optionLineTwo">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <div className="nav__option">
          <span className="nav__optionLineOne">Returns</span>
          <span className="nav__optionLineTwo">& Orders</span>
        </div>
        <div className="nav__option">
          <span className="nav__optionLineOne">Try</span>
          <span className="nav__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="cart__icon">
            <i className="fa fa-shopping-basket"></i>
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
