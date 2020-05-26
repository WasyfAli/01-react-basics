import React, { Component } from 'react'

class RenderPropHoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState((prevStae) => {
    //         return {count: prevStae.count + 1}
    //     })
    // }
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h4 onMouseOver={incrementCount}>Render Prop Hover {count} Times</h4>
            </div>
        )
    }
}

export default RenderPropHoverCounter
