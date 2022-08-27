import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import MetaHead from "../components/MetaHead";
//import toIndianCurrency from "../components/IndianCurrency";
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //location.search will give the result of key in url i.e after ?.
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <>
      <MetaHead title='Welcome To I-Mart | Cart' />
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is Empty <Link to='/'>GO BACK</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      {item.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 2,
                      })}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                        className='qty_design_cart'
                        custom
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option
                            style={{ textAlign: "center" }}
                            key={x + 1}
                            value={x + 1}
                          >
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card style={{ marginTop: "0.6rem" }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce((acc, curitem) => acc + curitem.qty, 0)})
                  Items
                </h2>
                Total Price :{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                  })}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
