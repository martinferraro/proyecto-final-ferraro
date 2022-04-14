import React from 'react';
import './NavBar.css';
import logo from '../assets/df_logo_icono.svg';
import Button from '../Button/Button';

function NavBar(props) {
    return (
        <nav className='navBar'>
            <a className='contLogo' href=""><img className='logoNav' src={logo} alt='Daniela Ferraro'/></a>
            <ul className='navMenu'>
                <li><a className="menuItem" href="">Maquillaje</a></li>
                <li><a className="menuItem" href="">Skin Care</a></li>
                <li><a className="menuItem" href="">Cabello</a></li>
                <li><a className="menuItem" href="">Productos LACA</a></li>
            </ul>
            <Button txt='Login'/>
        </nav>
    );
}

export default NavBar