import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getAllProperties } from '../ApiFunctions/Properties-Api';
import { IoShareOutline } from 'react-icons/io5';

const Listing = () => {
  const propertyOptions = ['House', 'Cottage', 'Flat', 'Villa', 'Luxury Villa'];
  const newDate = new Date().toISOString().split('T')[0];

  const [data, setData] = useState([]);
  const [checkIn, setCheckIn] = useState(newDate);
  const [checkOut, setCheckOut] = useState(newDate);
  const [selectedType, setSelectedType] = useState('');

  const currentDomain = window.location.origin;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProperties();

        setData(response.data);

      } catch (error) {
        console.error('Error fetching properties', error.message);
      }
    };

    fetchData();
  }, []);

  const handleSelectProperty = option => {
    setSelectedType(option);
  };

  const handleShare = id => {
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
    <section className="section" id="listing">
      <div className="container">
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

          <div>
            <label>Property type</label>
            <select
              value={selectedType}
              onChange={e => handleSelectProperty(e.target.value)}
            >
              <option value="">Select an option</option>
              {propertyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Check Availability</button>
        </form>
        <div className="list-container">
          <div className="left-col">
            <span className="section__subtitle">Our Listings </span>
            <h2 className="section__title">
              Recommended places in Goa<span>.</span>
            </h2>
            {data?.map((e, i) => (
              <div className="house" key={i}>
                <div className="house-img">
                  <img src={e.pictures[0]} alt="" className="src" />
                </div>
                <div className="house-info">
                  <div className="info-container">
                    <p className="popular__description">{e.location}</p>
                    <button
                      className="share-button"
                      onClick={() => handleShare(e.key)}
                    >
                      <IoShareOutline className="share-icon" />
                    </button>
                  </div>
                  <h2>{e.name}</h2>
                  <i className="bx bx-male-female"></i> {e.maxPeople} Pax
                  <i className="bx bx-wind"></i> AC
                  <i className="bx bx-bed"></i> {e.maxBed} Bed
                  <i className="bx bx-bath"></i> 3 Bath
                  <i className="bx bx-wifi"></i> WIFI <br />
                  <i className="bx bx-restaurant"></i> Kitchen
                  <i className="bx bxs-car-garage"></i> Parking
                  <i className="bx bx-swim"></i> Pool
                  <br />
                  <div className=" star">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div>4.5 out of 5</div>
                  <div className="house-price">
                    <h3>
                      ₹ {e.pricePerDay} <span>/night</span>
                    </h3>
                    <Link
                      className="contact__card-button2"
                      to={`/details/${e.key}`}
                    >
                      View Property
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
