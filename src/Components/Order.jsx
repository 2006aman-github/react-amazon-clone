import React from "react";
import "./order.css";
import { mockComponent } from "react-dom/test-utils";
// import { mockComponent } from "react-dom/test-utils";
import moment from "moment";
import Product from "./Product";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <br />
      <p>
        <strong>Order Date:</strong>{" "}
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <strong> Order Id: </strong>
        {order.id}
      </p>
      <br />
      <div className="orders__list">
        {order.data.basket.map((item) => (
          <>
            <Product
              ProductName={item.title}
              ProductImage={item.image}
              ProductPrice={item.price}
              rating={item.rating}
              isCartProduct={true}
              hideButton={true}
            />
            {/* <hr /> */}
          </>
        ))}
        <div className="order__total">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>Order Total: ({value})</p>
              </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₨ "}
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
