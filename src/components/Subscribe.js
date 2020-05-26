import React, {Component} from 'react';

class Subscribe extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Hello Wasyf'
        }

       
        }
        messageChange() {
            this.setState({
                message: 'ThankYou for Subscribing..!'
            })
        }
    render(){
        return(
            <div>
            <h1 className="text-white">{this.state.message}</h1>
            <button onClick={() => this.messageChange()}>Click here to subscribe...</button>
        </div>
        )
        
    }
}
export default Subscribe;