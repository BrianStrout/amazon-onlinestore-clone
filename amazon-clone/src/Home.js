import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="?"
        />

        <div className="home__row">
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            id="1"
            title="the lean boi"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={3}
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
