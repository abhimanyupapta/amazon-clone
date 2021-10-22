import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <SubtotalStyled className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket?.length} {basket?.length > 1 ? `items` : `item`}:
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <label for="gift">This order contains a gift</label>
              <input type="checkbox" name="gift" />
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="checkout__btn">Proceed to Checkout</button>
    </SubtotalStyled>
  );
};

const SubtotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3e6e8;
  padding: 15px;
  border-radius: 5px;
  .subtotal__gift {
    input {
      margin-left: 5px;
    }
  }
  .checkout__btn {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    padding: 5px;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

export default Subtotal;
