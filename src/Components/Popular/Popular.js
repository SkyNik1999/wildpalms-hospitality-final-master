import React from 'react';
import { Link } from 'react-router-dom';
import ImageSwiper from './ImageSwiper';

const Popular = () => {

  return (
    <section className="section" id="popular">
      <div className="container">
        <span className="section__subtitle">Best Choise</span>
        <h2 className="section__title">
          Popular Residences<span>.</span>
        </h2>
        <div className="popular__container">
          <ImageSwiper />
        </div>
        <div className="wrapper">
          <Link to={'/listing'} className="contact__card-button2">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular;
