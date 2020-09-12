import React from "react";
import "./checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider";
import Product from "./Product";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <section className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg "
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        <div className="basket__items">
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
      </section>
      <section className="checkout__right">
        <SubTotal />
      </section>
    </div>
  );
}

export default Checkout;
