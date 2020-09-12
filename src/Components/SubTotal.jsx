import React, { useEffect } from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { Link } from "react-router-dom";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState();
  //   console.log(basket);

  useEffect(() => {
    let p = 0;
    basket.map((item) => {
      p += parseFloat(item.price);
    });
    setTotalPrice(p);
  }, [basket]);

  // console.log(totalPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length == 1 ? "item" : "items"}
              ): <small>$</small>
              <strong>{parseInt(totalPrice)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button>Proceed to Buy</button>
      </Link>
    </div>
  );
}

export default SubTotal;
