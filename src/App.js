import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext';
const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:idCategory' element={<ItemListContainer />}/>
              <Route path='/color/:idColor' element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='*'element={<h3 className='m-5 text-black-50 d-flex justify-content-center'>404</h3>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;