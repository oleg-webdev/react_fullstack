import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Mdash1,
  Mdash2,
  Mdash3,
  Mdash4
} from '../../img';

import Footer from '../Footer';

class Dashboard extends Component {

  componentDidMount() {

  }

  authInfoUser() {
    const auth = this.props.auth
    switch (auth) {
      case null:
        return
      case false:
        return `not-logged`
      default:
        return `logged`
    }
  }

  renderAlertInfo() {
    if (this.authInfoUser() === 'logged') {
      return (
        <div>
          <div className={'alert alert-success text-center'}>
            <p>You, are logged in</p>
            <p>This is just dashboards examples and placeholders</p>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <img src={Mdash1} alt="dashboard-1" className="img-fluid"/>
            </div>
            <div className="col-md-6 p-3">
              <img src={Mdash2} alt="dashboard-1" className="img-fluid"/>
            </div>
          </div>
        </div>

      )
    }

    return (
      <div className={'alert alert-info text-center'}>
        <p>You, are not logged in.</p>
        <p><a href="/auth/google">Authenticate with google.</a></p>
      </div>
    )
  }

  render() {
    return (
      <div className="Dashboard-scope">
        <div className={'container regular-page-scope'}>
          <h3>Dashboards Examples</h3>

          <div className="pt-2">{this.renderAlertInfo()}</div>

          <div className="row mt-1">
            <div className="col-md-6 p-3">
              <img src={Mdash3} alt="dashboard-1" className="img-fluid"/>
            </div>
            <div className="col-md-6 p-3">
              <img src={Mdash4} alt="dashboard-1" className="img-fluid"/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

}

// state.auth
function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
