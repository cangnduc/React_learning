import React from "react";
export default function Practice() {
	const [index, setIndex] = React.useState(0);
	function Button({ title, href, onClick }) {
		let Component = "button";
		let props = {};
		if (href) {
			Component = "a";
			props.href = href;
		}
		if (onClick) {
			props.onClick = onClick;
		}
		return <Component {...props}>{title}</Component>;
	}

	console.log(index);
	return (
		<Button
            
			title="click me"
			href="www.google.com"
			onClick={() => setIndex((pre) => pre + 1)}
		/>
	);
}
