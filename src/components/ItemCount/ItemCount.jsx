import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    function sumaCant() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function restaCant() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return <>
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                <button className='btnAddSub' onClick={() => restaCant()}><i className='bi bi-dash-circle-fill'/></button>
                <p className='m-0 mx-3'>{count}</p>
                <button className='btnAddSub' onClick={() => sumaCant()}><i className='bi bi-plus-circle-fill'/></button>
            </div>
            <button className='btnAddSub p-2' onClick={() => (count <= stock) && onAdd(count)}>Agregar al Carrito</button>
        </div>
    </>
}

export default ItemCount