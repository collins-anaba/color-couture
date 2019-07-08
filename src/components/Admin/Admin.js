import React, { Component} from "react";
import axios from 'axios';
import '../Admin/admin.scss';

class Admin extends Component {
    constructor () {
        super ()
        this.state = {
            product: [],
            image: '',
            name: '',
            style: '',
            price: 0,
            size:'',
            description: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/products/${this.props.match.params.id}`).then(res => {
          console.log(res);
          this.setState({
            product: res.data,
            image: res.data[0].image,
            name: res.data[0].name,
            style: res.data[0].style,
            price: res.data[0].price,
            size: res.data[0].size,
            description: res.data[0].description
          });
        });
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      handleSubmit() {
        axios
          .put("/api/products", {
            image: this.state.image,
            name: this.state.name,
            style: this.state.style,
            price: this.state.price,
            description:this.state.description
          })
          .then(res => {
            this.setState({
              product: res.data
            });
          });
      }
    
      render() {
    
        return (
          <div>
            <button
              className="edit-product-button"
              onClick={() => {
                this.setState({ showEdit: !this.state.showEdit });
              }}
            >
              Edit product
            </button>
           
            <div>
            <style>@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');</style>                
              {this.state.showEdit === true ? (
                <div className="AdminPage">
                  <form
                    className="edit-product-form"
                    onSubmit={this.handleSubmit}
                  >
                    <h1 className="edit-product-header">— Edit Product —</h1>
                    <div>
                      <input
                        placeholder="Product picture (link)"
                        onChange={this.handleChange}
                        value={this.state.image}
                        name="image"
                      />
                      <input
                        placeholder="product name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                      />
                      <input
                        placeholder="style"
                        onChange={this.handleChange}
                        value={this.state.style}
                        name="style"
                      />
    
                      <input
                        placeholder="price"
                        onChange={this.handleChange}
                        value={this.state.price}
                        name="price"
                      />
                      <input
                        placeholder="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        name="description"
                      />
                    </div>
                    
                    <button className="edit-product-submit-button">
                      Save Changes
                    </button>
                  </form>
                </div> 
                ) : (
                    <div className="entire-product-page">
                      
                    </div>
                  )}
                </div>
    
              </div>
            );
          }
        } 

        export default Admin;
                          
              
      







