import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  console.log(basket);

  return (
    <HeaderStyled className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        ></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}className="header__Link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email} </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__Link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: #131921;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  .header__logo {
    width: 100px;
    margin: 0 20px;
    margin-top: 18px;
    object-fit: contain;
  }

  .header__search {
    display: flex;
    flex: 1;

    .header__searchInput {
      height: 30px;
      padding: 10px;
      border: none;
      width: 100%;
      border-radius: 5px 0px 0px 5px;
    }
    .header__searchIcon {
      background-color: #cd9042;
      padding: 5px;
      height: 30px !important;
      width: 35px !important;
      border-radius: 0px 5px 5px 0px;
    }
  }

  .header__nav {
    display: flex;
    justify-content: space-evenly;
    .header__Link {
      color: white;
      text-decoration: none;
      .header__option {
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        .header__optionLineOne {
          font-size: 10px;
        }
        .header__optionLineTwo {
          font-size: 13px;
          font-weight: 800;
        }
      }
      .header__optionBasket {
        display: flex;
        align-items: center;
        .header__basketCount {
          margin: 0 10px;
        }
      }
    }
  }
`;

export default Header;
