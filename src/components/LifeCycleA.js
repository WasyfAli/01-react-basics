import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'wasif'
        }
        console.log("LifeCycleA Constructor()")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps()")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount()")
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')

    }
    changeState = () => {
        this.setState({
            name: "Wasif ali"
        })
    }
    render() {
     console.log("LifeCycleA render()")
        return (
            <div>
                LifeCycleA ParentComponent
                <button onClick={this.changeState}>Click to change tge state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
