import React from "react";
import CountIn from "./Countin";
export default function Count() {
    const [value, setValue] = React.useState(0)
    function counterPlus() {
        setValue(preNum => preNum+ 1)
    }
    function counterMinus() {
        setValue(preNum => preNum- 1)
    }
    return (
        <div className="counter">
            <button onClick={counterPlus} className="counter-plus">Cong</button>
            <button onClick={counterMinus} className="counter-plus">tru</button>
            <CountIn value = {value}/>
        </div>
    )
}