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
                {/* <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-butterfly.png" alt='butterfly' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-cheerleader.png" alt='cheerleader' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-flower.png" alt='flower' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-kitten.png" alt='kitten' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-numbers.png" alt='numbers' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-car.png" alt='car' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-robot.png" alt='robot' />
                <img src="https://color-couture.s3.us-east-2.amazonaws.com/couture-sports.png" alt='sports' /> */}
                {itemList}
                </div>
            </div >
        );
    }
}