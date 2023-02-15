import React, { Component } from "react";
import { Col, Container , Row } from "react-bootstrap";
import Product from "./Product";
import { Alert } from 'react-bootstrap';




class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { showAlert: false };
        console.log('constructor');
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ showAlert: true });
        }, 3000);
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }



    render() {
        console.log('render');
        const productsList = this.props.products.map((product, index) => (


            <Product
                key={index}
                produit = {product}
            />



        ));
        return <div>{this.state.showAlert &&
            <Alert variant="success">
                Hey , Welcome to Our Shop <b>MyStore</b>
                <p>Thank you for choosing our store , we hope you enjoy your shopping experience !</p>
            </Alert>
        }
            <Container><Row>{productsList}</Row></Container></div>;
    }
}

export default Products;