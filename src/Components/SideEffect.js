import React from "react";
export default function SideEffect() {
	const [weather, setWeather] = React.useState({});
	const [time, setTime] = React.useState(0);
	React.useEffect(
		function () {
			setInterval(() => {
				setTime((old) => old + 1);
			}, 10000);

			if (time > 10) {
				setTime(0);
			}
			console.log(time);
			fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
				.then((response) => response.json())
				.then((response) => setWeather(() => response))
				.catch((err) => console.error(err));
		},
		[time]
	);

	return <div>{JSON.stringify(weather, null, 2)}</div>;
}
