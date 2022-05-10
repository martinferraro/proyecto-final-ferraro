import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemCount/ItemCount.css'

function ItemDetail ({ item }) {
    const [cantidadProd, setCantidadProd] = useState(null);

    function addHandler(quantityToAdd) {
        setCantidadProd(quantityToAdd)
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
                            {cantidadProd ?
                                <button className='btnAddSub p-2'><Link to={'/cart'}>Finalizar compra <br/>({ cantidadProd } items)</Link></button> :
                                <ItemCount stock={ item?.stock } initial={ 1 } onAdd={addHandler}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetail