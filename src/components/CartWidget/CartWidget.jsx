import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

function CartWidget() {
    return <>
        <Link className='cartWidgetCont' to=''><i className="cartWidget bi bi-cart-fill d-flex align-items-center me-3"></i></Link>
    </>
}

export default CartWidget