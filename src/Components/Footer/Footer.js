import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="footer section">
      <div className="footer__container container grid">
        <div>
          <Link to={'/'} onClick={scrollToTop} className="footer__logo">
            Wildpalms Hospitality <i className="bx bxs-home-alt-2"></i>
          </Link>
          <p className="footer__description">
            Our vision is to provide all people <br />
            the best place to live for them.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">About</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  News & Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Company</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  How We Work?
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Capital
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Support</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Support center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Follow us</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/profile.php?id=100088818950725"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
              <a
                href="https://www.instagram.com/wildpalmshospitality?igsh=ZzRnNWQ2MXVuNDg1"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/ByVqHoAghwr7M7dkoFpQZC"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__info container">
        <span className="footer__copy">
          &#169; Wildpalms Hospitality. All rigths reserved
        </span>

        <div className="footer__privacy">
          <a href="#">Terms & Agreements</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
