import React from 'react'
import Item from '../Item/Item'

function ItemList ({ items }) {
    return <>
        <div className='itemList d-flex justify-content-center row m-0 mb-2'>
            {items.map(item => <Item item={ item } key={ item.id } />)}
        </div>
    </>
}

export default ItemList
