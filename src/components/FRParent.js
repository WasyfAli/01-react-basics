import React, { Component , createRef} from 'react'
import FRInput from './FRInput'

 class FRParent extends Component {
     constructor(props) {
         super(props)
     
         this.inputRefs = createRef();
     }
     clickHandler = () => {
         this.inputRefs.current.focus()
     }
     
    render() {
        return (
            <div>
                <FRInput ref={this.inputRefs}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParent
