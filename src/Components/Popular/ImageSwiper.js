import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';
import { getPopularProperties } from '../../ApiFunctions/Properties-Api';

const ImageSwiper = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPopularProperties();

        setData(response.data);

      } catch (error) {
        console.error('Error fetching properties', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView="auto"
      //   centeredSlides={true}
      className="mySwiper"
    >
      {data?.map((e, i) => (
        <SwiperSlide key={i} style={{ width: '300px' }}>
          <ImageSwiperComponent
            key={i}
            id={e.key}
            image={e.pictures[0]}
            rate={e.pricePerDay}
            type={e.name}
            location={e.location}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageSwiperComponent = ({ id, image, rate, location, type }) => {

  const navigate = useNavigate()
  const handleClick = () => {    
    navigate(`/details/${id}`);
  };
  return (
    <article
      className="popular__card swiper-slide"
      style={{ width: '300px', marginBottom: '50px' }}
      onClick={handleClick}
    >
      <img src={image} alt="aff" className="popular__img" />

      <div className="popular__data">
        <h2 className="popular__price">
          <span>₹</span>
          {rate}/night
        </h2>
        <h3 className="popular__title">{type}</h3>
        <p className="popular__description">{location}</p>
      </div>
    </article>
  );
};

export default ImageSwiper;
