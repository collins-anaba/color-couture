import React, { Component} from "react";
import axios from 'axios';
import '../Admin/admin.scss';



 class Admin extends Component {
    constructor (props) {
        super (props)
        this.state = {
            Product: [],
            name: '',
            style: '',
            price: 0,
            size:'',
            description: '',
            image: ''
        }
    }

    
    // submitFile = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     console.log(this.state.file)
    //     formData.append('file', this.state.file[0]);
    //     axios.post(`/api/upload`, formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }).then(response => {
    //         axios.post('/api/products', {
    //             image: response.data.location,
    //             name: this.state.name,
    //             style: this.state.style,
    //             size:this.state.size,
    //             description: this.state.description,
    //             price: this.state.price
    //         })
    //     }).catch(error =>{
    //         console.log(error)
    //     })
    // };

    handleSubmit = e => {
        e.preventDefault();
        this.editProduct(
            this.state.name,
            this.state.style,
            this.state.price,
            this.state.size,
            this.state.description,
           this.state.image
        );
        this.setState(
           { name: ''},
            {style: ''},
            {price: 0},
            {size:''},
            {description: ''},
            {image: ''}
        )
        
    }

    componentDidMount(){
        axios.get(`/api/products/${this.props.match.params.id}`).then(res => {
            this.setState (
                {productInfo: res.data,
                    name: res.data[0].name, 
                    style: res.data[0].style ,
                    price: res.data[0].price ,
                    size: res.data[0].size ,
                    description: res.data[0].description,
                    image: res.data[0].image }
            )
        }).catch(error => {})
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
        this.setState({[e.target.style]: e.target.value});
        this.setState({[e.target.price]: e.target.value});
        this.setState({[e.target.size]: e.target.value});
        this.setState({[e.target.style]: e.target.value});
        this.setState({[e.target.description]: e.target.value});
        this.setState({[e.target.image]: e.target.value});
    }

    editProduct =() => {
        axios.put (
            `/api/products/${this.props.match.params.id}`,{
            name:this.state.name,
            style:this.state.style,
            price:this.state.price,
            size:this.state.size,
            description:this.state.description,
           image:this.state.image
            })
            .then (res => {
                this.setState({
                    name: res.data[0].name, 
                    style: res.data[0].style ,
                    price: res.data[0].price ,
                    size: res.data[0].size ,
                    description: res.data[0].description,
                    image: res.data[0].image
                })
            }).then(this.props.history.push('/admin'))
    }

    
    // handleFileUpload = (event) => {
    //     this.setState({ file: event.target.files }, () => {
    //       console.log(this.state.file)
    //     });
    //   }

    // handleName = (e) => {
    //     this.setState({name: e.target.value})
    // };
    // handleStyle = (e) => {
    //     this.setState({style:e.target.value})
    // };
    // handleSize = (e) => {
    //     this.setState({size:e.target.value})
    // };
    // handlePrice = (e) => {
    //     this.setState({price:e.target.value})
    // };
    // handleDescription = (e) => {
    //     this.setState({description:e.target.value})
    // };
   

    
    // deleteFile = (event) => {
    //     event.preventDefault()
    //     axios.delete(`/api/products/${this.state.name}`,{
    //         name:this.state.name
    //     }).then(response => {
    //         console.log(response)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //     console.log(this.state.name)
    // }
    // deleteProduct = (e) => {
    //     this.setState({name: e.target.value})
    // };
    // updateProduct = (e) => {
    //     this.setState({ value: e.target.value })
    //   }
    
    
    // updateFile = (event) =>{
    //     event.preventDefault()
    //     axios.put(`/api/products/${this.state.name}`, {
    //         style: this.state.style,
    //         size:this.state.size,
    //         description: this.state.description,
    //         price: this.state.price
    //     }).then(response => {
    //         console.log(response)
    //     }).catch(error => {
    //         console.log(error)
    //     });
    //     console.log(this.state.name)
    //     console.log(this.state.price)
    //     console.log(this.state.size)
    //     console.log(this.state.style)
    //     console.log(this.state.description)
    // }
    

    

render () {
    return (
        <div className='AdminPage'>
<style>@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>                
            <h1> Admin Form </h1>
                <br/>
                <h2>Add New Product</h2>
            <form onSubmit={this.handleSubmit}>
                <br/>
                {/* <input placeholder='image'
                type='image'
                alt='image'
                label='image'
                onChange={this.handleChange} */}
                {/* /> */}
                <br/>
                <input 
                placeholder='name'
                type='text'
                label='name'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='style'
                type='text'
                label='style'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='size'
                type='text'
                label='size'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='description'
                type='text'
                label='description'
                onChange={this.handleChange}
                />
                <br/>
                <input
                placeholder='price'
                type='text'
                label='price'
                onChange={this.handleChange}
                />
                <br/>
                <button type='submit'>Submit</button>
            </form>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <br/>
                <input 
                placeholder='name'
                type='text'
                label='name'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='style'
                type='text'
                label='style'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='size'
                type='text'
                label='size'
                onChange={this.handleChange}
                />
                <br/>
                <input 
                placeholder='description'
                type='text'
                label='description'
                onChange={this.handleChange}
                />
                <br/>
                <input
                placeholder='price'
                type='text'
                label='price'
                onChange={this.handleChange}
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