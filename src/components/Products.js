import Product from "./Product";
import productsData from "./Product.json";
import React , { useState ,useEffect }from "react";
import {Alert, Button } from "react-bootstrap";


const Products = () => {
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        setTimeout(() => setShowWelcomeMessage(true), 1000);
        setTimeout(() => setShowWelcomeMessage(false), 2000);
    }, []);
    const productComponents = productsData.map((product) => (
        <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            like={product.like}
            quantity={product.quantity}
            description={product.description}
        />
    ));

    return (

        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {showWelcomeMessage && (
                <Alert variant="success" onClose={() => setShowWelcomeMessage(true)} dismissible>
                    <h1>hey, welcome to our shop mystore</h1>
                    <p>thank you for choosing our store, we hope you enjoy your shopping experience!</p>
                </Alert>
            )}
            {productComponents.map((product,i) => (
                <div key={i} style={{ width: "33.33%", padding: "1em" }}>
                    {product}
                </div>
            ))}

        </div>

    );
};

export default Products;


