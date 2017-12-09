import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HeaderLightLayer, HeaderBackLayer, LaptopDevice } from '../../img';
import { FindUs } from './partials/FindUs';
import { SimpliestWaySection } from './partials/SimpliestWaySection';
import { HomepageSectionLiveMockups } from './partials/HomepageSectionLiveMockups';
import Footer from '../Footer';

import { TweenMax } from 'TweenMax';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

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

  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const totalScenes = [];

    // Laptop Animation
    totalScenes.push(new ScrollMagic.Scene({
        triggerElement: this.laptop.parentElement,
      })
        .setTween(TweenMax.from(this.laptop, 1, { x: -100, opacity: 0 }))
    );

    // Banner words
    totalScenes.push(new ScrollMagic.Scene({
        triggerElement: this.slogan.parentElement,
      })
        .setTween(TweenMax.staggerFrom(
          ReactDOM.findDOMNode(this.slogan).querySelectorAll('*'), 1,
          { x: -100, opacity: 0 }, 0.25))
    );

    // Banner front layer parallax
    totalScenes.push(new ScrollMagic.Scene({ triggerHook: 0, duration: 800 })
        .setTween(TweenMax.to( this.layer1, .3, {y: 150}))
      );
    // Banner back layer parallax
    totalScenes.push(new ScrollMagic.Scene({ triggerHook: 0, duration: 900 })
        .setTween(TweenMax.to( this.layer2, .3, {y: 80}))
      );


    if (totalScenes.length > 0) {
      controller.addScene(totalScenes)
    }
  }

  render() {
    return (
      <div className="Home-scope">

        <img
          ref={layer1 => this.layer1 = layer1}
          src={HeaderLightLayer} className="white-layer" alt="layer-1"/>

        <img
          ref={layer2 => this.layer2 = layer2}
          src={HeaderBackLayer} className="cloudy-layer" alt="layer-2"/>

        <div className="home-banner">

          <div className="container">
            <div className="row">
              <div className="col-md-6 slogan-column">
                <div className="hgroup" ref={slogan => this.slogan = slogan}>
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
                <img
                  ref={laptop => this.laptop = laptop}
                  src={LaptopDevice} className="device-laptop" alt="device"/>
              </div>
            </div>
          </div>


          <FindUs>Reach more about us from external sources</FindUs>
          <SimpliestWaySection/>
          <HomepageSectionLiveMockups>
            <h3>Display your product as never before</h3>
            <p>Get all the benefits of an in-wall or in-ceiling speaker system without any of the hassle. Just replace a
              few lights around your house, and start streaming crisp, clear audio, everywhere.</p>
          </HomepageSectionLiveMockups>

          <div className="container">
            <div className="col-md-12 text-scope-wide">
              <h3 className="text-center">Lorem ipsum dolor sit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam aut autem consectetur
                culpa distinctio dolores facere ipsa maxime necessitatibus nihil possimus quaerat qui reprehenderit
                repudiandae similique tempore vero! Deleniti minus nisi quo, tempore totam vero. Dignissimos ex quo
                suscipit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur magni molestias, nesciunt
                nisi nulla odio odit porro quia repudiandae? A ea id illum laborum, optio perspiciatis saepe? Esse,
                illum!</p>
            </div>
            <div className="space-x-100"></div>
          </div>
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