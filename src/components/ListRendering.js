import React from 'react'
import List from './List'

const ListRendering = () => {

    const persons = [
        {
            id:1,
            name:'Tony',
            skills: 'Iron man'
            
        },
        {
            id:2,
            name:'Bruce',
            skills: 'Hulk'
            
        },
        {
            id:3,
            name:'Thor',
            skills: 'God of Thunder'
            
        }
    ]

    const personList = persons.map((person => 
        <List person = {person} />
        ))

    return  (
        <div>
        
        <h4>List Rendering Example:</h4>
        {personList}
            
        </div>
            
    )
       
        
    
}

export default ListRendering
// 