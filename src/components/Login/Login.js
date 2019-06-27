import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import '../Login/Login.scss';
import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            admin: false,
            redirect: false,
            user: {}
        }
    }

    handleUsername = (e) => {
        this.setState({username:e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    handleClick = (e) => {
        console.log(this.state.username)
        const { username, password} = this.state;
        axios.post('/api/login', {username,password}).then(res => {
            this.setState({user:res.data})
        })
        
    }
    handleEnter = (e) => {
        if(e.key === 'Enter'){
            this.handleClick()
        }
    }
    render(){
        if (this.state.user.admin === true) {
            return <Redirect admin={this.state.user.admin} to='/Admin'/>
        }
        else if (this.state.user.admin === false){
            return <Redirect to= '/'/>
        }
        return (
            <div className='login-page'>
                <h1>Login</h1>
                <br/>
                <input
                type='text'
                placeholder='Username'
                onChange={this.handleUsername}
                />
                <br/>
                <input
                type='password'
                placeholder='Password'
                onChange={this.handlePassword}
                onKeyPress={this.handleEnter}
                />
                <br/>
                <button onClick= { this.handleClick} onKeyPress={this.handleEnter}>Log In</button>
                <h4><Link className='Register-Button' to='NewCustomer'>New Customers Create Customers</Link></h4>
            </div>
        )
    }
}