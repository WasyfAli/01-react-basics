import React, { Component } from 'react'

class ClassClickEvent extends Component {

   clickHandler() {
    console.log("Button Clicked-(Class Component)");
    alert("Button Clicked-(Class Component)")
   }

    render() {

        return (
            <div>
                <h6 className="text-white">Click Event In a Class Component:</h6>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClickEvent
