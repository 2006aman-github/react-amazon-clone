import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [registerPage, setRegisterPage] = useState(false);

  //   sign in func
  const SignIn = (e) => {
    e.preventDefault();
    if (registerPage) {
      setRegisterPage(false);
      return registerPage;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // succesfully logged in a user
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // succesfully created a user
        if (auth) {
          auth.user.updateProfile({
            displayName: name,
          });
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login__page">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__section">
        {registerPage ? (
          <>
            <h1>Sign-Up</h1>
            <form>
              <h5>First Name</h5>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <h5>E-mail</h5>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <h5>Password</h5>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button onClick={Register}>Register</button>
            </form>
            <p>
              By continuing, you agree to Amazon's <u>FAKE CLONE</u> Conditions
              of Use and Privacy Notice. Please see our Privacy Notice, our
              Cookies Notice and ourInternet-Based Ads Notice.
            </p>
            <hr />
            <br />
            <button className="register__button" onClick={SignIn}>
              Sign In
            </button>
          </>
        ) : (
          <>
            <h1>Sign-In</h1>
            <form>
              <h5>E-mail</h5>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <h5>Password</h5>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button onClick={SignIn}>Sign In</button>
            </form>
            <p>
              By continuing, you agree to Amazon's <u>FAKE CLONE</u> Conditions
              of Use and Privacy Notice. Please see our Privacy Notice, our
              Cookies Notice and ourInternet-Based Ads Notice.
            </p>
            <hr />
            <br />
            <button
              onClick={(e) => setRegisterPage(true)}
              className="register__button"
            >
              Create your Amazon account
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
