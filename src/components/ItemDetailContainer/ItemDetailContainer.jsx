import React, { useState, useEffect }  from 'react'
import getItem from '../GetItem/GetItem'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer () {
    getItem()

    const [item, setItem] = useState([]);
    
    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
    }, {});

    return <>
    <div className='itemDetailContainer'>
        <ItemDetail items={ item } />
    </div>
</>
}

export default ItemDetailContainer