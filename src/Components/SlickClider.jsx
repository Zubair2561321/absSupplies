import React from "react";
import Slider from "react-slick";
import img2 from "../assets/image/slider2.png";
import img3 from "../assets/image/slider3.jpg";
import safety from "../assets/videos/safety.mp4";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div style={{ overflowX: "hidden" }}>
        <div className="video-banner">
          <video autoPlay muted loop className="video">
            <source src={safety} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <h1>Think Atlantis</h1>
            {/* <p>Your subtitle or additional information</p> */}
          </div>
        </div>
        {/* <img
          height="600px"
          width="100%"
          src="https://www.rolsontools.com/wp-content/uploads/2023/10/28734_VDE_13_piece_set_lifestyle.jpg"
          alt=""
        /> */}
        <video src="https://www.canva.com/design/DAGHVyWnXXU/T8e9KzCgTwmETR0LjdU1wA/watch?utm_content=DAGHVyWnXXU&utm_campaign=designshare&utm_medium=link&utm_source=editor"></video>
      </div>
      <div>
        <img height="600px" width="100%" src={img2} alt="" />
      </div>
      <div>
        <img height="600px" width="100%" src={img3} alt="" />
      </div>
    </Slider>
  );
}
