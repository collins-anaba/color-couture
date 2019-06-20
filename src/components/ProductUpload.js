import React, { Component }from 'react';
import axios from 'axios';

export default class ProductUpload extends Component {
    constructor(){
        super();
        this.state = {
            product: null,
            name: '',
            style: '',
            price: 0,
            size:'',
            description: '',
            image: ''
        };
    }
    submitProduct = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('product', this.state.file[0]);
        axios.post(`/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            //handle your response
            axios.post('/api/products', {
                name: this.state.name,
                price: this.state.price,
                size:this.state.size,
                style: this.state.style,
                description: this.state.description,
                image: response.data.location
            })
        }).catch(error => {
            console.log(error)
        })
    }
    handleProductUpload = (event) => {
        this.setState({ file: event.target.products}, ()=>{
            console.log(this.state.file)
        });
    };
    handleName =(event) => {
        this.setState({name: event.target.value})
    }
    handleStyle =(event) => {
        this.setState({style:event.target.style})
    };
    handleSize = (e) => {
        this.setState({size:e.target.size})
    };
    handlePrice = (e) => {
        this.setState({price:e.target.price})
    };
    handleDescription = (e) => {
        this.setState({description:e.target.description})
    };
    deleteItem = (e) => {
        this.setState({name: e.target.value})
    };
    updateItem = (e) => {
        this.setState({value: e.target.value})
    };

    updateProduct = (event) => {
        event.preventDefault()
        axios.put(`/api/products/${this.state.name}`, {
            price: this.state.price,
            size:this.state.size,
            style: this.state.style,
            description: this.state.description
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
        console.log(this.state.name)
        console.log(this.state.price)
        console.log(this.state.size)
        console.log(this.state.style)
        console.log(this.state.description)
    }
    deleteProduct = (event) => {
        event.preventDefault()
        axios.delete(`/api/products/${this.state.name}`,{
            name: this.state.name,
            price: this.state.price,
            size:this.state.size,
            style: this.state.style,
            description: this.state.description,
        })
    }
}