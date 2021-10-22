import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
          }
      })
  };

  return (
    <ProductStyled clssName="product">
      <div className="product__info">
        <p>{title}</p>
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
      </div>

      <img className="product__img" src={image} alt="product" />

      <button onClick={addToBasket} className="product__btn">
        Add to basket
      </button>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  max-height: 400px;
  min-width: 100px;
  margin: 10px;
  z-index: 1;
  background-color: white;
  padding: 20px;

  .product__info {
    height: 100px;
    margin-bottom: 15px;
    .product__price {
      margin-top: 5px;
    }
    .product__rating {
      display: flex;
    }
  }
  .product__img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .product__btn {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    padding: 5px;
    border-radius: 5px;
  }
`;

export default Product;
