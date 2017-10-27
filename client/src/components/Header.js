import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {

	renderContent() {
		const auth = this.props.auth
		switch (auth) {
			case null:
				return
			case false:
				return <li><a href="/auth/google">Login with google</a></li>
			default:
				return <li><a href="/auth/logout">Logout</a></li>
		}
	}

	render() {
		return (
			<header>
				<nav>
					<div className="nav-wrapper container">
						<a href="/" className="brand-logo">Logo</a>

						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="/">Login</a></li>
							{this.renderContent()}
						</ul>

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

export default connect(mapStateToProps)(Header)