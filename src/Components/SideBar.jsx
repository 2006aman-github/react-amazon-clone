import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";

function SideBar() {
  const [{ basket, openSideBar, user }, dispatch] = useStateValue();
  const handleSidebar = () => {
    dispatch({
      type: "OPEN_SIDEBAR",
      openSideBar: openSideBar,
    });
  };
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className={openSideBar ? "sidebar  active" : "sidebar"}>
      <div onClick={handleSidebar} className="close__button">
        &times;
      </div>
      <div className="sidebar__list">
        <Link to="/">
          <span onClick={handleSidebar}>
            Hello {user ? user.displayName : "Guest"}
          </span>
        </Link>
        <br />
        <Link to="/">
          <span onClick={handleSidebar}>Home</span>
        </Link>
        <br />
        <Link to={user ? "/" : "/login"}>
          <div onClick={handleAuth}>
            <span onClick={handleSidebar}>{user ? "SignOut" : "SignIn"}</span>
          </div>
        </Link>
        <br />
        <Link to="/orders">
          <span onClick={handleSidebar}>Returns & Orders</span>
        </Link>
        <span onClick={handleSidebar}>Try Prime</span>
        <Link to="/checkout">
          <span>
            <i className="fa fa-shopping-basket"></i>
            <span onClick={handleSidebar}>Your Basket</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
