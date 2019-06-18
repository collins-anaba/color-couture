import React, { Component } from 'react';
import axios from 'axios';
import '../Admin/admin.css';



class Admin extends Component {
    constructor () {
        super ()
        this.state = {
            name: '',
            style: '',
            price: 0,
            size:'',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit =(e) => {

    }

render () {
    return (
        <div className='Form'>
            <form>
                <h1> Admin Form </h1>
                <br/>
                <input placeholder='name'/>
                <input placeholder='style'/>
                <input placeholder='size'/>
                <input placeholder='description'/>
                <br/>
                <submit placeholder='submit'>Submit</submit>
            </form>
        </div>
    )
}
}

export default Admin;