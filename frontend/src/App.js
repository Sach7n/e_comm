import React from 'react';
import { Route, Routes,BrowserRouter as Router  } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Cart from '../src/Pages/Cart';
import ProductList from '../src/Pages/ProductList';
import AddProductScreen from '../src/Pages/AddProductScreen';
import Navigation from "./Components/Navigation"
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';


const App = () => {
  return (
    <Router>
      <Navigation/>
      <Container>
        <main className='py-3'>
          
          <Routes>
            <Route exact path="/" element={<ProductList/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/signIn" element={<SignIn/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/admin/addProduct" element={<AddProductScreen/>} />


          </Routes>
        </main>
      </Container>
    </Router>
  );
};

export default App;