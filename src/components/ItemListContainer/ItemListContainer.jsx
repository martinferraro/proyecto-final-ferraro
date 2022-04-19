import React from 'react'
import './ItemListContainer.css';

function ItemListContainer({txt}) {
    return (
        <div className='itemListContainer d-flex justify-content-center px-3 py-2'>{txt ? txt : 'Default'}</div>
    )
}

export default ItemListContainer