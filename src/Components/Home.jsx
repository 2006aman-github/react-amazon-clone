import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div class="home">
      <div className="home__row">
        <Product
          ProductName={"Nx120s Stereo Headset With Foldable Microphone"}
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/61H0aiyxy3L._SL1200_.jpg"
          }
          ProductPrice={"1365.00"}
          rating={4}
          isCartProduct={false}
        />
        <Product
          ProductName={
            "Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
          }
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
          }
          rating={4}
          ProductPrice={"2299.00"}
          isCartProduct={false}
        />
      </div>
      <div className="home__row">
        <Product
          ProductName={
            "pTron Bassbuds in-Ear True Wireless Bluetooth Headphones (TWS) with Mic - (Black)"
          }
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/51jGCELP5zL._SL1100_.jpg"
          }
          rating={4}
          ProductPrice={"999.00"}
          isCartProduct={false}
        />
        <Product
          ProductName={"The Story of My Experiments with Truth Mahatma Gandhi "}
          rating={3}
          ProductImage={"https://m.media-amazon.com/images/I/41PgpB77-0L.jpg"}
          ProductPrice={"474.05"}
          isCartProduct={false}
        />
        <Product
          ProductName={
            "Preethi Platinum MG-153 550-Watt Mixer Grinder (White/Blue)"
          }
          rating={5}
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/81kbnsv2sbL._SL1500_.jpg"
          }
          isCartProduct={false}
          ProductPrice={"5206.00 "}
        />
      </div>
      <div className="home__row">
        <Product
          ProductName={
            "Microsoft Surface Pro 7 VDV-00015 12.3 inch Touchscreen 2-in-1 Laptop (10th Gen Intel Core i5/8GB/128GB SSD/Windows 10 Home/Intel Iris Plus Graphics), Platinum"
          }
          isCartProduct={false}
          rating={5}
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/519JUh2%2BewL._SL1200_.jpg"
          }
          ProductPrice={"89289.00"}
        />
        <Product
          ProductName={"Tecno Spark 5 (Spark Orange, 2GB RAM, 32GB Storage)"}
          ProductImage={
            "https://images-na.ssl-images-amazon.com/images/I/71fYI3K2oiL._SL1500_.jpg"
          }
          isCartProduct={false}
          ProductPrice={"7999.00 "}
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
