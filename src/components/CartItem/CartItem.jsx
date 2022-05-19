import React, { useContext } from 'react'
import CartContext from '../../context/cart-context'
import './CartItem.css'

function CartItem({ item }) {
    const cartCtxt = useContext(CartContext)

    return <>
        <div className='cartItemCard card shadow mt-2 mx-1 col-7'>
            <div className='d-flex justify-content-between h-100'>
                <div className='cartImgCard d-flex justify-content-center col-5'>
                    <img src={ item?.pictureUrl } className='card-img-top img-fluid h-100 w-auto' alt='Imagen producto'/>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-end p-3 col-7'>
                    <h5 className='card-body card-title p-0'>{ item?.title }</h5>
                    <div className='card-body d-flex flex-column justify-content-end p-0'>
                        <div className='d-flex flex-column align-items-end'>
                            <p className='card-text mb-0'>Precio: ${ item?.price }</p>
                            <p className='card-text'>Cantidad: { item?.quantity }</p>
                            <div className='d-flex col-12'>
                                <button className='btnAddSub p-2 w-100 d-flex justify-content-center me-2' onClick={() => cartCtxt.removeItem(item.id)} ><i class="bi bi-dash-circle-fill p-1"></i></button>
                                <button className='btnAddSub p-2 d-flex justify-content-center w-100' onClick={() => cartCtxt.removeItemComplete(item.id)} ><i class="bi bi-x-circle-fill p-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CartItem