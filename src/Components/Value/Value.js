import React from 'react';
import { Accordion } from '@chakra-ui/react';
import value from '../../Assets/Screenshot 2024-02-11 190022.png';
import { valueData } from '../../data';
import AccordionTab from './Accordion';
const Value = () => {
  return (
    <section className="value section" id="value">
      <div className="value__container container grid">
        <div className="value__images">
          <div className="value__orbe"></div>

          <div className="value__img">
            <img src={value} alt="" />
          </div>
        </div>

        <div className="value__content">
          <div className="value__data">
            <span className="section__subtitle">Our Services</span>
            <h2 className="section__title">
              Services We Give To You<span>.</span>
            </h2>
            <p className="value__description">
              At Wildpalms Hospitality, we're committed to enhancing your stay
              with a variety of services crafted for utmost comfort and
              convenience. Whether you're here for business or leisure, our
              array of amenities is designed to meet all your needs, ensuring a
              seamless and enjoyable experience.
            </p>
          </div>

          <div className="value__accordion">
            <Accordion allowToggle>
              {valueData.map((e, i) => (
                <AccordionTab
                  key={i}
                  icon={e.icon}
                  title={e.title}
                  content={e.content}
                  style={{ marginBottom: '10px' }}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
