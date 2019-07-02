import React, { Component } from "react";
import  '../Contact/Contact.scss';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <h2>Color Couture</h2>
                    <h3>Phone: 214-616-3603</h3>
                    <h3>Email: info@colorcouture.com</h3>

                    <Link className="Contact-Form-Link" to="/ContactForm">E-Mail Us</Link>
                </div>
            </div>
        );
    }
}
