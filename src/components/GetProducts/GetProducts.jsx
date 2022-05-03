import React from 'react'
import dbProducts from '../../assets/dbProducts.js';

function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
        const productsFilter = category ? dbProducts.filter(p => p.category === category) : dbProducts
        setTimeout(() => {
            resolve(productsFilter);
        }, 2000);
    });
    return myPromise;
};

export default getProducts