import React from 'react'
import './Item.css'

function Item ({ item }) {
    return <>
        <div className='itemCard card shadow mt-2'>
            <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
            <div className='card-body d-flex flex-column justify-content-end'>
                <h5 className='card-title'>{ item?.title }</h5>
                <div className='d-flex justify-content-end mb-3'>
                    <p className='card-text'>Precio: ${ item?.price }</p>
                </div>
                <a href='#' className='btnAddSub p-2 px-3'>Ver detalle</a>
            </div>
        </div>
    </>
}

export default Item