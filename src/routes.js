import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Help from './components/Help';
import NewCustomers from './components/NewCustomers';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import About from './components/About';
import Admin from './components/Admin/Admin';
import Payment from './components/Payment';
import Girls from './components/Girls';
import Boys from './components/Boys';



export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/Login'  exact component={Login}/>
        <Route path= '/Help' exact component={Help}/>
        <Route path= '/NewCustomers' exact component={NewCustomers}/>
        <Route path= '/Cart' exact component={Cart}/>
        <Route path= '/Checkout' exact component={CheckOut}/>
        <Route path= '/About' exact component={About}/>
        <Route path= '/Admin' exact component={Admin}/>
        <Route path= '/Payment' exact component={Payment}/>
        <Route path= 'Girls' exact component={Girls}/>
        <Route path= 'Boys' exact component={Boys}/>
    </Switch>
)