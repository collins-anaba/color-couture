import React, { Component } from 'react';
import axios from 'axios';
import '../Contact/Contact.scss';


export default class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        messageSent: false
    }
    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        axios.post("/send", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then((response) => {
            this.setState({
                messageSent: true
            })
        }).catch(error => {
            console.log(error)
        });
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    handleMessage = (e) => {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div className="contact-page">
             <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
               <h1 className='h1'>Contact Us</h1>
                {this.state.messageSent === false &&
                    <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                        <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
                        <div className='main-contact'>
                            <label>Name</label>< br />
                            <input type="text" id="name" onChange={this.handleName} />< br />< br />
                            <label>Email address</label>< br />
                            <input type="email" id="email" onChange={this.handleEmail} />< br />< br />
                            <label>Message</label>< br />
                            <textarea rows="5" id="message" onChange={this.handleMessage}></textarea>
                            <button className='button' type="submit">Submit</button>
                        </div>
                       
                    </form>}
                {/* next line hides the form */}
                {this.state.messageSent === true && <h3 className='h3'>Thank you for contacting us. </h3>}


            </div>
        )
    }
}
