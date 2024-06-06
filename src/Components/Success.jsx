import React from "react";
// import "./SuccessSection.css";
import successImage from "../assets/image/success.png"; // Ensure you have the correct path to your image

const SuccessSection = () => {
  return (
    <div className="success-section">
      <div className="text-content">
        <h2>Our Success Story</h2>
        <p>
          Our building material company has achieved remarkable success over the
          years. We have provided top-quality materials for countless
          construction projects, ensuring durability and sustainability. Our
          dedication to excellence has made us a trusted name in the industry.
        </p>
        <p>
          From residential buildings to commercial complexes, our products have
          been integral to the creation of modern infrastructure. We are proud
          to contribute to the growth and development of communities around the
          world.
        </p>
      </div>
      <div className="image-content">
        <img src={successImage} alt="Success" />
      </div>
    </div>
  );
};

export default SuccessSection;
