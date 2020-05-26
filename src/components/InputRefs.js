import React, { Component, createRef } from 'react'

 class InputRefs extends Component {
     constructor(props) {
         super(props)
     
         this.inputRefs = createRef();
     }
     focusInputRefs(){
         this.inputRefs.current.focus();
     }
    render() {
        return (
            <div>
                <labe>refs in Class:</labe>
                <input type="text" ref={this.inputRefs}/>
            </div>
        )
    }
}

export default InputRefs
