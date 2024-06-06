import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <>
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </>
        <div className="container">
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle text-center m-auto"
                  width={80}
                />
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
