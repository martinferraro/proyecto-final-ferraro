import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import CartContext from '../../context/cart-context'
import './Cart.css'

function Cart() {
    const cartCtxt = useContext(CartContext)

    return <>
        <div className="cart container d-flex flex-column align-items-center col-10">
            {cartCtxt.products.map(p => <CartItem item={ p } key={ p.id }/>)}
            {cartCtxt.products.length !== 0 ?
                <div className="contTotal container-fluid">
                    <p>Importe total carrito: ${ cartCtxt.totalPrice() }</p>
                </div> : 
                <>
                    <h4 className='my-3'>El carrito se encuentra vacío</h4>
                    <button className='btnAddSub p-2 mb-2 w-50'>
                        <Link to='/'>Inicio</Link>
                    </button>
                </>
            }
        </div>
    </>
}

export default Cart