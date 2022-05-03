import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail ({ item }) {
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
                    <div className='col-7'>
                        <ItemCount stock={ item?.stock } initial={ 1 } />
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
        
    </>
}

export default ItemDetail