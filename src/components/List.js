import React from 'react'

const List = ({person}) => {
    return (
        <div>
        <h2>{ person.name } & I am  {person.skills}</h2>
        </div>
    )
}

export default List
