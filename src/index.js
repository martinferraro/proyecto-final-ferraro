import React from 'react'
import ReactDOM from 'react-dom'
import { initializeApp } from 'firebase/app'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cart-context'

const firebaseConfig = {
  apiKey: "AIzaSyB5NEc_1jzc_mXL0Pm7sbL9VtOjjsGvnwc",
  authDomain: "proyecto-final-ferraro.firebaseapp.com",
  projectId: "proyecto-final-ferraro",
  storageBucket: "proyecto-final-ferraro.appspot.com",
  messagingSenderId: "88495944032",
  appId: "1:88495944032:web:933a931b9712e076de6e05",
  measurementId: "G-VP013S7V7C"
};

const app = initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
