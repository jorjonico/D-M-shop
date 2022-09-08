import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
        </Routes>
    <ItemDetailContainer/>
    </BrowserRouter>
  );
}

export default App;