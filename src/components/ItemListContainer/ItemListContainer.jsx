import './ItemListContainer.css'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({txt}) {
    return <>
        <div className='itemListContainer d-flex justify-content-center px-3 py-2'>{txt}</div>
        <div className='d-flex justify-content-center'>
            <ItemCount stock={10} initial={1}/>
        </div>
    </>
}

export default ItemListContainer