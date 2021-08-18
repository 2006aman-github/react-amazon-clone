import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
  return (
    <div class="home">
      <Product
        ProductName={'Nx120s Stereo Headset With Foldable Microphone'}
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/61H0aiyxy3L._SL1200_.jpg'
        }
        ProductPrice={'1365.00'}
        rating={4}
        isCartProduct={false}
      />
      <Product
        ProductName={
          "Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg'
        }
        rating={4}
        ProductPrice={'2299.00'}
        isCartProduct={false}
      />

      <Product
        ProductName={
          'pTron Bassbuds in-Ear True Wireless Bluetooth Headphones (TWS) with Mic - (Black)'
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/51jGCELP5zL._SL1100_.jpg'
        }
        rating={4}
        ProductPrice={'999.00'}
        isCartProduct={false}
      />
      <Product
        ProductName={'The Story of My Experiments with Truth Mahatma Gandhi '}
        rating={3}
        ProductImage={'https://m.media-amazon.com/images/I/41PgpB77-0L.jpg'}
        ProductPrice={'474.05'}
        isCartProduct={false}
      />
      <Product
        ProductName={
          'Preethi Platinum MG-153 550-Watt Mixer Grinder (White/Blue)'
        }
        rating={5}
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/81kbnsv2sbL._SL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'5206.00 '}
      />

      <Product
        ProductName={
          'Microsoft Surface Pro 7 VDV-00015 12.3 inch Touchscreen 2-in-1 Laptop, Platinum'
        }
        isCartProduct={false}
        rating={5}
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/519JUh2%2BewL._SL1200_.jpg'
        }
        ProductPrice={'89289.00'}
      />
      <Product
        ProductName={'Tecno Spark 5 (Spark Orange, 2GB RAM, 32GB Storage)'}
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/71fYI3K2oiL._SL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'7999.00 '}
        rating={3}
      />
      <Product
        ProductName={
          'ZEBRONICS Gaming Multimedia USB Keyboard & USB Mouse Combo -Transformer'
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/61l3aUqHRVL._SL1000_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'1299.00'}
        rating={4}
      />
      <Product
        ProductName={"Allen Solly Men's Polo"}
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/81L9f1n4pGL._UL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'441.00'}
        rating={4}
      />

      <Product
        ProductName={
          'Redgear Cloak Wired RGB Gaming Headphones with Microphone for PC'
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/71L26Qve3jL._SL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'899.00'}
        rating={4}
      />
      <Product
        ProductName={
          'Cosmic Byte H11 Gaming Headset with Microphone (Black/Purple)'
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/61FPKvWRQCL._SL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'1049.00'}
        rating={4}
      />
      <Product
        ProductName={
          'ASUS VivoBook 14 M409DA-EK146T AMD Quad Core Ryzen 5-3500U 14-inch FHD Compact and Light Laptop '
        }
        ProductImage={
          'https://images-na.ssl-images-amazon.com/images/I/81Bq3kCc6AL._SL1500_.jpg'
        }
        isCartProduct={false}
        ProductPrice={'37591.00'}
        rating={5}
      />
    </div>
  );
}

export default Home;
