import React, { Component } from "react";

class ImgComponent extends Component {
	render() {
		return (
			<a href={this.props.href} target="_blank" rel="noopener noreferrer">
				<img className={this.props.className} src={this.props.src} alt={this.props.alt} style={this.props.style} />;
			</a>
		);
	}
}

export default ImgComponent;
