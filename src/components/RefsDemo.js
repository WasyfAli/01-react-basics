import React, { Component, createRef } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs = createRef();
        this.callbackRefs = null;
        this.setCallbackRefs = (element) =>{
            this.callbackRefs = element;
        }
    }
    componentDidMount(){
        // this.inputRefs.current.focus();
        // console.log(this.inputRefs)
        if(this.callbackRefs){
            this.callbackRefs.focus()
        }
    }

    clickHandler = () => {
        alert(this.callbackRefs.value)
    }
    render() {
        return (
            <div>
                <label>Refs Demo:</label>
                <input type="text" ref={this.setCallbackRefs}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
