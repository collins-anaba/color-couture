import React, { Component} from 'react';
import axios from 'axios';
import '../Cart/Cart.scss';
import CheckOutStripe from '../CheckoutStripe/CheckOutStripe';


export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cart: [],
            total: 0
        }
    }

    componentDidMount() {
        axios.get('/api/cart').then(response => {
            console.log(response)
            console.log('hit')
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
             <img src={cart.image} alt="products" />
                 <div className='Checkout-Card'>
                    <h3>{cart.name}</h3>
                    <h4>${cart.price}</h4>
                </div>
            </div>
    })
}
return (
    <div className='Cart-list'>
    <style> @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>
        <h1>Cart</h1>
        <h2>Total: $ {this.state.total}</h2>
        <CheckOutStripe amount={this.state.total}/>
        <br/>
        <div className='Cart-list-2'>
            {userCart}
        </div>
    </div>
);
}
}