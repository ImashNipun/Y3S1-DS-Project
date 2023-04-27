import React,{useEffect}from 'react'
import { Container,Col,Row } from 'react-bootstrap'


export default function SuccessPage() {
    useEffect(()=>{

        // localStorage.clear('cart');
        

    },[])
  return (
    <Container>
        <Row className='m-5'>
            <Col className='text-center p-5' style={{height:"36.2vh"}}>
                <h3 className='text-success'>Checkout Successfull</h3>
                <p className='m-1'>Your order might take sometime to process</p>
                <p className='m-1'>Check you order status at your profile after sometime</p>
                <p>If you have any problem pleace contact us.</p>
            </Col>
        </Row>
    </Container>
  )
}
