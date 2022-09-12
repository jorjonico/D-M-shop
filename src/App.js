import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:idCategory' element={<ItemListContainer />}/>
            <Route path='/color/:idColor' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='*'element={<p>404</p>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;