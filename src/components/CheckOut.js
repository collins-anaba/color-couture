import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import logo from "../images/logo.png";


const stripeBtn = (props) => {
    const publishableKey = "pk_test_CFBk0wKAg5NfvQdakXsQYcEm00MPFstx6q";

    const onToken = token => {
        const body = {
            token:token
        }
    
    axios.post('/payment', body)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log('payment Error:', error)
        });
};

return (
    <StripeCheckout
        amount={props.amount * 100}
        billingAddress
        description='Thank you for your business.'
        image src={logo}
        name='Color Couture'
        locale='auto'
        stripeKey={publishableKey}
        token={onToken}
        zipCode
        style={{zIndex: '1'}}
    />
)
};

export default stripeBtn