import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import CartProductCard from "./CartProductCard";
import CartListTitles from "./CartListTitles";
import "./cartstyle.css";
import { Cartcontext } from "../../context/Context";


export default function CartList() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartCards = state.map((item, index) => (
    <CartProductCard
      key={index}
      item = {item}
      handleDispatch = {dispatch}
    />
  ));

 


  return (
    <Col className="c-p-l-sec p-5">
      <h3>Shopping Cart</h3>
      <br />
      {cartCards.length !== 0 ? <CartListTitles /> : <h4>Cart is empty</h4>}
      
      <div>{cartCards.length !== 0 ? [cartCards] : null }</div>

      {cartCards.length !== 0 ? <hr />  : null }
      
      <Row>
        <Col></Col>
        <Col className="text-end">
          {cartCards.length !== 0 ? <div><h4>Total Price : $ {total}</h4></div> : null}
        </Col>
      </Row>
    </Col>
  );
}
