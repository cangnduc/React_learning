import React from "react";
import jokesdata from "../../../src/data/jokesData";
import Joke from "./Joke";
export default function Jokes() {
    
	const [jokes, setJokes] = React.useState(jokesdata);
    console.log(jokesdata)
	const jokesElement = jokes.map((joke) => (
		<Joke key={joke.id} description={joke.punchline} title={joke.setup} />
	));
	return <div>{jokesElement}</div>;
}
