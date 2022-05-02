import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({ item }) {
    console.log(item)
    return <>
    <div className='d-flex justify-content-center'>
        <div className='itemCardDet card shadow mt-2 d-flex flex-row col-8'>
            <div className='col-6'>
                <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
            </div>
            <div className='card-body d-flex flex-column justify-content-start col-6'>
                <h4 className='card-title'>{ item?.title }</h4>
                <h6 className='card-text'>Precio: ${ item?.price }</h6>
                <p className='card-text'>{ item?.description }</p>
                <ItemCount initial={0} stock={item?.stock} onAdd={''}/>
            </div>
        </div>
    </div>
        
    </>
}

export default ItemDetail