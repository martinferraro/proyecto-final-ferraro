import './NavBar.css'
import React from 'react'
import Logo from '../../assets/df_logo_icono.svg'
import ButtonSt1 from '../Button/ButtonSt1'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return <>
        <nav className='navBar'>
            <a className='contLogo ms-3' href=""><img className='logoNav' src={Logo} alt='Daniela Ferraro'/></a>
            <ul className='navMenu m-0'>
                <li><a className="menuItem" href="">Maquillaje</a></li>
                <li><a className="menuItem" href="">Skin Care</a></li>
                <li><a className="menuItem" href="">Cabello</a></li>
                <li><a className="menuItem" href="">Productos LACA</a></li>
            </ul>
            <div className='d-flex align-items-center'>
                <ButtonSt1 txt='Login' />
                <CartWidget />
            </div>
        </nav>
    </>
}

export default NavBar