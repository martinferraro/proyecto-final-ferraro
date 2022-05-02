import React from 'react';
import bdProducts from '../../db/dbProducts';

function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
        const productList = bdProducts
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });
    return myPromise;
};

export default getProducts