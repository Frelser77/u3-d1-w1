import React, { Component } from "react";

function TitleComponent(props) {
	return <h1 style={props.style}>{props.textTitle}</h1>;
}

export default TitleComponent;
