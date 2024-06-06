import React from "react";
import BannerAnnoucement from "../Components/BannerAnnoucement";
import ProductList from "../Components/ProductList";
import Section from "../Components/HomePageTopSection";
import SimpleSlider from "../Components/SlickClider";

export const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      {
        <>
          {/* <Section /> */}
          <SimpleSlider />
          <ProductList />
        </>
      }
    </div>
  );
};
