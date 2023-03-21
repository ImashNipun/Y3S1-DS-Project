import React from "react";
import { Card } from "react-bootstrap";

export default function ServiceCards(props) {
  return (
    <Card  style={{border: "none"}}>
      <Card.Img variant="top" src={props.image} style={{height:"10rem",objectFit:"contain"}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
