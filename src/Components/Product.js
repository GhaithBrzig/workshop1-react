import {Button,Alert} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col } from 'react-bootstrap';

class Product extends React.Component {

    constructor(props){

        super(props);

        //console.log(props)
        this.state = { product:props.produit , updated:0 , showAlert: false  };
        console.log(this.state.product)
        //.addLikes = this.addLikes.bind(this);


    }



    componentDisMount(){
        console.log(
            "I have finished rendering"+
            this.props.product.name+
            "The price is :"+
            this.props.product.price
        );
    }

    componentDidUpdate(){
        console.log("I have been updated "+ this.state.updated + " times");
    }

    //componentDidUnmount(){
    //  console.log("I've been destroyed")
    //}

    addLikes=(e)=>{
        e.preventDefault();
        this.setState((oldState) => ({
                product :{...oldState.product,like:oldState.product.like +1},
                updated: oldState.updated + 1
            }
        ));

    }







    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>

                    <Card.Header style={{ height: "18rem" }}><Card.Img variant="top" src={require('../assets/images/'+this.state.product.img)} /></Card.Header>
                    <Card.Body className='text-center'>
                        <Card.Title>{this.state.product.name}</Card.Title>
                        <Card.Text>Price :{this.state.product.price}</Card.Text>
                        <Card.Text>Quantity :{this.state.product.quantity}</Card.Text>
                        <Card.Text>Like :{this.state.product.like}</Card.Text>

                        <Card.Text>
                            {this.state.product.description}
                        </Card.Text>
                        <Button variant="primary" className='d-flex' onClick={this.addLikes}>Like</Button>
                        <div>
                            <Button variant="primary" className='d-grid' disabled={this.state.product.quantity === 0}  style={{ backgroundColor: "skyblue", color: "white" }} onClick={this.handleBuyClick}>
                                buy
                            </Button>
                            {this.state.showAlert &&
                                <Alert variant="success" style={{color : "orange" , backgroundColor:"cornflowerblue"}}>
                                    You bought an Item
                                </Alert>
                            }
                        </div>




                    </Card.Body>
                </Card>
            </Col>



        );


    }
}

export default Product;

