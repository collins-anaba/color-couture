import React, { Component} from "react";
import logo from './images/logo.jpg';



export default class NavBar extends Component {
 constructor(){
     super();
     this.state = {
         toggle: 'toggle-menu'
     }
 }

 render(){
     return (
         <nav>
             <img src={logo}/>
             <ul>

             </ul>
         </nav>
     )
 }
}