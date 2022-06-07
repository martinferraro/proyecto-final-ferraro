import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import CartContext from '../../context/cart-context'
import './Cart.css'

function Cart() {
    const cartCtxt = useContext(CartContext)

    return <>
        <div className="cart container-fluid d-flex flex-column col-lg-6 col-md-12">
            <div className="d-flex flex-column align-items-center">
                {cartCtxt.products.map(p => <CartItem item={ p } key={ p.id }/>)}
            </div>
            {cartCtxt.products.length !== 0 ?
                <div className="contTotal container d-flex flex-column col-4 mt-3 align-items-center">
                    <h5>Importe total: ${ cartCtxt.totalPrice() }</h5>
                    <div className='w-100 ms-1'>
                        <button className='btnAddSub p-2 mb-2 w-100' onClick={() => cartCtxt.clear()} >Vaciar Carrito</button>
                    </div>
                    <div className='w-100 ms-1'>
                        <Link to='/checkout'>
                            <button className='btnAddSub p-2 mb-2 w-100' >Finalizar compra</button>
                        </Link>
                    </div>
                </div> : 
                <div className='d-flex flex-column align-items-center'>
                    <h4 className='my-3'>El carrito se encuentra vacío</h4>
                    <Link to='/'>
                        <button className='btnAddSub p-2 mb-2'>Inicio</button>
                    </Link>
                </div>
            }
        </div>
    </>
}

export default Cart