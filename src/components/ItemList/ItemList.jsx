import React from 'react'
import Item from '../Item/Item'
import Spinner from 'react-bootstrap/Spinner'

function ItemList ({ items, isLoading }) {
    return <>
    { isLoading ?
        <div className='d-flex justify-content-center'>
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'></span>
            </Spinner>
        </div>
        :
        <div className='itemList d-flex justify-content-center row'>
            {items.map(item => <Item item={ item } key={ item.id } />)}
        </div>
    }
    </>
}

export default ItemList
