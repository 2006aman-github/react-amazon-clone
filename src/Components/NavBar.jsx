import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";
import { getBasketTotal } from "../reducer";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Icon } from "@iconify/react";
import shoppingCart from "@iconify/icons-carbon/shopping-cart";
import Axios from "axios";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar() {
  const [{ basket, user, openSideBar }, dispatch] = useStateValue();
  const [geoLocation, setGeoLocation] = useState(null);

  React.useEffect(() => {
    let mounted = true;
    const getGeoInfo = async () => {
      Axios.get("https://ipapi.co/json/")
        .then((response) => {
          let data = response.data;
          setGeoLocation({
            countryName: data.country_name,
            countryCode: data.country_calling_code,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (mounted) {
      getGeoInfo();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleSidebar = () => {
    dispatch({
      type: "OPEN_SIDEBAR",
      openSideBar: openSideBar,
    });
  };
  return (
    <div className="navbar">
      <div className="top_nav" style={{ color: "white" }}>
        <Link to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <Link to="/checkout">
          <div className="cart__icon">
            <Icon icon={shoppingCart} />
            {basket.length}
          </div>
        </Link>
        <MenuIcon className="nav__mobile__menu" onClick={handleSidebar} />
      </div>
      <div className="user__address">
        <LocationOnIcon />

        <section>
          <span>{user ? `Deliver to ${user?.displayName}` : "Hello"}</span>
          <h4>
            {geoLocation?.countryName
              ? `Delvier to ${geoLocation?.countryName}`
              : "Select Your address"}
          </h4>
        </section>
      </div>
      <div className="navbar__serach">
        <span>
          All
          <ExpandMoreIcon />
        </span>
        <input placeholder="Search for products on amazon" type="text" />
        <button className="nav__search-btn">
          <i className="fa fa-search"></i>
        </button>
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
        <Link to="/orders">
          <div className="nav__option">
            <span className="nav__optionLineOne">Returns</span>
            <span className="nav__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="cart__icon">
            <Icon icon={shoppingCart} />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
