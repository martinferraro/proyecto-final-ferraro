import React from 'react'
import './Button.css';

function Button({txt}) {
    return (
        <a className='btnGeneral' href=''>{txt ? txt : 'Default'}</a>
    )
}

export default Button