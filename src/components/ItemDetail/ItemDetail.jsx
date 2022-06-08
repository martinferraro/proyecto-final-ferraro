import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/cart-context'
import Spinner from 'react-bootstrap/Spinner'

import '../ItemCount/ItemCount.css'
import './ItemDetail.css'

function ItemDetail ({ item, isLoading }) {
    const cartCtxt = useContext(CartContext)

    function addHandler(quantityToAdd) {
        cartCtxt.addItem({ quantity: quantityToAdd, ...item })
    }

    return <>
    { isLoading ?
        <div className='d-flex justify-content-center'>
            <Spinner animation='border' role='status' variant='secondary'>
                <span className='visually-hidden'></span>
            </Spinner>
        </div>
        :
        <div className='contDetail d-flex justify-content-center'>
            <div className='itemCardDet card shadow mt-2 d-flex flex-row col-8 p-1'>
                <div className='col-6 d-flex align-items-center'>
                    <img src={ item?.pictureUrl } className='card-img-top img-fluid h-auto w-auto' alt='Imagen producto'/>
                </div>
                <div className='card-body d-flex flex-column justify-content-between col-6'>
                    <h4 className='card-title'>{ item?.title }</h4>
                    <p className='card-text'>{ item?.description }</p>
                    <div className='d-flex flex-column align-items-center'>
                        <h5 className='card-text pb-4'>Precio: ${ item?.price }</h5>
                        <div className=''>
                            <ItemCount stock={ item?.stock } initial={ 1 } onAdd={ addHandler } />
                            {cartCtxt.products.length ?
                                <Link to={'/cart'}>
                                    <button className='btnAddSub p-2 w-100 mt-2'>Ver en carrito ({ cartCtxt.cartQty() } items)</button>
                                </Link> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    </>
}

export default ItemDetail