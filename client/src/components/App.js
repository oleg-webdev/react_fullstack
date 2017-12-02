import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Partials
import Header from './Header';
import Footer from './Footer';
import {Flashes} from './Flashes';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { ContactUs } from './pages/ContactUs';

const Survey = () => <h2>Survey</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSession()

  }

  sessionInfo() {
    return this.props.session ?
      this.props.session.flashMessage : false;
  }

  cleanFlashes() {
    const that = this;

    axios.post('/api/destroy_flashes')
      .then(() => {
        that.props.fetchSession()
      })

  }

  authInfoUser() {
    const auth = this.props.auth
    switch (auth) {
      case null:
        return
      case false:
        return `not logged`
      default:
        return `logged`
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Flashes ondestroyFlashes={this.cleanFlashes.bind(this)}
                     messages={this.sessionInfo()} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/contact-us" component={ContactUs}/>
            {/* Learning */}
            <Route exact path="/surveys/" component={Survey}/>
            <Route path="/surveys/new" component={SurveyNew}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

function mapStateToProps({auth, session}) {
  return { auth, session }
}

// mapDispatchToProps = actions
export default connect(mapStateToProps, actions)(App)