import React from 'react'
import { useParams } from 'react-router-dom'
import dbProducts from '../../db/dbProducts'

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const { idSel } = useParams()
        const selProd = dbProducts.find(prod => prod.id === idSel)
        setTimeout(() => {
            resolve(selProd);
        }, 2000);
    });
    return myPromise;
}

export default getItem