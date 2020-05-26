import React, { Component } from 'react'

 class EventBinding extends Component {

    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
             message: 'Hello EventBinding'
        }
    }
    

     clickHandler(){
         this.setState({
            message: 'GoodBye EventBinding'
         })
        console.log(this);
        
     }

     clickHandler2 = () =>{
         this.setState({
             message: 'GoodBye EventBinding using Arrow func as class props'
         })
     }

    render() {
        return (
            <div>
            <h5 className="text-white">{this.state.message}</h5>
                <button onClick={this.clickHandler.bind(this)}>Click using bind(this)</button>
                <button onClick={() => {this.clickHandler()}}>clickHandler using arrow func</button>
                <button onClick={this.clickHandler}>clickHandler using ctor</button>
                <button onClick={this.clickHandler2}>clickHandler using arrow func as class props</button>
            </div>
        )
    }
}

export default EventBinding
