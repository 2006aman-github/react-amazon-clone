import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login__page">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__section">
          <h1>Sign-In</h1>
      </div>
    </div>
  );
}

export default LoginPage;
