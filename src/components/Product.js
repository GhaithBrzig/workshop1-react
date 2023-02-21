import React, { useState , useEffect} from "react";
import {Alert , Button} from "react-bootstrap";

const Product = (props) => {
    const[showWelcomeMessage,setShowWelcomeMessage] = useState(false);
    let img = require(`../assets/images/${props.image}`);
    const [showAlert , setShowAlert]= useState(false);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(props.quantity);
    const [isBestProduct, setIsBestProduct] = useState("");
    const [like, setLikes] = useState(0);


    // useEffect(() => {
    //   const container = document.getElementById("myContainer");
    //   if (isBestProduct) {
    //     container.className = "bestProduct";
    //   } else {
    //     container.className = "";
    //   }
    // }, [isBestProduct]);

    useEffect(()=>{

        if(count>5){setIsBestProduct("bestProduct")}

    },[count]) ;



    const handleLike = () => {
        // Code pour ajouter un "J'aime" à un produit spécifique
        setCount(count + 1);
        if (count + 1 > 5) {
            setIsBestProduct('k');
        }

    };
    const handleBuy = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

        }
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);

    };





    return (
        <div className={isBestProduct}>

            <div>
                <img src={img} alt={props.name}  style={{ width: "200px", height: "200px", objectFit: "cover" }}/>
                <h2>title:{props.title}</h2>
                <p>Price: {props.price}</p>
                <p>Description: {props.description}</p>
                <p>quantity : {quantity} </p>

                <p>Like : {count} </p>

                <div style={{ display: "flex" }}>
                    <Button variant="primary" onClick={handleLike}>

                        like
                    </Button>
                    {isBestProduct && <p>BEST PRODUCT</p> }
                    <Button variant="primary" disabled={quantity === 0} onClick={handleBuy} style={{ backgroundColor: "skyblue", color: "white" }}  >
                        buy
                    </Button>

                </div>


            </div>{showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(true)} dismissible>
                you bought an item
            </Alert>
        )}
        </div>
    );
};

export default Product;