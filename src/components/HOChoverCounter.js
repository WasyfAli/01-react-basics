import React, { Component } from 'react'
import withCounter from './hocWithCounter'

 class HOChoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCounter = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1}
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h5 onMouseOver={this.incrementCounter}>{this.props.name} Hovered {count} times</h5>
            </div>
        )
    }
}

export default withCounter(HOChoverCounter)
