import React from 'react'
import Item from '../Item/Item'

function ItemList ({ items }) {
    return <>
        <div className='itemList container-fluid row m-0 p-2'>
            {items.map(item => <Item item={ item } key={ item.id } />)}
        </div>
    </>
}

export default ItemList
