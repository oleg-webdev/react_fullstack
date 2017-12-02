import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { BWSBrandMonochrome } from '../img';

class Header extends Component {

  state = {
    scrolled: ''
  };

  componentDidMount() {

    let scrollTop = this.getScrollValue();

    scrollTop > 200 && this.setState({ scrolled: 'scrolled-header' })

    window.addEventListener('scroll', () => {
      scrollTop = this.getScrollValue();
      scrollTop > 200 ?
        this.setState({ scrolled: 'scrolled-header' }) :
        this.setState({ scrolled: '' })
    });
  }

  getScrollValue() {
    return (window.pageYOffset !== undefined) ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  renderContent() {
    const auth = this.props.auth
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">Login with google</a>
          </li>
        )
      default:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/logout">Logout</a>
          </li>
        )
    }
  }

  mainLink() {
    return this.props.auth ? '/dashboard' : '/';
  }

  render() {
    return (
      <header id={'app-header'} className={this.state.scrolled}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container align-items-lg-start">
            <Link className="navbar-brand" to={'/'}>
              <img src={BWSBrandMonochrome} alt="bws-brand"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
              <i className="material-icons">menu</i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    exact to={'/'}
                    className="nav-link"
                    activeClassName={'active'}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={'/contact-us'}
                    className="nav-link"
                    activeClassName={'active'}>Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={'/dashboard'}
                    className="nav-link"
                    activeClassName={'active'}>Dashboards</NavLink>
                </li>
                {this.renderContent()}
              </ul>
            </div>
          </div>

        </nav>
      </header>
    )
  }

}

// state.auth, state.session
function mapStateToProps({auth}) {
  return { auth }
}

export default withRouter(connect(mapStateToProps)(Header));