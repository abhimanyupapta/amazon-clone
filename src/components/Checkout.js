import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import Checkoutproduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <CheckoutStyled className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__msg">Your Shopping Basket is Empty.</h2>
            <p>
              You have no items in your basket. To buy on or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__msg">Your Shopping Basket.</h2>

            {basket?.map((item) => (
              <Checkoutproduct
                item
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </CheckoutStyled>
  );
};

const CheckoutStyled = styled.section`
  display: flex;
  align-items: start;
  padding: 20px 40px;
  justify-content: space-between;
  .checkout__left {
    .checkout__msg {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }

  .checkout__right {
    width: 400px;
    margin-top: 20px;
  }
`;

export default Checkout;
