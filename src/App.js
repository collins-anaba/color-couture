import React, { Component } from 'react';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './App.scss';
import './reset.css'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';




class App extends Component  {
   render() {
     return (
    <HashRouter>
      <Provider store={store}>
      <div className='App'>
        <NavBar/>
        <Home/>
      {routes}
      </div>

      </Provider>
    </HashRouter>
  );
}
}

export default App;
