import React from 'react';
import hero from '../../Assets/3 bhk siolim/3bhk Siolim locations-04.png';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="hero__container container grid">
        <div className="hero__data">
          <h1 className="hero__title">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="hero__description">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>
          <SearchBar/>

          <div className="hero__value">
            <div>
              <h1 className="hero__value-number">
                20 <span>+</span>
              </h1>
              <span className="hero__value-description">
                Premium <br /> Properties
              </span>
            </div>

            <div>
              <h1 className="hero__value-number">
                2K <span>+</span>
              </h1>
              <span className="hero__value-description">
                Happy <br /> Customer
              </span>
            </div>

            <div>
              <h1 className="hero__value-number">
                2K <span>+</span>
              </h1>
              <span className="hero__value-description">
                Starting <br /> Price
              </span>
            </div>
          </div>
        </div>

        <div className="hero__images">
          <div className="hero__orbe"></div>

          <div className="hero__img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
