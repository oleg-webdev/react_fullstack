import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Partials
import Header from './Header';
import Footer from './Footer';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Survey = () => <h2>Survey</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

	componentDidMount() {
		this.props.fetchUser();
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
						<Route exact path="/" component={Home} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/surveys/" component={Survey} />
						<Route path="/surveys/new" component={SurveyNew} />
            <Footer/>
					</div>
				</BrowserRouter>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return { auth: state.auth }
}
// mapDispatchToProps = actions
export default connect( mapStateToProps, actions)(App)