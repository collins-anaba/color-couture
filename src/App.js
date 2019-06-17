import React from 'react';
// import { HashRouter } from 'react-router-dom';
import './App.css';
import './reset.css'
import Home from './components/Home';
import NavBar from "./components/NavBar";


function App () {
    return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
