import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item ({ item }) {
    return <>
        <div className='itemCard card shadow mt-2'>
            <div className='imgCard d-flex justify-content-center'>
                <img src={ item?.pictureUrl } className='card-img-top img-fluid' alt='Imagen producto'/>
            </div>
            <h5 className='card-body card-title pb-0 mb-0'>{ item?.title }</h5>
            <div className='card-body d-flex flex-column justify-content-end'>
                <div className='d-flex justify-content-end mb-3'>
                    <p className='card-text'>Precio: ${ item?.price }</p>
                </div>
                <Link className='btnAddSub p-2 px-3' to={{pathname: `/item/${item.id}`}}>Ver detalle</Link>
            </div>
        </div>
    </>
}

export default Item