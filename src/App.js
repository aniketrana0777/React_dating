import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route ,} from 'react-router-dom';
import Nav from './Componentes/Nav';
import Footer from './Componentes/Footer';
import IMG from './Componentes/IMG';
import Cart from './Componentes/Cart';
import Product from './Componentes/Product';
import ProductList from './Componentes/ProductList';
import React, { useState } from 'react';
import Singup from './Singin/Singup';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <Router>
    <Nav></Nav>
    <Routes>
    <Route path='/' element={<IMG/>}></Route>
    </Routes>
    
    <Routes>
    <Route path='/contact' element={<Singup></Singup>}></Route>
    </Routes>

    
    <Routes>
    <Route path='/price' element={<ProductList addToCart={addToCart}></ProductList>}></Route>
    </Routes>

<Routes>
    <Route path="/Cart" element={<Cart cart={cart} />}>
    </Route>
    </Routes>
    
    <Routes>
    <Route path="/product" element={<Product />}>
    </Route>
    </Routes>
    </Router>

    
    
    <Footer></Footer>
     
    </div>
   
  );
}

export default App;
