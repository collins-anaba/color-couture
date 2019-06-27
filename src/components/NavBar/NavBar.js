import React, { Component} from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';
import Axios from "axios";

export default class NavBar extends Component {
 constructor(){
     super();
     this.state = {
            menuStatus: 'closed'
         }
    }

    handleClick = () => {
        if(this.menuStatus === 'open'){
            this.setState({
                menuStatus: 'closed'
            })
        } else {
            this.setState({
                menuStatus: 'open'
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
         <nav className='nav'>
             <header>
             <Link to='/'><img className='logo-image' src={logo} alt='logo'/></Link>
             </header>
             <div className='menu-button' onClick={()=> this.handleClick()}>
             <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
                 <img className='Hamburger-Image' 
                 src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                 alt='menu-button'/> 
            </div>
             <ul className='ul-1'>
                 <Link to='/Login'>Login</Link>
                 <Link to='Your Bag'>Your Bag</Link>
                 <Link to='Help'>Help</Link>
                 <Link to='About'>About</Link>
                 <Link to='/Logout' onClick={()=> this.handleLogOut()}>Logout</Link>
             </ul>
             <div className={'drop-down' + this.state.menuStatus}>
                 <ul className='drop-down-list'>
                 <Link to='/Login'>Login</Link>
                 <Link to='Your Bag'>Your Bag</Link>
                 <Link to='Help'>Help</Link>
                 <Link to='About'>About</Link>
                 <Link to='/Logout' onClick={()=> this.handleLogOut()}>Logout</Link>

                 </ul>
             </div>
         </nav>
        </div>
     )
 }
}