import React from 'react'
import { createPortal } from 'react-dom'

const PortalDemo = () => {
    return createPortal(
        <div >
            <h1 >Portal Demo</h1>
        </div>
        , document.getElementById('portal-root')
    )
}

export default PortalDemo
