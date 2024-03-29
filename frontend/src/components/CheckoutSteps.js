import React from 'react'
import {Nav} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import "../index.css";
const CheckoutSteps = ({step1,step2,step3,step4}) => {
    return (
         
        
         <Nav className="justify-content-center">
         
         <Nav.Item>
            {step1? (
                <LinkContainer to='/login'>
                    <Nav.Link><span className="checkStyle">Sign In</span></Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Sign In</Nav.Link>
            )} 
            </Nav.Item>
            
            
            <Nav.Item>
            {step2? (
                <LinkContainer to='/shipping'>
                    <Nav.Link><span className="checkStyle">Shipping</span></Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
            </Nav.Item> 
            
            
            <Nav.Item>
            {step3? (
                <LinkContainer to='/payment'>
                    <Nav.Link><span className="checkStyle">Payment</span></Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
            </Nav.Item> 
            
            
            <Nav.Item>
            {step4? (
                <LinkContainer to='/placeorder'>
                    <Nav.Link><span className="checkStyle">Place Order</span></Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}

            </Nav.Item> 
            
         </Nav>
        
         
        
        
         
    )
}

export default CheckoutSteps