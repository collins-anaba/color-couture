import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            admin: false,
            redirect: false
        }
    }

    handleUsername = (e) => {
        this.setState({username:e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    handleClick = (e) => {
        const { username, password} = this.state;
        axios.post('api/adminLogin', {username,password}).then(res => {
            this.setState({admin: true})
        }).catch( e => {
            axios.post('/api/login', {username,password}).then(res => {
                this.setState({redirect: true})
            })
        })
    }
    handleEnter = (e) => {
        if(e.key === 'Enter'){
            this.handleClick()
        }
    }
    render(){
        if (this.state.admin === true) {
            return <Redirect admin={this.state.admin} to='/productUpload'/>
        }
        else if (this.state.redirect === true){
            return <Redirect to= '/'/>
        }
        return (
            <div>
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
                <button onClick={this.handleClick} onKeyPress={this.handleEnter}>Log In</button>
                <h4>Create Account<Link className='Register-Button' to='register'>New Customers</Link></h4>
            </div>
        )
    }
}