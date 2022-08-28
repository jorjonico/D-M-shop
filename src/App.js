import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting="Hola Mundo ItemListContainer !!!"/>
    </div>
  );
}

export default App;