import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import {BrowserRouter} from "react-router-dom"
import Main from './components/Main/Main';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
