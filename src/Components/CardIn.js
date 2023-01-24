import React from "react";
export default function CardIn(props) {
    
    const isGood = props.isFilled ? "Assets/images/card/star-filled.png":"Assets/images/card/star-empty.png"
    return <img onClick={props.handleClick} src = {isGood} />
}