import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const stripeBtn = (props) => {
    const publishableKey = 'pk_test_JvvcaG3QvWkj6G70k6h6PNy400GIGBvGk1';

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
        locale='auto'
        name='Color Couture'
        label='Checkout'
        stripeKey={publishableKey}
        token={onToken}
        zipCode
        style={{zIndex: '1'}}
    />
);
};

export default stripeBtn;