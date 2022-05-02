import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../../components/GetProducts/GetProducts'
import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        getProducts(category)
            .then(res => {
                setProducts(res);
            })
    }, [category]);

    return <>
        <div className='itemListContainer'>
            <ItemList items={ products } />
        </div>
    </>
}

export default ItemListContainer