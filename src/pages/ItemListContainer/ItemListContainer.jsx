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
        .then(snapshot => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch(
            err => console.log(err)
        )

    }, [category])

    return <>
        <div className='itemListContainer container'>
            <ItemList items={ products } />
        </div>
    </>
}

export default ItemListContainer