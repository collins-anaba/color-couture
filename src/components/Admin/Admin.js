import React, { Component} from "react";
import axios from 'axios';
import '../Admin/admin.scss';



class Admin extends Component {
    constructor () {
        super ()
        this.state = {
            product: null,
            name: '',
            style: '',
            price: 0,
            size:'',
            description: '',
            image: ''
        }
    }

    submitFile = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(this.state.product)
        formData.append('file', this.state.file[0]);
        axios.post(`/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            axios.post('/api/products', {
                name: this.state.name,
                price: this.state.price,
                size:this.state.size,
                style: this.state.style,
                description: this.state.description,
                image: response.data.location
            })
        }).catch(error =>{
            console.log(error)
        })
    };

    handleFileUpload = (event) => {
        this.setState({ file: event.target.files }, () => {
          console.log(this.state.file)
        });
      };

    handleName = (e) => {
        this.setState({name: e.target.name})
    };
    handleStyle = (e) => {
        this.setState({style:e.target.style})
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
   

    
    deleteFile = (event) => {
        event.preventDefault()
        axios.delete(`/api/products/${this.state.name}`,{
            price: this.state.price,
            size:this.state.size,
            style: this.state.style,
            description: this.state.description,
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
        console.log(this.state.name)
        console.log(this.state.price)
        console.log(this.state.size)
        console.log(this.state.style)
        console.log(this.state.description)  
    }
    deleteProduct = (e) => {
        this.setState({name: e.target.value})
    };
    updateProduct = (e) => {
        this.setState({ value: e.target.value })
      }
    
    
    updateFile = (event) =>{
        event.preventDefault()
        axios.put(`/api/products/${this.state.name}`, {
            price: this.state.price,
            size:this.state.size,
            style: this.state.style,
            description: this.state.description,
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
        console.log(this.state.name)
        console.log(this.state.price)
        console.log(this.state.size)
        console.log(this.state.style)
        console.log(this.state.description)
    }
    

    

render () {
    return (
        <div className='AdminPage'>
                <h1> Admin Form </h1>
                <br/>
                <h2>Add New Product</h2>
            <form onSubmit={this.submitFile}>
                <br/>
                <input placeholder='image'
                type='text'
                label='description'
                onChange={this.handleFileUpload}
                />
                <br/>
                <input 
                placeholder='name'
                type='text'
                label='name'
                onChange={this.handleName}
                />
                <br/>
                <input 
                placeholder='style'
                type='text'
                label='style'
                onChange={this.handleStyle}
                />
                <br/>
                <input 
                placeholder='size'
                type='text'
                label='size'
                onChange={this.handleSize}
                />
                <br/>
                <input 
                placeholder='description'
                type='text'
                label='description'
                onChange={this.handleDescription}
                />
                <br/>
                <input
                placeholder='price'
                type='text'
                label='price'
                onChange={this.handlePrice}
                />
                <br/>
                <button placeholder='submit' type='submit'>Submit</button>
            </form>
            <br/>
            <br/>
            <form onSubmit={this.updateFile}>
            <br/>
                <input 
                placeholder='name'
                type='text'
                label='name'
                onChange={this.handleName}
                />
                <br/>
                <input 
                placeholder='style'
                type='text'
                label='style'
                onChange={this.handleStyle}
                />
                <br/>
                <input 
                placeholder='size'
                type='text'
                label='size'
                onChange={this.handleSize}
                />
                <br/>
                <input 
                placeholder='description'
                type='text'
                label='description'
                onChange={this.handleDescription}
                />
                <br/>
                <input
                placeholder='price'
                type='text'
                label='price'
                onChange={this.handlePrice}
                />
                <br/>
                <button type="submit" >Update Product</button>
            </form>
                <br/>
                <br/>
            <form onSubmit={this.deleteFile}>
                <input
                placeholder='name'
                type='text'
                label='name'
                onChange={this.deleteProduct}
                />
                <br/>
                <button type="submit" >Delete Product</button>
            </form>
        </div>
    )
}
}

export default Admin;