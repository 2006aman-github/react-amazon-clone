import React, { useEffect } from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";

function SubTotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState();
  //   console.log(basket);

  // console.log(totalPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length == 1 ? "item" : "items"}
              ):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
      />
      {user ? (
        <Link to={"/payment"}>
          <button>Proceed to Buy</button>
        </Link>
      ) : (
        <Link to="/login">
          <button>Sign In To Continue</button>
        </Link>
      )}
    </div>
  );
}

export default SubTotal;
