import React, { Component } from 'react';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import './App.css';
import './reset.css'
import Home from './components/Home';
import NavBar from "./components/NavBar";



class App extends Component  {
  
   render() {
     return (
    <HashRouter>
      {routes}

    </HashRouter>
  );
}
}

export default App;
