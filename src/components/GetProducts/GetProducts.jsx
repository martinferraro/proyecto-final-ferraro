import React from 'react'
import dbProducts from '../../assets/dbProducts.js';

function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
        const productList = dbProducts
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });
    return myPromise;
};

export default getProducts