import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
    function getProducts() {
        const myPromise = new Promise((resolve, reject) => {
            const productList = [
                    {
                        id: 1,
                        title:'Crema Facial Uso Diario 275ml',
                        category:'Cuidados de la piel',
                        price: 3200,
                        stock: 10,
                        pictureUrl: require('../../assets/cre_1.png')
                    },
                    {
                        id: 2,
                        title:'Crema Facial Uso Diario 125ml',
                        category:'Cuidados de la piel',
                        price: 2200,
                        stock: 10,
                        pictureUrl: require('../../assets/cre_1.png')
                    },
                    {
                        id: 3,
                        title:'Crema Facial Rejuvenecedora 125ml',
                        category:'Cuidados de la piel',
                        price: 2900,
                        stock: 10,
                        pictureUrl: require('../../assets/cre_rejuv.png')
                    },
                    {
                        id: 4,
                        title:'Crema Corporal Hidratante 320ml',
                        category:'Cuidados de la piel',
                        price: 2800,
                        stock: 10,
                        pictureUrl: require('../../assets/cre_hidrat.png')
                    },
                    {
                        id: 5,
                        title:'Crema Corporal Urea 275ml',
                        category:'Cuidados de la piel',
                        price: 3100,
                        stock: 10,
                        pictureUrl: require('../../assets/cre_urea.png')
                    },
                    {
                        id: 6,
                        title:'Base Maquillaje 35g',
                        category:'Maquillaje',
                        price: 1250,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_base.png')
                    },
                    {
                        id: 7,
                        title:'Base Maquillaje 60g',
                        category:'Maquillaje',
                        price: 2000,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_base.png')
                    },
                    {
                        id: 8,
                        title:'Rimmel Profesional 80cc',
                        category:'Maquillaje',
                        price: 2750,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_rim2.png')
                    },
                    {
                        id: 9,
                        title:'Rimmel Profesional 40cc',
                        category:'Maquillaje',
                        price: 1900,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_rim1.png')
                    },
                    {
                        id: 10,
                        title:'Labial Rojo Pasión',
                        category:'Maquillaje',
                        price: 2100,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_lab1.png')
                    },
                    {
                        id: 11,
                        title:'Labial Verde Esmeralda',
                        category:'Maquillaje',
                        price: 2100,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_lab2.png')
                    },
                    {
                        id: 12,
                        title:'Labial Rojo Carmesí',
                        category:'Maquillaje',
                        price: 2250,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_lab3.png')
                    },
                    {
                        id: 13,
                        title:'Labial Rosa Eighties',
                        category:'Maquillaje',
                        price: 2000,
                        stock: 10,
                        pictureUrl: require('../../assets/maq_lab4.png')
                    },
                    {
                        id: 14,
                        title:'Shampoo + Acondicionador 175ml',
                        category:'Cuidados del cabello',
                        price: 900,
                        stock: 10,
                        pictureUrl: require('../../assets/cab_sham1.png')
                    },
                    {
                        id: 15,
                        title:'Shampoo Anticaspa 220ml',
                        category:'Cuidados del cabello',
                        price: 650,
                        stock: 10,
                        pictureUrl: require('../../assets/cab_sham2.png')
                    },
                    {
                        id: 16,
                        title:'Crema de Enjuague 220ml',
                        category:'Cuidados del cabello',
                        price: 1550,
                        stock: 10,
                        pictureUrl: require('../../assets/cab_acond1.png')
                    },
                    {
                        id: 17,
                        title:'Aceite Masajeador Capilar 75ml',
                        category:'Cuidados del cabello',
                        price: 1100,
                        stock: 10,
                        pictureUrl: require('../../assets/cab_aceite.png')
                    },
                    {
                        id: 18,
                        title:'Protector Solar FPS30 175ml',
                        category:'Protectores solares',
                        price: 1750,
                        stock: 10,
                        pictureUrl: require('../../assets/piel_fps30.png')
                    },
                    {
                        id: 19,
                        title:'Protector Solar FPS50 175ml',
                        category:'Protectores solares',
                        price: 1350,
                        stock: 10,
                        pictureUrl: require('../../assets/piel_fps50.png')
                    },
                    {
                        id: 20,
                        title:'Protector Solar Pantalla FPS60 175ml',
                        category:'Protectores solares',
                        price: 2100,
                        stock: 10,
                        pictureUrl: require('../../assets/piel_fps60.png')
                    }
                ];
            setTimeout(() => {
                resolve(productList);
            }, 2000);
        });
        return myPromise;
    };
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res);
            })
    }, []);

    return <>
        <div className='itemListContainer m-0 p-0'>
            <ItemList items={ products } />
        </div>
    </>
}

export default ItemListContainer