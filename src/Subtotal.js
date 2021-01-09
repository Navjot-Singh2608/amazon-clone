import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p className="subtotal__freedelivery">
              Your first order qualifies for FREE Delivery (excludes remote
              locations). Select this option at checkout. Details
            </p>
            <p>
              SubTotal ({basket.length} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Procceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
