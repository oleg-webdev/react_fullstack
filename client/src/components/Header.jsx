import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {

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
      <header id={'app-header'}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={this.mainLink()}>Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
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
                    exact to={'/dashboard'}
                    className="nav-link"
                    activeClassName={'active'}>Dashboard</NavLink>
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

// state.auth
function mapStateToProps(state) {
  return { auth: state.auth }
}

export default withRouter(connect(mapStateToProps)(Header));