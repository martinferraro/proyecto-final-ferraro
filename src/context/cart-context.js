import { createContext, useState } from 'react'

const CartContext = createContext({
    products: [],
    addItem: () => {},
    removeItem: () => {},
    removeItemComplete: () => {},
    clear: () => {},
    isInCart: () => {},
    cartQty: () => {}
})

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([])

    const addItem = (product) => {
        const prodIndexAdd = productList.findIndex(item => item.id === product.id)
        if(prodIndexAdd !== -1) {
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p))
        } else {
            setProductList([product, ...productList])
        }
    }

    const removeItem = (id) => {
        const itemIndexRemove = productList.findIndex(item => item.id === id);
        if (itemIndexRemove === -1) {
            return console.log('El item no se encuentra en el carrito');
        } else if (productList[itemIndexRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id));
        } else if (productList[itemIndexRemove].quantity > 1) {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    const removeItemComplete = (id) => {
        const itemIndexRemove = productList.findIndex(item => item.id === id);
        if (itemIndexRemove === -1) {
            return console.log('El item no se encuentra en el carrito');
        } else {
            setProductList(productList.filter(i => i.id !== id))
        }
    }

    const clear = () => {
        setProductList([])    
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1
    }

    const cartQty = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    return (
        <CartContext.Provider value={{
                products: productList,
                clear,
                addItem,
                removeItem,
                removeItemComplete,
                isInCart,
                cartQty
            }}>
                { children }
        </CartContext.Provider>
    )
}

export default CartContext