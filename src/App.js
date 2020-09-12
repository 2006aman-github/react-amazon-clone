import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import LoginPage from "./Components/LoginPage";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrdersPage from "./Components/OrdersPage";

const promise = loadStripe(
  "pk_test_51HQCIxJcxTJtImIbqYHyT0knL6jz058wOeiRt1AgbZ9fYKsA9a2CeOP4GGha4pcATUL0DFAOJHetN3jSGrT5y6ZC006wtQRpqv"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);

      if (authUser) {
        // the user is just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            {/* navbar  */}
            <NavBar />
            {/* banner  */}
            <Checkout />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/payment">
            <NavBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <NavBar />
            <OrdersPage />
          </Route>
          <Route path="/">
            {/* navbar  */}
            <NavBar />
            {/* banner  */}
            <Banner />
            {/* products page  */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
