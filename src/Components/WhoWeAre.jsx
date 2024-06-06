import React from "react";
import backImage from "../assets/image/image-2021-08-04T12-24-30.169Z.png";

const WhoWeAre = () => {
  return (
    <div>
      <section
        id="general-content-110"
        className="position-relative "
        style={{
          background: "rgba(255,255,255,0)",
          paddingTop: 80,
          paddingBottom: 30,
        }}
      >
        {/* <figure className="bg-img" style={{ background: "#ffffff" }}>
          <img alt="Image" loading="lazy" src={backImage} />
        </figure> */}
        <div className="content-wrapper container">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
            <div
              className="text-wrapper order-1 box-layout"
              style={{
                flexBasis: "100%",
                paddingTop: 0,
                paddingRight: 0,
                paddingLeft: 0,
                paddingBottom: 0,
              }}
            >
              <article className="title">
                <h1>
                  <span
                    spantype="color"
                    style={{ color: "rgb(124, 124, 123)" }}
                  >
                    <b>Who we are</b>
                  </span>
                </h1>
              </article>
              <article className="body">
                <p>
                  <span>
                    Selco Builders Warehouse is a truly diverse and inclusive
                    employer that delivers great service to our thousands of
                    registered customers who visit our network of over 70
                    branches located throughout the UK or order via our website.
                    We are proud of who we are, where we have come from and our
                    ambitious plans for the future which will enable us to
                    become the Nation's favourite self-select Trade only
                    Builders Warehouse.
                  </span>
                </p>
              </article>
              <article className="cta_button">
                <p className="">
                  <span>
                    Our self select branches are supported by 2 Regional
                    Delivery Hubs and a Support Centre based in Birmingham. No
                    matter your background, we are looking for ambitious people
                    who share our common values.
                  </span>
                </p>
                <p className="">
                  <d-tag className="mayon-button">
                    <a href="/about-us" data-od-marked="true">
                      <button className="btn btn-info">Read more</button>
                    </a>
                  </d-tag>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
