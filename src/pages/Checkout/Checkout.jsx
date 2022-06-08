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
    const [lista, setLista] = useState(true)
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
        if (validateEmail(buyer.email, buyer.emailVerify) === true) {
            const items = products.map( i => {return {id: i.id, title: i.title, price: i.price, quantity: i.quantity}})
            const date = new Date()
            const total = totalPrice()
            const data = {buyer, items, date, total}
            generateOrder(data)
            cartCtxt.clear()
            setLista(false)
        }
    }

    const validateEmail = (email, emailVerify) => {
        if ((emailVerify === '') || (email !== emailVerify)) {
            return false
        } return true
    }


    return (
        <>
            <div className='checkout container-fluid d-flex col-11 p-0'>
                { lista ?
                (   <div className='col-6 pe-4'>
                        <h4>
                            Detalle productos
                        </h4>
                        <div className='card p-2 pb-0'>
                            <div>
                                {products.map(p => (
                                    <div className='d-flex justify-content-between'>
                                        <p className='col-6'>{p.title}</p>
                                        <p className='col-2 text-end'>Cantidad: {p.quantity}</p>
                                        <p className='col-4 text-end'>Precio Unitario: ${p.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className='container text-end p-2 bg-light'>Estás realizando una compra de { cartCtxt.cartQty() } unidades, por ${ cartCtxt.totalPrice() } </h6>
                            </div>
                        </div>
                    </div>
                )
                : null
                }
                
                <div className='container-fluid d-flex flex-column align-items-center'>
                    { isLoading ?
                    <Spinner animation='border' role='status' variant='secondary'>
                        <span className='visually-hidden'></span>
                    </Spinner>
                    : (!orderID && 
                        <div className='col-12'>
                            <h4 className=''>
                                Formulario pedido
                            </h4>
                            <form className='d-flex flex-column col-12 mt-2' onSubmit={handleSubmit}>
                                <p className='m-0'>Nombre y apellido:</p>
                                <input className='form-control mb-2'
                                    type='text'
                                    name='name'
                                    placeholder='Nombre y Apellido'
                                    value={name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className='m-0'>Teléfono:</p>
                                <input className='form-control mb-2'
                                    type='number'
                                    name='phone'
                                    placeholder='Teléfono'
                                    value={phone}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className='m-0'>Dirección de e-mail:</p>
                                <input className='form-control mb-2'
                                    type='email'
                                    name='email'
                                    placeholder='e-mail'
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'>Verifique su e-mail:</p>
                                    <>{ !validateEmail(email, emailVerify) ?
                                        <p className='m-0 ms-2 text-danger'>Por favor verifique su e-mail para continuar</p>
                                        : <p className='m-0 ms-2 text-success'>e-mail verificado</p>
                                    }</>
                                </div>
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
                                    className='btnAddSub p-2 mt-3'
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
                                    <button className='btnAddSub p-2 mt-2 px-4'>Continuar comprando</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Checkout