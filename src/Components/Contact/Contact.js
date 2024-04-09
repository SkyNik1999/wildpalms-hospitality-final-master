import React from 'react';
import contact from '../../Assets/contact.png';
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__images">
          <div className="contact__orbe"></div>

          <div className="contact__img">
            <img src={contact} alt="" />
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__data">
            <span className="section__subtitle">Contact Us</span>
            <h2 className="section__title">
              Easy to Contact us<span>.</span>
            </h2>
            <p className="contact__description">
              Having Trouble Finding Your Ideal Rental in Goa? Need Help with
              Your First Rental Journey? Looking for Expert Consultation on
              Residential Renting in Goa? Just Reach Out to Us!
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__card-box">
              <div className="contact__card-info">
                <i className="bx bxs-phone-call"></i>

                <div>
                  <h3 className="contact__card-title">Call</h3>
                  <p className="contact__card-description">
                    Call Us now if you have any query!!
                  </p>
                </div>
              </div>
              <a href=" https://wa.link/p4fzjj">
                <button className="button contact__card-button">
                  Call Now
                </button>
              </a>
            </div>

            <div className="contact__card-box">
              <div className="contact__card-info">
                <i className="bx bxs-message-rounded-dots"></i>

                <div>
                  <h3 className="contact__card-title">Chat</h3>
                  <p className="contact__card-description">
                    Got Stuck! <br /> chat with us now.
                  </p>
                </div>
              </div>
              <a href="https://wa.link/p4fzjj">
                <button className="button contact__card-button">
                  Chat Now
                </button>
              </a>
            </div>

            <div className="contact__card-box">
              <div className="contact__card-info">
                <i className="bx bxl-whatsapp"></i>

                <div>
                  <h3 className="contact__card-title">Community</h3>
                  <p className="contact__card-description">
                    Join our community to get daily updates!
                  </p>
                </div>
              </div>
              <a href="https://chat.whatsapp.com/ByVqHoAghwr7M7dkoFpQZC">
                <button className="button contact__card-button">
                  Join Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
