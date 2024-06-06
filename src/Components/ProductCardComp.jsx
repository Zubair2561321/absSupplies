import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./ProductCard.css"; // Import the CSS file for styling

const ProductCardComp = ({ product }) => {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = (i) => {
    navigate(`/productDetail/${product?.id}`, { state: product });
  };
  return (
    <div className="wrapperbtn product-card" onClick={() => handleClick()}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
          height="auto"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <a
            href="#"
            className=" button btn btn-primary button-color"
            onClick={() => handleClick(product)}
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComp;
