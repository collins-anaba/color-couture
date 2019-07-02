import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import CheckOutStripe from './components/CheckoutStripe/CheckOutStripe';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Logout from './components/Logout/Logout';
import NavBar from './components/NavBar/NavBar';
import NewCustomer from './components/New Customer/NewCustomer';
import Contact from './components/Contact/Contact';
import ContactForm from './components/Contact/ContactForm';



export default (
    <Switch>
        <Route path='/Login'  exact component={Login}/>
        <Route path= '/Help' exact component={Help}/>
        <Route path= '/Cart' exact component={Cart}/>
        <Route path= '/CheckoutStripe' exact component={CheckOutStripe}/>
        <Route path= '/About' exact component={About}/>
        <Route path= '/Admin' exact component={Admin}/>
        <Route path= '/Logout' exact component={Logout}/>
        <Route path= '/NavBar' exact component={NavBar}/>
        <Route path= '/NewCustomer' exact component={NewCustomer}/>
        <Route path= '/Contact' exact component={Contact}/>
        <Route path='/ContactForm' exact component={ContactForm} />
        <Route exact path="/"  component={Home}/>

    </Switch>
)