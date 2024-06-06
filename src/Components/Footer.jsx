import React from "react";
import "../assets/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Atlantis Building Supplies</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">Timbers</a>
                </li>
                <li>
                  <a href="#">Battens</a>
                </li>
                <li>
                  <a href="#">Plasterboards</a>
                </li>
                <li>
                  <a href="#">CLS</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fa fa-facebook-f" />
                </a>
                {/* <a href="#" className="footertwit">
                  <i className="fa fa-twitter" />
                </a> */}
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white mt-4 text-center">
          © 2024 Atlantis All Rights Reserved. Terms & Conditions Privacy Policy
          Cookie Policy
        </p>
      </footer>
    </>
  );
};

export default Footer;
