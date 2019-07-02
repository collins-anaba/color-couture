import React, { Component} from "react";
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
        console.log(this.state.menuStatus)
        if(this.state.menuStatus === 'open'){
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
        <div className='header'>
         <nav>
             <header>
             </header>
             <div className='hamburger-container'onClick={()=> this.handleClick()}>
             <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
                 <img className='Hamburger-Image' 
                 src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png"
     alt='menu-button'/>
            </div>
             <ul className= 'ul-1'>
                 <Link to='/Login'>Login</Link>
                 <Link to='/Cart'>Your Bag</Link>
                 <Link to='/Help'>Help</Link>
                 <Link to='/About'>About</Link>
                 <Link to='/ContactForm'>Contact us</Link>
                 <Link to='/Logout' onClick={()=> this.handleLogOut()}>Logout</Link>
             </ul>
{this.state.menuStatus === 'open'? 
             <div className={'drop-down-open'}>
                 <ul className='drop-down-list'>
                 <Link to='/Login'>Login</Link>
                 <Link to='/Cart'>Your Bag</Link>
                 <Link to='/Help'>Help</Link>
                 <Link to='About'>About</Link>
                 <Link to='/ContactForm'>Contact us</Link>
                 <Link to='/Logout' onClick={()=> this.handleLogOut()}>Logout</Link>
                 </ul>
             </div> : null
}
         </nav>
        </div>
     )
 }
}