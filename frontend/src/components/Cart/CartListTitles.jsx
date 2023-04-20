import React from 'react'
import { Row, Col } from "react-bootstrap";

export default function CartListTitles() {
  return (
    <div style={{ textAlign: "center" }}>
        <Row className="mb-5">
          <Col className="c-l-line d-flex justify-content-between align-items-center">
            <div>Product image</div>
            <p>Description</p>
            <div className="ms-5">Quentity</div>
            <p>Price</p>
            <p></p>
          </Col>
        </Row>
      </div>
  )
}
