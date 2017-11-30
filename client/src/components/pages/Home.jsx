import React, { Component } from 'react'
import { connect } from 'react-redux';
import layer1 from '../../img/header-white-layer.png';
import layer2 from '../../img/header-layer-under.png';
import device from '../../img/header-laptop-device.png';

class Home extends Component {

  state = {
    searchTerm: 'Debug statement...'
  }

  renderAuthContent() {
    if(this.props.auth) {
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

  componentDidMount() {

  }

  render() {
    return (
      <div className="Home-scope">
        <img src={layer1} className="white-layer" alt="layer-1"/>
        <img src={layer2} className="cloudy-layer" alt="layer-2"/>
        <div className="container home-banner">
          <div className="row">
            <div className="col-md-6 slogan-column">
              <div className="hgroup">
                <h2>Do you want to</h2>
                <h2><strong>impress</strong> your clients?</h2>
                <br/>
                <a href="" className={'button-gradient'}>
                  <span>Get early access</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 device-column">
              <img src={device} className="device-laptop" alt="device"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

// state.auth
function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Home);