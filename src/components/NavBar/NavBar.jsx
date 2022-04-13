import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className='navBar'>
            <h3 className='brand'>Nombre tienda</h3>
            <ul className='navMenu'>
                <a class="menuItem" href="">CATEGORIA 1</a>
                <a class="menuItem" href="">CATEGORIA 1</a>
                <a class="menuItem" href="">CATEGORIA 1</a>
                <a class="menuItem" href="">CATEGORIA 1</a>
            </ul>
        </nav>
    );
}

export default NavBar