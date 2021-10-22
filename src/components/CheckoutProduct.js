import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

const Checkoutproduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <CheckoutProductStyled>
      <img src={image} alt="img" />

      <div className="checkoutProduct__info">
        <p className="chekoutProduct__title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="product__btn">
          Remove from Basket
        </button>
      </div>
    </CheckoutProductStyled>
  );
};

const CheckoutProductStyled = styled.div`
  display: flex;
  max-width: 800px;
  flex: 1;
  margin-bottom: 20px;
  justify-content: space-between; 

  .checkoutProduct__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
    
  }

  .checkoutProduct__info {
    padding-left: 20px;
    width: 60%;
    .chekoutProduct__title {
      font-size: 17px;
      font-weight: 800;
    }
    .product__rating {
      display: flex;
    }
    .product__btn {
      background-color: #f0c14b;
      border: 1px solid;
      border-color: #a88734 #9c7e31 #846a29;
      padding: 5px;
      border-radius: 5px;
      margin-top: 20px;
    }
  }
`;

export default Checkoutproduct;
