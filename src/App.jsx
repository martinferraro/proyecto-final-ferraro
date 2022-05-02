import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:category' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
  </>
}

export default App;
