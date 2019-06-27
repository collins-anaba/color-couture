import React, { Component} from 'react';
import '../Home/Home.scss';
import axios from 'axios';


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            session: false,
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(response => {
            this.setState({ products: response.data })
        })
        axios.get('/api/getSession').then(response => {
            console.log(response)
            if (response.data.user.username) {
                this.setState({ session: true })
            }
        })
    }

    handleClick(id) {
        if (this.state.session) {
            axios.post(`/api/cart/${id}`).then(response => {
            })
        } else { //history comes from react router dom
            this.props.history.push("/Login")
        }
    }

    render() {
        // map here
        console.log(this.state.products)
        let itemList = this.state.products.map(product => {
            return <div key={product.id} className="Card">
                <img className="product" src={product.image} alt="product" />
                <h3>{product.name}</h3>
                <h4> $ {product.price}</h4>
                <button className="addToCart" onClick={() => this.handleClick(product.id)}> Add To Cart </button>
            </div>
        })
        return (
            <div>
                <div className="Item_List">
                {itemList}
                </div>
            </div >
        );
    }
}

