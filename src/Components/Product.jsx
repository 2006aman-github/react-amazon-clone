import React from "react";
import "./product.css";
import { useState } from "react";
import { useStateValue } from "../StateProvider";

function Product({
  ProductName,
  ProductImage,
  ProductPrice,
  rating,
  isCartProduct,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log(basket);
    // dispatch an add to basket action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: ProductName,
        image: ProductImage,
        price: ProductPrice,
        rating: rating,
      },
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      name: ProductName,
    });
  };

  return (
    <div className={isCartProduct ? "product  cart__item" : "product"}>
      <div className="product__header">
        <p>{ProductName}</p>
        <small>$</small>
        <span className="product__price">{ProductPrice}</span>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={ProductImage} alt="" />
      {isCartProduct ? (
        <button onClick={removeFromBasket}>Delete</button>
      ) : (
        <button onClick={addToBasket}>Add to Basket</button>
      )}
    </div>
  );
}

export default Product;
