import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/cart-context'
import '../ItemCount/ItemCount.css'

function ItemDetail ({ item }) {
    const cartCtxt = useContext(CartContext)

    function addHandler(quantityToAdd) {
        cartCtxt.addItem({quantity: quantityToAdd, ...item})
    }

    return <>
        <div className='d-flex justify-content-center'>
            <div className='itemCardDet card shadow mt-2 d-flex flex-row col-8 p-1'>
                <div className='col-6'>
                    <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
                </div>
                <div className='card-body d-flex flex-column justify-content-between col-6'>
                    <h4 className='card-title'>{ item?.title }</h4>
                    <p className='card-text'>{ item?.description }</p>
                    <div className='d-flex flex-column align-items-center'>
                        <h5 className='card-text pb-4'>Precio: ${ item?.price }</h5>
                        <div className=''>
                            <ItemCount stock={ item?.stock } initial={ 1 } onAdd={addHandler} />
                            <button className='btnAddSub p-2' onClick={() => console.log(cartCtxt.products)} >Imprimir carrito</button>
                            <button className='btnAddSub p-2' onClick={() => cartCtxt.removeItem(item.id)} >Remove product</button>
                            <button className='btnAddSub p-2' onClick={() => cartCtxt.clear()} >Clear</button>
                            <button className='btnAddSub p-2' onClick={() => console.log(cartCtxt.isInCart(item.id))} >Is in cart</button>
                            <button className='btnAddSub p-2' onClick={() => console.log(cartCtxt.cartQty())} >Quantity</button>
                            {cartCtxt.products.length &&
                                <button className='btnAddSub p-2'>
                                    <Link to={'/cart'}>
                                        Finalizar compra <br/>({ cartCtxt.cartQty() } items)
                                    </Link>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetail