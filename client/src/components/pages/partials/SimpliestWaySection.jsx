import React from 'react';
import {
  CurveIcon,
  Folders,
  FontIconExample,
  Themable
} from '../../../img/';

export const SimpliestWaySection = () => {

  return (
    <section className="SimpliestWaySection-scope content-scope">
      <div className="container content-scope">
        <div className="row">
          <div className="col-md-6 text-scope">
            <h3>The simplest way to have a professioanal webpage.</h3>
            <p>Get all the benefits of an in-wall or in-ceiling speaker system without any of the hassle. Just replace a few lights around your house, and start streaming crisp, clear audio, everywhere.</p>
          </div>
          <div className="col-md-6 boxes-wrapper">
            <div className="four-boxes">
              <div className="box large">
                <p>Amazing design</p>
                <div className="inner-content">
                  <img src={CurveIcon} alt="pencil-icon"/>
                </div>
              </div>
              <div className="box">
                <p>Multilingual</p>
                <div className="inner-content">
                  <img src={FontIconExample} alt="pencil-icon"/>
                </div>
              </div>
            </div>
            <div className="four-boxes">
              <div className="box">
                <div>
                  <p>Customizable</p>
                  <div className="inner-content">
                    <img src={Themable} alt="pencil-icon"/>
                  </div>
                </div>
              </div>
              <div className="box large">
                <p>Well organized</p>
                <div className="inner-content">
                  <img src={Folders} alt="pencil-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );

}
