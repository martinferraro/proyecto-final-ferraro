import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart-context'
import './Item.css'

function Item ({ item }) {
    const cartCtxt = useContext(CartContext)

    return <>
        <div className='itemCard card shadow mt-2 mx-1 p-0 col-lg-3 col-sm-8'>
            <div className='imgCard d-flex justify-content-center'>
                <img className='card-img-top w-auto' src={ item?.pictureUrl } alt='Imagen producto'/>
            </div>
            <h5 className='card-body card-title pb-0 mb-0'>{ item?.title }</h5>
            <div className='card-body d-flex flex-column justify-content-end'>
                <div className='d-flex justify-content-end mb-3'>
                    <p className='card-text'>Precio: ${ item?.price }</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <Link className='btnAddSub me-2 p-2 px-3 w-100' to={{pathname: `/item/${item.id}`}}>Detalle</Link>
                    <button className='btnAddSub' onClick={ () => cartCtxt.addItem({ quantity: 1, ...item }) }><i className="bi bi-cart-plus-fill"></i></button>
                </div>
            </div>
        </div>
    </>
}

export default Item