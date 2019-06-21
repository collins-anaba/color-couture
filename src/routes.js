import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login/Login';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Girls from './components/Girls';
import Boys from './components/Boys';



export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/Login'  exact component={Login}/>
        <Route path= '/Help' exact component={Help}/>
        <Route path= '/Cart' exact component={Cart}/>
        <Route path= '/Checkout' exact component={CheckOut}/>
        <Route path= '/About' exact component={About}/>
        <Route path= '/Admin' exact component={Admin}/>
        <Route path= 'Girls' exact component={Girls}/>
        <Route path= 'Boys' exact component={Boys}/>
    </Switch>
)