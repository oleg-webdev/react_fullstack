import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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

export default App