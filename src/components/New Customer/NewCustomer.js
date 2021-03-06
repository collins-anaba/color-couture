import React, {Component} from 'react';
import axios from 'axios';
import '../New Customer/NewCustomer.scss';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';

 class NewCustomer extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            redirect: false,
            nameTaken: false,
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleClick = () => {
        axios.post('/api/NewCustomer', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }).then(user => {
            this.props.updateUser(user.data)
            this.setState({redirect: true})
        }).catch(err => {
            this.setState({
                nameTaken: true
            })
        })
    }
    handleEnter = (e) => {
        if(e.key === "Enter"){
            this.handleClick()
        }
    }
    render(){
        if(this.state.redirect){
            return <Redirect to='/'/>
        }
        return (
            <div className='NewCustomer-page'>
                <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
                <input onChange={this.handleUsername} type='username' placeholder = 'Username'/>
                <br/>
                <input onChange={this.handlePassword} type='password' placeholder='Password'/>
                <br/>
                <input onChange={this.handleEmail} type='email' placeholder='Email'/>
                <button onClick={this.handleClick} onKeyPress={this.handleEnter}>Sign Up</button>
                {this.state.nameTaken && <h3>This name is already taken, please choose another.</h3>}
            </div>
        )
    }
}
const mapStateProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateProps, {updateUser})(NewCustomer)