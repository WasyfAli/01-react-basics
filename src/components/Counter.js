import React, {Component} from 'react';
 
class Counter extends Component{
    constructor() {
        super();
        this.state ={
            count : 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count +1
        // }, ()=> {
        //     console.log(this.state.count);

            this.setState((prevState) => ({
                count: prevState.count + 1
            }), () => console.log(this.state.count)
            )
            
        }
       // console.log(this.state.count);
        
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    decrement(){
        this.setState({
            count: this.state.count  - 1
        })
    }
    

    render(){
        return(
            <div>
                <h1 className="text-white">Counter: {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default Counter;