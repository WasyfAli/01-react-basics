import React from 'react'

const FunctionalClickEvent = () => {
const clickHandler = () => {
    console.log("Button Clicked-(Functional Component)");
    alert("Button Clicked-(Functional Component)")
    
}
    return (
        <div>
            <h4 className="text-white">Click Event In a Functional Component:</h4>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionalClickEvent
