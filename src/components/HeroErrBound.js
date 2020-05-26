import React from 'react'

const HeroErrBound = ({heroname}) => {
    if(heroname === 'joker')
    {
        throw new Error('Not a Hero')
    }
    return (
        <div>
            
            <h1>{heroname}</h1>
        </div>
    )
}

export default HeroErrBound
