import React from 'react'
import dbProducts from '../../assets/dbProducts.js';

function getProducts(category) {
    const myPromise = new Promise((resolve, reject) => {
        const productList = dbProducts
        const productsFilter = category ? productList.filter(p => p.category === category) : productList
        setTimeout(() => {
            resolve(productsFilter);
        }, 2000);
    });
    return myPromise;
};

export default getProducts