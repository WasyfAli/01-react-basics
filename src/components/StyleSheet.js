import React from 'react'
import './myStyles.css'

const StyleSheet = (props) => {
    let primary = props.primary ? 'primary' : '';
    return (
        <div>
            <h4 className={`${primary} , font-xl`}>ExternalStyleSheets</h4>
            
        </div>
    )
}

export default StyleSheet
