import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function NavBar() {
  const [{ basket }, dispatch] = useStateValue();

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
        <div className="nav__option">
          <span className="nav__optionLineOne">Hello, Guest</span>
          <span className="nav__optionLineTwo">SignIn</span>
        </div>
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
