import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {
        //FIRST METHOD- USING IF ELSE STATEMENT
        // if (this.state.isLoggedin) {
        //     return <div>Welcome Wasif</div>
            
        // }
        // else
        //     {return <div>Welcome Guest</div>}

        //SECOND METHOD- USING JAVASCRIPT VARIABLE
        // let message
        // if (this.state.isLoggedin) {
        //     message = <div>Welcome Wasif</div>
            
        // }
        // else
        //     {message = <div>Welcome Guest</div>}
        // return(
        //     <div>{message}</div>
        // )

        //THIRD METHOD- TERNARY OPERATOR
         return(
             <div><h4>ConditionalRendering:</h4>
             {this.state.isLoggedin ? (<div>Welcome Wasif</div>) :  (<div>Welcome Guest</div>)}</div>
            

       
        )
         //FOURTH METHOD- SHORT CIRCUIT OPERATOR
         
        //  return(
             
        //     this.state.isLoggedin && <div>Welcome Wasif</div>)

        
    }
}

export default ConditionalRendering
