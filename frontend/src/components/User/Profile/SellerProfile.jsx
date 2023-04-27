import "./styles.css";
import { useState} from "react";
import {useNavigate } from "react-router-dom"
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

export default function SellerProfile() {
  const [data, setData] = useState({
    tital: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const url = "http://localhost:5004/api/products";
      const { data: res } = await axios.post(url, data);
      navigate("/seller/profile");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="fromp-container">
          <Form className="frmp" onSubmit={handleSubmit}>
            <h2>Add a product</h2>
            <br></br>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="formBasTitle"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="tital"
                onChange={handleChange}
                value={data.tital}
                required
                className="lable"
              />
            </Form.Group>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="formBasicPricel"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  name="price"
                  onChange={handleChange}
                  value={data.price}
                  required
                  className="lable"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                controlId="formBasicQuantity"
              >
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1"
                  defaultValue="1"
                  name="quantity"
                  onChange={handleChange}
                  value={data.quantity}
                  required
                  className="lable"
                />
              </Form.Group>
            </Row>
            <Form.Group>
            <Form.Label>Image</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  onChange={handleChange}
                  value={data.image}
                  required
                  className="lable"
                />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5}  onChange={handleChange} name="description" value={data.description}/>
            </Form.Group>
            {error && <div className="error">{error}</div>}
            <div className="btnp-container">
              <Button className="btnp" variant="sucsess" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

// const Addproducts = () => {
  
// };
// export default Addproducts;
