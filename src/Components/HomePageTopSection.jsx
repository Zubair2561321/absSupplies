// src/Section.js
import React from "react";
// import "./Section.css"; // Import the CSS file for styling

const Section = () => {
  return (
    // <div className="section">
    //   <div className="image-container">
    //     <img
    //       src="https://www.selcobw.com/media/catalog/category/Insulation_1.jpg"
    //       alt="Description"
    //       className="centered-image"
    //     />
    //   </div>
    //   <div className="description">
    //     <h2>Your Title Here</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi
    //       est, facilisis ac tellus ac, egestas hendrerit magna. Pellentesque
    //       habitant morbi tristique senectus et netus et malesuada fames ac
    //       turpis egestas.
    //     </p>
    //   </div>
    // </div>
    <div className="advertisement-section">
      <div className="product-container">
        <img
          src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product"
          className="product-image"
        />
      </div>
      <div className="description-container">
        <h2>Special Offer!</h2>
        <p>
          Get 20% off on our latest product. Don't miss out on this limited time
          offer!
        </p>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Section;
