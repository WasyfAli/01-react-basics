import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'wasif'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'wasif'
            })
        }, 10000)
    }
    
    render() {
        console.log('************************Parent Component**********************')
        return (
            <div>
                Implentation of Pure Component:Parent Component
                 <PureComp name={this.state.name}/>
                 <RegComp name={this.state.name}/>
                 <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
