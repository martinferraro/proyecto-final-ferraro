import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/df_logo_icono.svg'
import ButtonSt1 from '../Button/ButtonSt1'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return <>
        <nav className='navBar'>
            <Link className='contLogo ms-3' to={'/'}><img className='logoNav' src={Logo} alt='Daniela Ferraro'/></Link>
            <ul className='navMenu m-0'>
                <Link className='menuItem' to={'/category/:category'}>Skin Care</Link>
                <Link className='menuItem' to={'/category/:category'}>Maquillaje</Link>
                <Link className='menuItem' to={'/category/:category'}>Cabello</Link>
                <Link className='menuItem' to={'/category/:category'}>Protectores</Link>
            </ul>
            <div className='d-flex align-items-center'>
                <ButtonSt1 txt='Login' />
                <CartWidget />
            </div>
        </nav>
    </>
}

export default NavBar