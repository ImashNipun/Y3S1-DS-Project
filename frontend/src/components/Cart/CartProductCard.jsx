import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./cartstyle.css";
// import image from "../../images/quality.png";

export default function CartProductCard(props) {
  return (
    <Row className="mb-5 line d-flex justify-content-between align-items-center">
      <Col
        style={{ backgroundImage: `url(${props.item.image})` }}
        className="c-l-image me-5 ms-2"
      ></Col>
      <Col md={4} className="me-5">
        {props.item.title}
      </Col>
      <Col className="d-flex justify-content-between align-items-center me-5">
        <Button className="i-d-buttons"
          onClick={() => {
            if (props.item.quantity > 1) {
              props.handleDispatch({ type: "DECREASE", payload: props.item });
            } else {
              props.handleDispatch({ type: "REMOVE", payload: props.item });
            }
          }}
        >-</Button>
        <p>{props.item.quantity}</p>
        <Button className="i-d-buttons"
           onClick={() => props.handleDispatch({ type: "INCREASE", payload: props.item })}
        >+</Button>
      </Col>
      <Col className="text-end">$ {props.item.quantity * props.item.price}</Col>
      <Col className="text-end"><Button className="i-d-buttons bg-danger" onClick={() => props.handleDispatch({ type: "REMOVE", payload: props.item })}>X</Button></Col>
    </Row>
  );
}
