import React, { Component} from 'react';
import axios from 'axios';
import StripeBtn from '../CheckoutStripe/CheckOutStripe';


export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cart: [],
            total: 0
        }
    }

    componentDidCatch() {
        axios.get('/api/cart').then(response => {
            console.log(response)
            this.setState({
                cart: [...this.state.cart, response.data.cart],
                total: response.data.total
            })
        })
    }
render(){
    let userCart; 
    if (this.state.cart[0]){
        userCart = this.state.cart[0].map(cart => {
            return <div className='Checkout-page'>
                <div className='Checkout-Card'>
                    <h3>cart</h3>
                    <h4>Price</h4>
                </div>
            </div>
    })
}
return (
    <div className='Cart_list'>
        <h1>Cart</h1>
        <h2>Total: $ {this.state.total}</h2>
        <StripeBtn amount={this.state.total}/>
        <br/>
        <div className='Cart_list_2'>
            {userCart}
        </div>
    </div>
);
}
}