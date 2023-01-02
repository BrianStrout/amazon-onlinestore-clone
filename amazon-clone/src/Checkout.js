import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      Checkout!
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/credit/img22/MAPLE/card_art/amz_us-cbcc_core_blue_render-resize-mobile._CB646320886_.png"
          alt=""
        />
      </div>
      <div className="checkout__title">basket</div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
