import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Home = () => {
  return (
    <HomeStyled className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/81qDhAQH-vL._SX3000_.jpg"
        alt="top"
      />

      <div className="home__row">
        <Product
          id="1"
          title="HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop, 8 GB RAM, 1TB HDD, M.2 Slot, 15.6-inch (39.62 cms) FHD Screen, Windows 10, MS Office, (15s-dy3001TU)"
          price={39990}
          rating={4}
          image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg"
        />

        <Product
          id="2"
          title="The Lean Startup: How Constent Innovation Creates Radically Successful Buisness Paperback"
          price={168}
          rating={5}
          image="https://m.media-amazon.com/images/I/81luu9cp+xS._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
          price={39990}
          rating={4}
          image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY218_.jpg"
        />

        <Product
          id="4"
          title="Analogue Men's Watch (Black Dial Black Colored Strap)"
          price={339}
          rating={3}
          image="https://m.media-amazon.com/images/I/71cT6st-7hL._AC_UL320_.jpg"
        />

        <Product
          id="5"
          title="JBL C100SI by Harman Wired In Ear Headphones with Mic (Black)"
          price={549}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ptzNC8r8L._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Core i5-10300H 10th Gen, GTX 1650 Ti 4GB Graphics, Gaming Laptop (8GB/512GB SSD/1-Month Office 365 Trial/Windows 10/Gray/2.3 Kg), FX566LI-HN272T"
          price={57,990}
          rating={5}
          image="https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg"
        />
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  .home__image {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -350px;
  }

  .home__row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export default Home;
