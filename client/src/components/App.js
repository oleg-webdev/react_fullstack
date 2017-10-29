import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Footer from './Footer'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {

	componentDidMount() {
		this.props.fetchUser()
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
				<Header/>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing}></Route>
						<Route exact path="/surveys" component={Dashboard}></Route>
						<Route path="/surveys/new" component={SurveyNew}></Route>
					</div>
				</BrowserRouter>
				<Footer/>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return { auth: state.auth }
}
// mapDispatchToProps = actions
export default connect( mapStateToProps, actions)(App)