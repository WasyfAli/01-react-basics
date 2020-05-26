//Implementation of method as a props


import React from 'react'

export default function ChildComponent(props) {
    const {greetHandler} = props;
    return (
        <div><h5 className="text-white">Methods as a Props:</h5>
            <button onClick={() => greetHandler('child')}>Greet Parent</button>
        </div>
    )
}
