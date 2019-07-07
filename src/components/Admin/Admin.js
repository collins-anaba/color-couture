import React, { Component} from "react";
import axios from 'axios';
import '../Admin/admin.scss';



 class Admin extends Component {
    constructor () {
        super ()
        this.state = {
            file: null,
            image: '',
            name: '',
            style: '',
            price: 0,
            size:'',
            description: ''
        }
    }

    submitFile = (event) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(this.state.file)
        formData.append('file', this.state.file[0]);
        axios.post(`/api/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          // handle your response;
          axios.post('/api/products', {
            image: response.data.Location,
            name: this.state.name,
            price: this.state.price
          })
        }).catch(error => {
          // handle your error
          console.log(error)
        });
      }
    
      handleFileUpload = (event) => {
        this.setState({ file: event.target.files }, () => {
          console.log(this.state.file)
        });
      }
      handleName = (e) => {
        this.setState({ name: e.target.value })
      }
      handlePrice = (e) => {
        this.setState({ price: e.target.value })
      }
    //   handleStyle = (e) => {
    //     this.setState({ style: e.target.value })
    //   }
    //   handleSize = (e) => {
    //     this.setState({ size: e.target.value })
    //   }
    //   handleDescription= (e) => {
    //     this.setState({ description: e.target.value })
    //   }
    
      deleteFile = (event) => {
        event.preventDefault()
        axios.delete(`/api/products/${this.state.name}`, {
          name: this.state.name,
        }).then(response => {
          console.log(response)
        }).catch(error => {
          // handle your error
          console.log(error)
        });
        console.log(this.state.name)
      }
    
      deleteProduct = (e) => {
        this.setState({ name: e.target.value })
      }
    
      updateProduct = (e) => {
        this.setState({ value: e.target.value })
      }
      updateFile = (event) => {
        event.preventDefault()
        axios.put(`/api/products/:name`, {
          price: this.state.price,
        //   size: this.state.size,
        //   style: this.state.style,
        //   description:this.state.description
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        });
        
      }
    
    
  
    

    

render () {
    return (
        <div className='AdminPage'>
<style>@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>                
            <h1> Admin Form </h1>
                <br/>
                <h2>Add New Product</h2>
            <form onSubmit={this.submitFile}>
                <br/>
                <input 
                type='file'
                label='image'
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
                <button type='submit'>Submit</button>
            </form>
                 <br/>
                 <br/>
            <form onSubmit={this.updateFile}>
                 <br/>
                <input 
                placeholder='name'
                type='text'
                label='name'
                onChange={this.updateProduct}
                />
                <br/>
                <input
                placeholder='price'
                type='text'
                label='price'
                onChange={this.handlePrice}
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