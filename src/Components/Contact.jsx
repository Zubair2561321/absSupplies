import React from "react";
import "../assets/contactUs.css";

const Contact = () => {
  return (
    <div className="image-banner">
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Banner"
        className="banner-image"
      />
      <div className="banner-description">
        <h1>Welcome to Our Store</h1>
        <p>Discover the best deals and quality products here.</p>
      </div>
    </div>
  );
};

export default Contact;
