import React, { Component} from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';
import Axios from "axios";

export default class NavBar extends Component {
 constructor(){
     super();
     this.state = {
            navMenu: 'closed'
         }
    }

    handleClick = () => {
        if(this.navMenu === 'open'){
            this.setState({
                navMenu: 'closed'
            })
        } else {
            this.setState({
                navMenu: 'open'
            })
        }
    }
    handleLogOut = () => {
        Axios.delete('/api/logout').then(response => {
            console.log(response)
        })
    }
 render(){
     return (
        <div className='logo'>
         <nav>
             <header>
             <Link to='/'><img className='logo' src={logo} alt='logo'/></Link>
             </header>
             <div className='menu-button' onClick={()=> this.handleClick()}>
                 <h5>MENU</h5>
                 <img className='hamburger-menu' 
                 src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                 alt='menu-button'/> 
            </div>
             <ul>
                 <Link to='/Login'>Login</Link>
                 <Link to='Your Bag'>Your Bag</Link>
                 <Link to='Help'>Help</Link>
                 <Link to='About'>About</Link>
             </ul>
             <div className={'drop-down' + this.state.navMenu}>
                 <ul className='drop-down-list'>
                 <Link to='/Login'>Login</Link>
                 <Link to='Your Bag'>Your Bag</Link>
                 <Link to='Help'>Help</Link>
                 <Link to='About'>About</Link>
                 </ul>
             </div>
         </nav>
        </div>
     )
 }
}