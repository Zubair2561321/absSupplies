import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [state, setState] = React.useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    console.log(evt.target.value, "evtttttt");
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y6ivofq", "template_8i36z9l", form.current, {
        publicKey: "1kfudHHzKPJC0ovs_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="">
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form ref={form} onSubmit={sendEmail} className="form-box">
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead">
                  Got Questions? Reach Out and Let's Connect!
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i10mt-3"
                >
                  <p className="text-blk input-title">NAME</p>
                  <input
                    className="input"
                    id="ijowk-3"
                    name="user_name"
                    placeholder="Please enter first name..."
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="ip1yp"
                >
                  <p className="text-blk input-title">EMAIL</p>
                  <input
                    className="input"
                    id="ipmgh-3"
                    name="user_email"
                    placeholder="Please enter email..."
                    onChange={handleChange}
                  />
                </div>

                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-3"
                >
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea
                    className="textinput"
                    id="i5vyy-3"
                    placeholder="Please enter query..."
                    defaultValue={""}
                    name="message"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="submit-btn"
                id="w-c-s-bgc_p-1-dm-id-2"
              >
                Submit
              </button>
            </div>
          </form>
          <div
            className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12"
            id="i772w"
          >
            <div className="map-part">
              <p
                className="text-blk map-contactus-head"
                id="w-c-s-fc_p-1-dm-id"
              >
                Reach us at
              </p>
              <p className="text-blk map-contactus-subhead">
                Got Questions? Reach Out and Let's Connect!
              </p>
              <div className="social-media-links mob">
                <a className="social-icon-link" href="#" id="ix94i-2-2">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="itixd">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="izxvt">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  />
                </a>
                <a className="social-icon-link" href="#" id="izldf-2-2">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  />
                </a>
              </div>
              <div className="map-box container-block">
                <div
                  style={{
                    textDecoration: "none",
                    overflow: "hidden",
                    maxWidth: "100%",
                    width: 500,
                    height: 500,
                  }}
                >
                  <div
                    id="canvas-for-googlemap"
                    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                  >
                    <iframe
                      style={{ height: "100%", width: "100%", border: 0 }}
                      frameBorder={0}
                      src="https://www.google.com/maps/embed/v1/place?q=+30+canterbury+road+rg2+7ta+reading+England&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                  </div>
                  <a
                    className="embed-ded-maphtml"
                    rel="nofollow"
                    href="https://kbj9qpmy.com/hrn"
                    id="authorize-maps-data"
                  >
                    InMotion Hosting
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "#canvas-for-googlemap .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
