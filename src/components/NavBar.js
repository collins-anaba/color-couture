import React, { Component} from "react";
import logo from "../images/logo.png";
import { connect } from 'react-redux';

export default class NavBar extends Component {
 constructor(){
     super();
     this.state = {
         toggle: toggleMenu,

     }
 }

 render(){
     return (
         <nav>
             <img className='logo' src={logo} alt='logo'/>
             <ul>

             </ul>
         </nav>
     )
 }
}