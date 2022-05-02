import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import ItemPage from './pages/item'

function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/:category' element={<Category />} />
      <Route path='/item/:id' element={<ItemPage />} />
    </Routes>
  </>
}

export default App;
