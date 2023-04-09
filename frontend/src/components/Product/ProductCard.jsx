import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

export default function ProductCard(props) {
  const id = props.id;
  const path = `/shop/${id}`;

  return (
    <Col>
      <Card>
        <Link to={path}>
          <Card.Img
            variant="top"
            src={props.image}
            style={{ height: "10rem", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Link>
        <Button className="m-2">Add to Cart</Button>
      </Card>
    </Col>
  );
}
