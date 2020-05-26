import React,{forwardRef} from 'react'

const FRInput = forwardRef((props, refs) => {
    return (
        <div>
            <label>Ref Forwarding</label>
            <input type="text" ref={refs}/>
        </div>
    )
}) 

export default FRInput
