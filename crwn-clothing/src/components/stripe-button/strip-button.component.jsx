import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IdwlSSG5CPHgul1OuBM4uPKqRmOsNPPfK719DNp3y2QTbaPPb0BATG5qXxLhsBffu17LDbtTyZEEu267TYvk9Vv00424E4NXp";
    
  const onToken=token=>{
        console.log(token);
        alert("Payment successful.");
    }

  return (
      <StripeCheckout label="Pay Now"

      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
      
      />    
  );
};
export default StripeCheckoutButton;