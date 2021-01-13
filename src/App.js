import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import {BrowserRouter} from "react-router-dom"
import Main from './components/Main/Main';
import CartContextProvider from './Context/CartContext'

function App() {
  return (
    <BrowserRouter>

      <CartContextProvider>
        <NavBar/>
        <Main/>
      </CartContextProvider>
        
    </BrowserRouter>
  );
}

export default App;
