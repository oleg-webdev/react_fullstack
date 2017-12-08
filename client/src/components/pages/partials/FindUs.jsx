import React from 'react';
import {
  LinkedinLogoMonochrome,
  BehanceLogo,
  FacebookLogo,
  UpworkLogoMonochrome,

} from '../../../img';

export const FindUs = ({children}) => {

  return (
    <div className="FindUs-scope container">
      <div className="row logos-row align-content-center justify-content-center">
        <a href={"https://www.linkedin.com/in/oleg-webdev-76726996/"}
           target="_blank"
           className="col-md-2 d-flex justify-content-center align-content-center">
          <img src={LinkedinLogoMonochrome} alt="logo-google"/>
        </a>
        <a href={"https://www.upwork.com/agencies/~01ff8f39fa966463d7"}
          target="_blank"
          className="col-md-2 d-flex justify-content-center align-content-center">
          <img src={UpworkLogoMonochrome} alt="logo-upwork"/>
        </a>
        <a href={"https://www.facebook.com/BillWebStudio/"}
           target="_blank"
           className="col-md-2 d-flex justify-content-center align-content-center">
          <img src={FacebookLogo} alt="logo-facebook"/>
        </a>
        <a href={"https://www.behance.net/bws_designs/"}
           target="_blank"
           className="col-md-2 d-flex justify-content-center align-content-center">
          <img src={BehanceLogo} alt="logo-behance"/>
        </a>
      </div>
      <div className="clearfix text-center">
        <p>{children}</p>
      </div>
    </div>
  );

}
