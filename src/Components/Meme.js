import React from "react";
import data from "../data";

export default function Meme() {
	const [sData, setsData] = React.useState({});
	const [imgObject, setImgObject] = React.useState({
		topText: "",
		bottomText: "",
		url: "https://i.imgflip.com/30b1gx.jpg",
	});

	function getMemeImage() {
		const randomNum = Math.floor(Math.random() * 100);
		const urls = sData.data.memes[randomNum].url;
		setImgObject((preItem) => ({
			...preItem,
			url: urls,
		}));
	}
	function handleChange(event) {
		const { name, value } = event.target;
		setImgObject((preItem) => ({
			...preItem,
			[name]: value,
		}));
	}
	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((response) => setsData(() => response))
			.catch((error) => console.error(error));
	}, [0]);

	return (
		<main className="main">
			<div className="formMeme">
				<input
					type="text"
					placeholder="first textt"
					onChange={handleChange}
					name="topText"
					value={imgObject.topText}
				/>
				<input
					type="text"
					placeholder="second textt"
					onChange={handleChange}
					name="bottomText"
					value={imgObject.bottomText}
				/>
				<button onClick={getMemeImage} className="btn-form">
					New Image
				</button>
			</div>
			<div className="meme">
				<img src={imgObject.url} className="img-source" />

				<p className="meme-text top">{imgObject.topText}</p>
				<p className="meme-text bottom">{imgObject.bottomText}</p>
			</div>
		</main>
	);
}
