import React, { Component } from 'react'

class Header extends Component {


	render() {
		return (
			<header>
				<nav>
					<div className="nav-wrapper container">
						<a href="#" className="brand-logo">Logo</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="/">Login</a></li>
							<li><a href="/">Login with google</a></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}

}

export default Header