import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/cart-context'
import '../ItemCount/ItemCount.css'

function ItemDetail ({ item }) {
    const cartCtxt = useContext(CartContext)

    function addHandler(quantityToAdd) {
        cartCtxt.addItem({ quantity: quantityToAdd, ...item })
    }

    return <>
        <div className='d-flex justify-content-center'>
            <div className='itemCardDet card shadow mt-2 d-flex flex-row col-8 p-1'>
                <div className='col-6 d-flex align-items-center'>
                    <img src={ item?.pictureUrl } className='card-img-top img-fluid h-auto' alt='Imagen producto'/>
                </div>
                <div className='card-body d-flex flex-column justify-content-between col-6'>
                    <h4 className='card-title'>{ item?.title }</h4>
                    <p className='card-text'>{ item?.description }</p>
                    <div className='d-flex flex-column align-items-center'>
                        <h5 className='card-text pb-4'>Precio: ${ item?.price }</h5>
                        <div className=''>
                            <ItemCount stock={ item?.stock } initial={ 1 } onAdd={ addHandler } />
                            <div className='d-flex mt-2'>
                                <div className='w-100 me-1'>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => console.log(cartCtxt.isInCart(item.id))} >En Carrito</button>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => console.log(cartCtxt.cartQty())} >Total en Carrito</button>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => console.log(cartCtxt.products)} >Imprimir Carrito</button>
                                </div>
                                <div className='w-100 ms-1'>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => cartCtxt.removeItem(item.id)} >Remover 1U</button>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => cartCtxt.removeItemComplete(item.id)} >Remover Item</button>
                                    <button className='btnAddSub p-2 mb-2 w-100' onClick={() => cartCtxt.clear()} >Vaciar Carrito</button>
                                </div>
                            </div>
                            
                            {cartCtxt.products.length ?
                                <button className='btnAddSub p-2 w-100'>
                                    <Link to={'/cart'}>
                                        Finalizar compra ({ cartCtxt.cartQty() } items)
                                    </Link>
                                </button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetail