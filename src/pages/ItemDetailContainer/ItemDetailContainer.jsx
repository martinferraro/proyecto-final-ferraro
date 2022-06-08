import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getItem from '../../components/GetItem/GetItem'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const [isLoading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        getItem(id)
            .then(snapshot => {
                setItem({ ...snapshot.data(), id: snapshot.id })
                setLoading(false)
            })
            .catch(
                err => console.log(err)
            )

    }, [id]);

    return <>
        <div className='itemDetailContainer'>
            <ItemDetail isLoading ={isLoading} item={ item } />
        </div>
    </>
}

export default ItemDetailContainer