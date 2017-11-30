import React, { Component } from 'react'
import { connect } from 'react-redux';

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
      <div className="Home-scope container">
        <br/>

        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          {this.renderAuthContent()}
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="" role="button">Learn more</a>
          </p>
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