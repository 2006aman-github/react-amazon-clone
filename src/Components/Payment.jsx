import React, { useEffect } from "react";
import "./payment.css";
import { useStateValue } from "../StateProvider";
import Product from "./Product";
import { Link, useHistory } from "react-router-dom";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { getBasketTotal } from "../reducer";
import { db } from "../Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  //   console.log(basket);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log(getBasketTotal(basket));
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // console.log("THE SECRET KEY IS", clientSecret);
  // console.log(user);

  const handleSubmit = async (e) => {
    //   the stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntend = payment confirmation
        console.log(paymentIntent);
        // push into the db
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment__page">
      <div className="payemnt__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
            <div className="payment__address">
              <p>{user?.displayName}</p>
              <p>123 React Lane</p>
              <p>New York, CA</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <>
                <Product
                  ProductName={item.title}
                  ProductImage={item.image}
                  ProductPrice={item.price}
                  rating={item.rating}
                  isCartProduct={true}
                />
                {/* <hr /> */}
              </>
            ))}
          </div>
        </div>
        <div className="payment__section">
          {user ? (
            <>
              <div className="payment__title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <br />
                  <div className="payment__priceContainer">
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <p>
                            Subtotal ({basket.length}
                            {basket.length == 1 ? "item" : "items"}
                            ):
                            <strong> {value}</strong>
                          </p>
                        </>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₨ "}
                    />
                    <button
                      className="buy__now__button"
                      disabled={processing || disabled || succeded}
                    >
                      <span>
                        {processing ? <p>Processing 🛒</p> : "Buy Now"}
                      </span>
                    </button>
                  </div>
                </form>
                {error && <div>{error}</div>}
              </div>
            </>
          ) : (
            <Link to="/login">
              <button>Sign In To Continue</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
