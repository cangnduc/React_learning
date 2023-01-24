import React from "react";
export default function Toggle() {
	const [stage, setStage] = React.useState(true);
	
	
	function handleClick() {
		
	}
	return (
		<div>
			<WindowSize />
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}
function WindowSize() {
    const [width, setWidth] = React.useState(window.innerWidth);
    console.log(width)
    React.useEffect(() => {
        window.addEventListener('resize',function(){setWidth(pre => window.innerWidth)})
    },[width])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    );
}