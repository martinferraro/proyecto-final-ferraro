import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import { Link } from 'react-router-dom'
import Bubble from '../Bubble/Bubble'
import './CartWidget.css'

function CartWidget() {
    const cartCtxt = useContext(CartContext)

    return <>
        {cartCtxt.products.length ?
            <div className='cartWidgetCont'>
                <Link to='/cart'>
                    <i className="cartWidget bi bi-cart-fill me-3"></i>
                    <div className='bubbleQuantity'>
                        <Bubble>{ cartCtxt.cartQty() }</Bubble>
                    </div>
                </Link>
            </div>
            :
            <div className='cartWidgetEmptyContainer'></div>
        }
    </>
}

export default CartWidget