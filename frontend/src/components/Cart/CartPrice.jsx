import React, { useContext } from "react";
import { Col, Button } from "react-bootstrap";
import { Cartcontext } from "../../context/Context";

export default function CartPrice() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Col className='cart-price-sec ms-3 p-4' sm={3}>
        <h4>Order Summery</h4>
        <hr />
        <br />
        <h4>Total Amount : $ {total}</h4>
        <h6>Shipping and taxes calculated at checkout</h6>
        <hr />
        <Button className="goto-checkout-btn">Go to Checkout</Button>
    </Col>
  )
}
