import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import MetaHead from "../components/MetaHead";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <MetaHead title='Welcome To I-Mart | Payment Mode' />
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label as='legend'>Select Payment Method</Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='PayPal or Credit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>

            <Col>
              <Form.Check
                type='radio'
                label='Cash on Delivery'
                id='COD'
                name='paymentMethod'
                value='COD'
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button variant='dark' type='submit'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
