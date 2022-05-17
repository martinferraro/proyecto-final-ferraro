import React from 'react'
import './Bubble.css'

function Bubble({ children, isButton, onBubbleClick }) {
    return <>
        <div className={`${isButton ? 'bubbleButton' : ''}`} onClick={() => isButton && onBubbleClick()}>
            { children }
        </div>
    </>
}

export default Bubble