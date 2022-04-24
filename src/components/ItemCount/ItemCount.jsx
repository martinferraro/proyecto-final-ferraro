import './ItemCount.css';
import React, { useState } from 'react';

function ItemCount({ stock, initial,  onAdd }) {
    const [count, setCount] = useState(initial)
    const [stockVar, setStock] = useState(stock)
    const [isDisabled, setDisabled] = useState(false)

    function onAdd() {
        if (count < stockVar > 0) {
            console.log(count + ' añadidas al carrito')
            console.log((stockVar - count) + ' en stock')
            setStock(stockVar - count)
        } else if (count > stockVar > 0) {
            console.log(stockVar + ' añadidas al carrito')
            console.log('Stock agotado')
            setStock(0)
            setDisabled(true)
        } else {
            console.log(count + ' añadidas al carrito')
            console.log('Stock agotado')
            setStock(0)
            setDisabled(true)
        }
    }

    function sumaCant() {
        if (count < stockVar) {
            setCount(count + 1)
        }
    }

    function restaCant() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return <>
        <div className='d-flex flex-column col-2'>
            <div className='d-flex flex-row align-items-center justify-content-between mb-2'>
                <button className='btnAddSub' onClick={() => restaCant()}><i class='bi bi-dash-circle-fill'/></button>
                <p className='m-0 mx-3'>{count}</p>
                <button className='btnAddSub' onClick={() => sumaCant()}><i class='bi bi-plus-circle-fill'/></button>
            </div>
            <button className='btnAddSub p-2' onClick={() => onAdd()} disabled={isDisabled}>Agregar al Carrito</button>
        </div>
    </>
}

export default ItemCount