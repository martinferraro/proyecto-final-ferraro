import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'

function App() {
  return <>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/catalogo' element={<Catalogo/>} />
      <Route path='/detalle' element={<Detalle/>} />
    </Routes>
    <NavBar />
    <ItemListContainer txt = 'Prueba contador'/>
  </>
}

export default App;
