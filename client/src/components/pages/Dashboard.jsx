import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard-scope container">
        <h3>Dashboard</h3>
      </div>
    );
  }

}

// state.auth
function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard);
