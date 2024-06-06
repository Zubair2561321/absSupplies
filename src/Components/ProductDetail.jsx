import React from "react";
// import "./ProductDetail.css";
// import productImage from "./path/to/your/product-image.jpg"; // Ensure you have the correct path to your image
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state, "location");
  return (
    <div className="product-detail">
      <div className="image-section">
        <img src={state?.image} alt="Product" />
      </div>
      <div className="description-section">
        <h2>{state?.name}</h2>
        <p>{state?.description}</p>

        <p className="price">$99.99</p>
        <button className="button-color btn btn-info text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
