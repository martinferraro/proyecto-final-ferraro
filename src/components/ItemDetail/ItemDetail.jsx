import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import getItem from '../GetItem/GetItem'

function ItemDetail ({item}) {
    return <>
        <div className='itemCardDet card shadow mt-2 d-flex col-8'>
            <div className='col-8'>
                <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
            </div>
            <div className='card-body d-flex flex-column justify-content-start col-4'>
                <h4 className='card-title'>{ item?.title }</h4>
                <h6 className='card-text'>Precio: ${ item?.price }</h6>
                <p className='card-text'>Precio: ${ item?.description }</p>
                <ItemCount />
            </div>
        </div>
    </>
}

export default ItemDetail