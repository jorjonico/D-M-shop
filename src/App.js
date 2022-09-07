import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import ItemListContainer from './components/ItemListContainer'; */
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <div>
    <NavBar/>
    {/* <ItemListContainer greeting="Hola Mundo ItemListContainer !!!"/> */}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;