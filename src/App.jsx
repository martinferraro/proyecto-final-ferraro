import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return <>
    <NavBar />
    <ItemListContainer txt = 'Prueba contador'/>
  </>
}

export default App;
