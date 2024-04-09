import React, { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getPropertyByKey } from "../../ApiFunctions/Properties-Api";
// import "./style.css";

const Swiper = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);
  const {key} = useParams();
  const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPropertyByKey(key);
        console.log("response", response?.[0]?.pictures);
        setData(response?.[0]?.pictures);
      } catch (error) {
        console.error("Error fetching blog:", error.message);
      }
    };

    fetchData();
  }, [key]);

  return (
    <div className="Swipercode">
      {/* Left navigation button */}
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}
      >
        <FaAngleLeft/>
      </button>
      {/* Image container */}
      <div className="images-container" ref={sliderRef}>
        {data.map((image, i) => {
          return (
            <img className="modal__img" alt="sliderImage" key={i} src={image} />
          );
        })}
      </div>
      {/* Right navigation button */}
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; // Scroll right by the specified amount
        }}
      >
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default Swiper;
