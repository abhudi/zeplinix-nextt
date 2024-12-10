import React from "react";
import PortfolioVideo from "../components/PortfolioVideo";
import Aboutheader from "../components/aboutHeader";
import PortfolioProduct from "../components/PortfolioProduct";

const Product = () => {
  return (
    <div className="mx-0 2xl:mx-24">
      <Aboutheader />
      <PortfolioProduct />
      <PortfolioVideo />
    </div>
  );
};

export default Product;
