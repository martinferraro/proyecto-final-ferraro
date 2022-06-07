import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart-context'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'

import './Checkout.css'
import { clear } from '@testing-library/user-event/dist/clear'

const Checkout = () => {
    const [isLoading, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    const cartCtxt = useContext(CartContext)

    const db = getFirestore();

    const {products, totalPrice} = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        emailVerify: '',
        phone: ''
    })

    const {name, email, emailVerify, phone} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value,
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db, 'orders')
            const order = await addDoc(col, data)
            setOrderID(order.id)
            clear()
            setLoad(false)
        }
        catch (err) {
            console.log(err)
            setLoad(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(buyer.email, buyer.emailVerify) == true) {
            const items = products.map( i => {return {id: i.id, title: i.title, price: i.price, quantity: i.quantity}})
            const date = new Date()
            const total = totalPrice()
            const data = {buyer, items, date, total}
            generateOrder(data)
            cartCtxt.clear()
        } else alert('Por favor, verifique su e-mail')
    }

    const validateEmail = (email, emailVerify) => {
        if (email !== emailVerify) {
            return false
        } return true
    }


    return (
        <>
            <div className='checkout container-fluid d-flex flex-column align-items-center'>
                { isLoading ?
                <Spinner animation='border' role='status' variant='secondary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
                : (!orderID && 
                    <div className='col-5'>
                        <h4 className=''>
                            Finalización de compra
                        </h4>
                        <h5>Completar datos:</h5>
                        <form className='d-flex flex-column col-12' onSubmit={handleSubmit}>
                            <input className='form-control mb-2'
                                type='text'
                                name='name'
                                placeholder='Nombre y Apellido'
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                            <input className='form-control mb-2'
                                type='number'
                                name='phone'
                                placeholder='Teléfono'
                                value={phone}
                                onChange={handleInputChange}
                                required
                            />
                            <input className='form-control mb-2'
                                type='email'
                                name='email'
                                placeholder='e-mail'
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                            <input className='form-control mb-2'
                                type='email'
                                name='emailVerify'
                                placeholder='Ingrese nuevamente su e-mail'
                                value={emailVerify}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type='submit'
                                value='Finalizar compra'
                                className='btnAddSub p-2 mb-2'
                            />
                        </form>
                    </div>)
                }
                {
                    orderID && (
                        <div className='d-flex flex-column align-items-center'>
                            <h4 className=''>Transacción finalizada con éxito</h4>
                            <h6>¡Gracias por tu compra!</h6>
                            <h6>{`Tu código de seguimiento es el ${orderID}`}</h6>
                            <Link to='/'>
                                <button className='btnAddSub p-2 mt-2'>Continuar comprando</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Checkout