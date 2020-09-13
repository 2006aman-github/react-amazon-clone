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
  hideButton,
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
    <>
      {isCartProduct ? (
        <div className="cart__product">
          <img src={ProductImage} alt="" />
          <div className="cart__product__header">
            <p>
              <h4>{ProductName}</h4>
            </p>
            <small>₨</small>
            <span className="product__price">
              <strong>{ProductPrice}</strong>
            </span>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>&#11088;</p>
                ))}
            </div>
            {hideButton ? null : (
              <button onClick={removeFromBasket}>Remove From Basket</button>
            )}
          </div>
        </div>
      ) : (
        <div className="product">
          <div className="product__header">
            <p>{ProductName}</p>
            <small>₨</small>
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

          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      )}
    </>
  );
}

export default Product;
