import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../../components/GetProducts/GetProducts'
import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        getProducts(category)
        .then(snapshot => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setLoading(false)
        })
        .catch(
            err => console.log(err)
        )
    }, [category])

    return <>
        <div className='itemListContainer container'>
            <ItemList isLoading ={isLoading} items={ products } />
        </div>
    </>
}

export default ItemListContainer