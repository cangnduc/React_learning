import React, { Children } from "react";
export default function Practice() {
	const [index, setIndex] = React.useState(0);
	function Button({type, title, href, onClick,Children }) {
		let Component = type;
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
            type ='button'
			title="click me"
			href="www.google.com"
			onClick={() => setIndex((pre) => pre + 1)}
		></Button>
	);
}
