import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HeaderLightLayer, HeaderBackLayer, LaptopDevice } from '../../img';
import { FindUs } from './partials/FindUs';
import { SimpliestWaySection } from './partials/SimpliestWaySection';

import Footer from '../Footer';

class Home extends Component {

  state = {
    searchTerm: 'Debug statement...'
  }

  renderAuthContent() {
    if (this.props.auth) {
      return (
        <div className={'alert alert-success'}>
          <p>Is authenticated.</p>
        </div>
      );
    }

    return (
      <div className={'alert alert-danger'}>
        <p>Not authenticated.</p>
      </div>
    );

  }

  render() {
    return (
      <div className="Home-scope">
        <img src={HeaderLightLayer} className="white-layer" alt="layer-1"/>
        <img src={HeaderBackLayer} className="cloudy-layer" alt="layer-2"/>
        <div className="container home-banner">
          <div className="row">
            <div className="col-md-6 slogan-column">
              <div className="hgroup">
                <h2>Do you want to</h2>
                <h2><strong>impress</strong> your clients?</h2>
                <br/>
                <NavLink
                  to={'/contact-us'}
                  className={'button-gradient'}>
                  <span>You can hire us!</span>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 device-column">
              <img src={LaptopDevice} className="device-laptop" alt="device"/>
            </div>
          </div>

          <FindUs>Reach more about us from external sources</FindUs>
          <SimpliestWaySection/>
        </div>
        <Footer>
          <p>Custom Homepage footer text</p>
        </Footer>
      </div>
    )
  }

}

// state.auth, state.session
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Home);