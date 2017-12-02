import React, { Component } from 'react'

class Footer extends Component {


	render() {
		const footerText = this.props.children ||
			<p>Footer content Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		return (
			<footer className="page-footer">
				<div className="text-center">
          {footerText}
				</div>
			</footer>
		)
	}

}

export default Footer