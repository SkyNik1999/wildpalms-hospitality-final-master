import React from 'react';
import Crackerjack from '../../Assets/Crackerjack HR.png';
import Mesa from '../../Assets/Mesa de trabajo 1@4x.png';
import Adtrade from '../../Assets/adtrade.png';

const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        <div className="logos__img">
          <img src={Crackerjack} alt="" />
        </div>

        <div className="logos__img">
          <img src={Mesa} alt="" />
        </div>
        <div className="logos__img">
          <img src={Adtrade} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
