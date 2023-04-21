import React from 'react'
import { Container, Row } from "react-bootstrap";
import "./cartstyle.css"
import CartList from './CartList';
import CartPrice from './CartPrice';

export default function CartPage() {
  return (
    <Container className='cart-container' fluid>
        <Row className='p-4'>
            <CartList/>
            <CartPrice/>
        </Row>
    </Container>
  )
}
