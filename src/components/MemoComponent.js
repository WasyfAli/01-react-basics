import React,{memo} from 'react'

const MemoComponent = ({name}) =>{
    console.log("Memo Functional Component")

    return (
        <div>
            {name}
        </div>
    )
}

export default memo(MemoComponent);
