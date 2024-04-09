import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import nikhil from '../Assets/host/nikhil.jpg';
import Modal from '../Components/Modal/Modal';
import useModal from '../Components/Modal/useModal';
import { getPropertyByKey } from '../ApiFunctions/Properties-Api';
import {IoMdPhotos} from "react-icons/io"
import { IoLocationSharp, IoShareOutline } from 'react-icons/io5';
import { randomQuote } from '../data';


const Detail = () => {
  const newDate = new Date().toISOString().split('T')[0];
  const { key } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPropertyByKey(key);
        setData(response[0]);
      } catch (error) {
        console.error('Error fetching blog:', error.message);
      }
    };

    fetchData();
  }, [key]);

  const handleGetLocation = () => {
    window.open('https://wa.link/p4fzjj', '_blank');
  };

  const { isShowing, toggle } = useModal();
  const [checkIn, setCheckIn] = useState(newDate);
  const [checkOut, setCheckOut] = useState(newDate);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleShare = id => {

      const currentDomain = window.location.origin;

    // Assuming you have logic to get the URL of the next tab,
    // you can set it to nextTabUrl state
    const nextTabUrl = `${currentDomain}/details/${id}`;

    // Copy the URL to clipboard
    navigator.clipboard
      .writeText(nextTabUrl)
      .then(() => alert('Link copied to clipboard'))
      .catch(error => console.error('Failed to copy:', error));
  };
  return (
    <section className="section" id="Detail">
      <div className="house-details">
        <div className="house-title">
          <div className="house-title-div">
            <h2 className="section__title">
              {data?.name}
              <span>.</span>
            </h2>

            <button
              className="share-button"
              onClick={() => handleShare(data?.key)}
            >
              <IoShareOutline className="share-icon" /> Share
            </button>
          </div>
          <div className="row">
            <div>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <span>245 Reviews</span>
            </div>
            <div>
              <i className="bx bxs-map"></i>
              {data?.location}
            </div>
          </div>
          <div className="gallery">
            {data?.pictures
              ?.slice(0, showAllImages ? data?.pictures.length : 5)
              .map((picture, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? `gallery-img-1` : ''}`}
                >
                  <img src={picture} loading="lazy" alt="Property" />
                </div>
              ))}
            {data?.pictures?.length > 5 && !showAllImages && (
              <div className="blur-effect">
                <div className="gallery-img-6">
                  <img
                    src={data?.pictures[5]}
                    loading="lazy"
                    alt="Blurred"
                    style={{
                      border: '0',
                      filter: 'blur(5px)',
                    }}
                  />
                  <span className="see-more" onClick={toggle}>
                    <IoMdPhotos className="see-more-icon" />
                    See More...
                  </span>
                </div>
              </div>
            )}
          </div>

          <Modal isShowing={isShowing} hide={toggle} />

          <div className="small-details">
            <h2>Entire rental unit hosted by Wildpalms</h2>
            <i className="bx bx-male-female"></i> {data?.maxPeople} Pax
            <i className="bx bx-wind"></i> AC
            <i className="bx bx-bed"></i> {data?.maxBed} Bed
            <i className="bx bx-bath"></i> {data?.maxBath} Bath
            <i className="bx bx-wifi"></i> WIFI <br />
            <i className="bx bx-restaurant"></i> Kitchen
            <i className="bx bxs-car-garage"></i> Parking
            {data?.features?.isPool ? (
              <>
                <i className="bx bx-swim"></i> Pool
              </>
            ) : null}
            <br />
            <div className="house-price-1">
              <h3>
                ₹ {data?.pricePerDay}
                <span>/night</span>
              </h3>
            </div>
          </div>
          <hr className="line" />

          <form className="check-form">
            <div>
              <label>Check-in</label>
              <Input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <label>Check-out</label>
              <Input
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
              />
            </div>
            <div className="guest-field">
              <label>Guest</label>
              <Input type="number" placeholder="No. of Guests"></Input>
            </div>
            <button type="submit">Check Availability</button>
          </form>

          <ul className="details-list">
            <li>
              <i className="bx bx-home-alt"></i>Entire Home:
              <span>You will have the entire flat for you.</span>
            </li>
            <li>
              <i className="bx bx-paint"></i>Enhanced Clean:
              <span>This host has committed to airbnb's cleaning process.</span>
            </li>
            <li>
              <i className="bx bx-map"></i>Great Location:
              <span>
                90% of recent guests gave the location a 5 star rating.
              </span>
            </li>
            <li>
              <i className="bx bxs-heart"></i>Great Check-in Experience:
              <span>
                100% of recent guests gave the check-in process a 5 star rating.
              </span>
            </li>
          </ul>

          <hr className="line" />
          <h2>Description</h2>
          <p className="home-desc">{data?.description}</p>
          <hr className="line" />

          <div className="map">
            <h3>
              <i className="bx bx-map"></i> Location on map{' '}
            </h3>
            <div className="blurred-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2050.2044533843314!2d73.75598817577104!3d15.622264414935332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeb3745c2efe9%3A0x4a4ba7a8507d3529!2sFalcon%20villa!5e0!3m2!1sen!2sin!4v1709104126395!5m2!1sen!2sin"
                width="400"
                height="350"
                style={{
                  border: '0',
                  filter: 'blur(5px)',
                  pointerEvents: 'none',
                }} // Apply blur effect
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Button to get location */}
              <button
                className="get-location-button"
                onClick={handleGetLocation}
              >
                <IoLocationSharp className="get-location-icon" size={25} />
                Get Location
              </button>
            </div>
            <b>{data?.location}</b>
            <p>
              <i className="bx bxs-quote-alt-left"></i> {randomQuote()}{' '}
              <i className="bx bxs-quote-alt-right"></i>
            </p>
          </div>
          <hr className="line" />

          <div className="host">
            <img src={nikhil} alt='host' />
            <div>
              <h2>Hosted by Nikhil Gupta</h2>
              <p>
                <span>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                245 reviews
              </p>
            </div>
            <a href="#" className="contact-host">
              Contact Host
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
