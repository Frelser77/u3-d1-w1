import React from "react";

function ButtonComponent(props) {
	return (
		<button className={props.className} style={props.style}>
			{props.text}
		</button>
	);
}

export default ButtonComponent;
