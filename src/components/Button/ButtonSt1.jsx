import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonSt1.css'

function ButtonSt1({txt}) {
    return <>
        <Link className='btnGeneral' to=''>{txt ? txt : 'Default'}</Link>
    </>
}

export default ButtonSt1