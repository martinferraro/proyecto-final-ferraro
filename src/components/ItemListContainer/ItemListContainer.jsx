import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import getProducts from '../GetProducts/GetProducts'

function ItemListContainer() {
    getProducts()
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res);
            })
    }, []);

    return <>
        <div className='itemListContainer'>
            <ItemList items={ products } />
        </div>
    </>
}

export default ItemListContainer