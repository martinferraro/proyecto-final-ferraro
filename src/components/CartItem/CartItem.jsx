import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import Bubble from '../Bubble/Bubble'
import './CartItem.css'

function CartItem({ item }) {
    const cartCtxt = useContext(CartContext)

    return <>
        <div className='card shadow mt-2 mx-1 col-6'>
            <div className='d-flex justify-content-between'>
                <div className='cartImgCard d-flex justify-content-center'>
                    <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
                </div>
                <div className='d-flex flex-column justify-content-between'>
                    <h5 className='card-body card-title pb-0 pe-0 mb-2 me-3'>{ item?.title }</h5>
                    <div className='card-body d-flex flex-column justify-content-end'>
                        <div className='d-flex flex-column align-items-end mb-1'>
                            <p className='card-text mb-0'>Precio: ${ item?.price }</p>
                            <p className='card-text'>Cantidad: { item?.quantity }</p>
                            <div className='bubbleRemove'>
                                <Bubble isButton onBubbleClick={() => cartCtxt.removeItem(item.id)}><i className='bi bi-dash-circle-fill'/></Bubble>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CartItem