import React, { Component , createRef} from 'react'
import InputRefs from './InputRefs';

class FocusInputRefs extends Component {
    constructor(props) {
        super(props)
    
       this.componentRefs = createRef();
    }
    clickhandler = () => {
        this.componentRefs.current.focusInputRefs()
    }
    render() {
        return (
            <div>
            <InputRefs ref={this.componentRefs} />
                <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInputRefs
