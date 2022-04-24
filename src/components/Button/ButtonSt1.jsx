import React from 'react';
import './ButtonSt1.css';

function ButtonSt1({txt}) {
    return (
        <a className='btnGeneral' href=''>{txt ? txt : 'Default'}</a>
    )
}

export default ButtonSt1