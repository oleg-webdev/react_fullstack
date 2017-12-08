import React from 'react';
import { PhoneDevice, PhoneDevice2 } from '../../../img/';

export const HomepageSectionLiveMockups = ({ children }) => {

  return (
    <div className="HomepageSectionLiveMockups-scope">
      <div className="squared-area-left"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mobile-phones-column">
            <img id="phone-device" src={PhoneDevice} alt="phone-device"/>
            <img id="phone-device-2" src={PhoneDevice2} alt="phone-device"/>
          </div>
          <div className="col-md-6 text-scope">
            {children}
          </div>
        </div>
      </div>
      <div className="squared-area-right"></div>
    </div>
  );

}
