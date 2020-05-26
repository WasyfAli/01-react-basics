import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'

        }
    }

 
    changeUsername = (event) => {
        this.setState({username: event.target.value})
    }
    changeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    topicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
    const {username, comments, topic} = this.state;
        
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h4>Controlled Forms in REACT</h4>
                <div>
                <label>Username: </label>
                <input type='text' value={username} onChange={this.changeUsername}/>
                </div>
                <div>
                <label>Comments: </label>
                <textarea value={comments} onChange={this.changeComments}/>
                </div>
                <div>
                <label>Topic: </label>
                <select value={topic} onChange={this.topicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>

                </select>
                <button type='submit'>Submit</button>
                </div>
                
            </form>
        )
    }
}

export default Form
