import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import AddToCart from '../components/addToCart'
import Cart from '../../utils/cart'
import OutOfStock from '../components/outOfStock'
import ProductTable from '../components/productTable';

export default class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.data.productsJson,
            quantity: 0
        };
    }
    handleSubmit = (e) => {
        e.preventDefault()
        try {
            Cart.addToCart(this.state.product, this.state.quantity).then((cartText) => {
                if (cartText) {
                    document.getElementsByClassName('cart-number')[0].innerText = cartText
                }
            })
        } catch (e) {
            document.getElementsByClassName('cart-number')[0].innerText = "ERROR"
        }
    }
    handleChange = (e) => {
        this.setState({quantity: parseInt(e.target.value)})
    }
    render() {
        return (
            <Layout>
                <div style={{display: "flex"}}>
                    <div style={{flex: "50%"}}>
                        <img src={this.state.product.image} alt=""/>
                    </div>
                    <div className="product-details" style={{flex: "50%"}}>
                        <h2 className="product-name">
                            {this.state.product.name}
                        </h2>
                        <h4>
                            Price: <span className="product-price value">${this.state.product.price}</span>
                        </h4>
                        <AddToCart onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                        <ProductTable attributes={this.state.product.attributes}/>
                    </div>
                    <OutOfStock product={this.state.product}/>
                </div>
            </Layout>
        )
    }
};

export const query = graphql`
    query($id: String!) {
        productsJson(id: {eq: $id}) {
            id
            name
            image
            price
            attributes {
                weight
                unit
                calories
                category
            }
        }
    }
`