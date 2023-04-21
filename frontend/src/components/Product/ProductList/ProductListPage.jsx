import React from 'react'
import { Container,Row, Col,} from "react-bootstrap";
import bimg from "../../../images/productBanner.png";
import "../productlist.css";
import ProductFilter from './ProductFilter';
import ProductCardContainer from './ProductCardContainer';

export default function ProductListPage() {
  return (
    <Container fluid>
        <Row>
            <Col style={{backgroundImage:`url(${bimg})`,height:"50vh"}} className='bannerImage'></Col>
        </Row>
        <Row>
            <Col>
              <ProductFilter/>
              <ProductCardContainer/>
            </Col>
        </Row>
    </Container>
  )
}
