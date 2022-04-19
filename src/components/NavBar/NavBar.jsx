import React from 'react';
import './NavBar.css';
import logo from '../../assets/df_logo_icono.svg';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function NavBar(props) {
    return (
        <nav className='navBar'>
            <a className='contLogo ms-3' href=""><img className='logoNav' src={logo} alt='Daniela Ferraro'/></a>
            <ul className='navMenu m-0'>
                <li><a className="menuItem" href="">Maquillaje</a></li>
                <li><a className="menuItem" href="">Skin Care</a></li>
                <li><a className="menuItem" href="">Cabello</a></li>
                <li><a className="menuItem" href="">Productos LACA</a></li>
            </ul>
            <div className='d-flex align-items-center'>
                <Button txt='Login'/>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar