import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="7765437"
          title="All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White"
          price={345.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51YLCGyRYpL._AC_SX679_.jpg"
        />

        <Product
          id="76546"
          title="Prestige Mixer Grinder - Elegant Mixer Grinder, 1 pc"
          price={35}
          rating={3}
          image="https://www.bigbasket.com/media/uploads/p/l/800371674_1-prestige-mixer-grinder-elegant-mixer-grinder.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="87990"
          title="Electric Swing Arm Wayfarer Sunglasses"
          price={76}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71uTSpeaaDL._AC_UX679_.jpg"
        />

        <Product
          id="546647"
          title="Samsung Galaxy S10e Cover Case,Cash Card Sleeve Leather"
          price={14}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81I9DAFKKPL._AC_SX679_.jpg"
        />
        <Product
          id="8896574"
          title="UMIDIGI Smart Watch, Built-in GPS Fitness Tracker, Heart Rate Monitor Activity Tracker with 1.3 Touch Screen  5ATM Waterproof Smartwatch for Men and Women, Compatible with iPhone and Android Phone."
          price={66.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61R0PRR3JjL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="99764453"
          title="Acer Monitor"
          price={450}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX425_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
