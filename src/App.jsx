import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';

function App() {
  return <>
    <NavBar />
    <ItemListContainer txt='Texto de prueba para contenedor' />
  </>
}

export default App;
