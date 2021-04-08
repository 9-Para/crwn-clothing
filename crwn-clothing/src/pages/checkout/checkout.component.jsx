import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/strip-button.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="">Product</span>
        </div>

        <div className="header-block">
          <span className="">Description</span>
        </div>

        <div className="header-block">
          <span className="">Quantity</span>
        </div>

        <div className="header-block">
          <span className="">Price</span>
        </div>

        <div className="header-block">
          <span className="">Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*<br/>
        Card Number: 4242 4242 4242 4242<br/>
        Expiry: 1/23 and 
        CVV: 123<br/>
      </div>
      <StripeCheckoutButton price={total}/>
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
