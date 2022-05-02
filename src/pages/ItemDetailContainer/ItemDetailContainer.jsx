import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getItem from '../../components/GetItem/GetItem'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
    }, [id]);

    return <>
    <div className='itemDetailContainer'>
        <ItemDetail items={ item } />
    </div>
</>
}

export default ItemDetailContainer