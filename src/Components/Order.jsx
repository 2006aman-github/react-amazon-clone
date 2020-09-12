import React from "react";
import "./order.css";
import { mockComponent } from "react-dom/test-utils";
// import { mockComponent } from "react-dom/test-utils";
import moment from "moment";
import Product from "./Product";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>
          <strong> Order Id:- </strong>
          {order.id}
        </small>
      </p>
      <div className="orders__list">
        {order.data.basket.map((item) => (
          <>
            <Product
              ProductName={item.title}
              ProductImage={item.image}
              ProdctPrice={item.price}
              rating={item.rating}
              isCartProduct={true}
            />
            {/* <hr /> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default Order;
