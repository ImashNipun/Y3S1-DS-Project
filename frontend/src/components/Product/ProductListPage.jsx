import React from 'react'
import { Container, Button, Row, Col, CardGroup,} from "react-bootstrap";
import bimg from "../../images/productBanner.png";
import "./productlist.css";

export default function ProductListPage() {
  return (
    <Container fluid>
        <Row>
            <Col style={{backgroundImage:`url(${bimg})`,height:"50vh"}} className='bannerImage'></Col>
        </Row>
        <Row>
            <Col style={{height:"60vh"}}></Col>
        </Row>
    </Container>
  )
}
