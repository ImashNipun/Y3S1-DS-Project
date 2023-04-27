import React, { useContext } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../context/Context";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
// import axios from "axios"

export default function CartPrice() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const cart = state;
  const { auth } = useAuth();

  console.log(state);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    axios
      .post("http://localhost:5002/api/stripe/create-checkout-session", {
        cart,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Col className="cart-price-sec ms-3 p-4" sm={3}>
      <h4>Order Summery</h4>
      <hr />
      <br />
      <h4>Total Amount : $ {total}</h4>
      <h6>Shipping and taxes calculated at checkout</h6>
      <hr />
      {auth.userdata ? (
        <Button className="goto-checkout-btn" onClick={handleCheckout}>
          Go to Checkout
        </Button>
      ) : (
        <Button>
          <Link to="/login" style={{textDecoration:"none",color:"white",width:"100%"}}>Login to process</Link>
        </Button>
      )}
    </Col>
  );
}
