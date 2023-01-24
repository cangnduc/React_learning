import React from "react";
export default function Joke(props) {
	const [isShow, setIsShow] = React.useState(false);
	function toggle() {
		setIsShow((preValue) => !preValue);
	}
	const message = isShow ? "Show puchline" : "Hide Punchline";
    const styles = {
        visibility: isShow? "hidden" : "visible"
    }
	return (
		<div>
			<h1>{props.title}</h1>
			<p style={styles}>{props.description}</p>
			<button onClick={toggle}>{message}</button>
		</div>
	);
}
