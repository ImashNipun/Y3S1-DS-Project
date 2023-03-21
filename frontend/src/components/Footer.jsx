import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid style={{backgroundColor:"#000000"}}>
        <Row className='m-auto pt-5 pb-5' style={{width:"70%",textAlign:"center",color:"#fff"}}>
            <Col className='mb-4'>
                <h1>RareAyur</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sunt nihil nobis veniam similique quam tenetur facere ducimus quos voluptate excepturi eveniet cum architecto quisquam, dolorum illo fugiat soluta. Nisi!</p>
                <Row>
                    <Col>Facebook</Col>
                    <Col>Twitter</Col>
                    <Col>LinkedIn</Col>
                    <Col>Pinterest</Col>
                    <Col>Instagram</Col>
                </Row>
            </Col>
            <hr/>
            <h6>Copyright ©2023 | rareayur.com</h6>
        </Row>
    </Container>
  )
}
