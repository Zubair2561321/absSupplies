import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import sliderImage from "../assets/image/slider1.png";

const ImageSlider = () => {
  const images = [
    "https://nuagaon.com/wp-content/uploads/2023/03/imresizer-1700805745558-1.jpg",
    "https://structuralengineeringbasics.com/wp-content/uploads/2019/05/masonry-buildings.png",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <Slide autoplay="true">
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          {/* <span>Slide 1</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          {/* <span>Slide 2</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${sliderImage})` }}>
          {/* <span>Slide 3</span> */}
        </div>
      </div>
    </Slide>
  );
};

export default ImageSlider;
