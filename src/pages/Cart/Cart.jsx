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
                <div className="contTotal container-fluid d-flex col-6 mt-3 align-items-center">
                    <h6 className='col-8'>Importe total carrito: ${ cartCtxt.totalPrice() }</h6>
                    <div className='w-100 ms-1'>
                        <button className='btnAddSub p-2 mb-2 w-100' onClick={() => cartCtxt.clear()} >Vaciar Carrito</button>
                    </div>
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