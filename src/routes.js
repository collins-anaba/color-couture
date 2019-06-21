import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import CheckOutStripe from './components/CheckoutStripe/CheckOutStripe';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Girls from './components/Girls';
import Boys from './components/Boys';
import Logout from './components/Logout/Logout';
import NavBar from './components/NavBar/NavBar';



export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/Login'  exact component={Login}/>
        <Route path= '/Help' exact component={Help}/>
        <Route path= '/Cart' exact component={Cart}/>
        <Route path= '/CheckoutStripe' exact component={CheckOutStripe}/>
        <Route path= '/About' exact component={About}/>
        <Route path= '/Admin' exact component={Admin}/>
        <Route path= 'Logout' exact component={Logout}/>
        <Route path= 'Girls' exact component={Girls}/>
        <Route path= 'Boys' exact component={Boys}/>
        <Route path= '/NavBar' exact component={NavBar}/>
    </Switch>
)