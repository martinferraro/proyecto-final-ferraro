import React from 'react'
import dbProducts from '../../assets/dbProducts.js'

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const item = dbProducts.filter(item => item.id === parseInt(id))
        console.log(item)
        setTimeout(() => {
            resolve(item[0]); /* Devuelvo 1 único ítem de la lista (que de por sí tiene 1 solo ítem) */
        }, 2000);
    });
    return myPromise;
}

export default getItem