import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id="1234"
            title="The Secret Of The Nagas (Shiva Trilogy-2)"
            price={300}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51ICrrp1SHL._SX327_BO1,204,203,200_.jpg"
          />
          <Product 
          id="12345"
          title="Qube By Fort Collins Men's Sweatshirt"
          price={ 720.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/71m3CV+Uo2L._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
          id="123456"
          title="OnePlus 9 5G (Astral Black, 8GB RAM, 128GB Storage)"
          price={26000}
          rating={4}
          image="https://m.media-amazon.com/images/I/61urU8k2lFL._SL1500_.jpg"

          
          />
          <Product 
          id="1234567"
          title="Adidas Unisex-Adult D.o.n. Issue 2 Basketball Shoe"
          price={5000}
          rating={3}
          image="https://m.media-amazon.com/images/I/715zSfX8etL._UL1500_.jpg"
          />
          <Product 
          id="12345678"
          title="Nutty Gritties Sports Mix - Roasted Almonds, Cashews, Pistachios, Dried Blueberries"
          price={545}
          rating={3}
          image="https://m.media-amazon.com/images/I/71H8N3F7scL._SL1488_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
          id="123456789"
          title="LG 139.7 cm (55 inches) 4K Ultra HD Smart OLED TV 55A1PTZ (Dark Meteo Titan) (2021 Model)"
          price={109870}
          rating={5}
          image="https://m.media-amazon.com/images/I/81hZKoE6t9S._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
