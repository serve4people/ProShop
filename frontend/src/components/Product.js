import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import "./product.css";
import Rating from "./Rating";
const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
        <Link to = {`/product/${product._id}`}>
         <Card.Img src={product.image} variant="top" />
         </Link> 
         <Card.Body>
             <Link to={`/product/${product._id}`}>
                 <Card.Title as="div" className="card-title">
                     <strong>{product.name}</strong>
                 </Card.Title>
             </Link>
             <Card.Text as ="div">
                 <Rating value={product.rating} text={`${product.numReviews} reviews`} />
             </Card.Text>
             <Card.Text as="h3">
                  {(product.price).toLocaleString( "en-IN",{style: 'currency',currency: 'INR', minimumFractionDigits: 2})}
             </Card.Text>
         </Card.Body>  
    </Card>
    )
}

export default Product
