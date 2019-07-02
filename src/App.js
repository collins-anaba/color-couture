import React, { Component } from 'react';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../src/redux/store';
import './App.scss';
import './reset.css'
import NavBar from './components/NavBar/NavBar';
import logo from './images/logo.png';
// import Home from './components/Home/Home';




class App extends Component  {
   render() {
     return (
    <HashRouter>
      <Provider store={store}>
      <div className='App'>
      <Link to="/"><img src={logo} alt='logo'/></Link>
        <NavBar/>
        {/* <Home/> */}
      {routes}
      </div>

      </Provider>
    </HashRouter>
  );
}
}

export default App;
