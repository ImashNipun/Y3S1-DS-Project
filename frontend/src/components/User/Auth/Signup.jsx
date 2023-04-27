import "./styles.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import axios from "../../../api/axios";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/users/signup";
      const { data: res } = await axios.post(url, data);
      //   navigate("/login");
      window.location.href = "http://localhost:3000/login";
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
        <Col className="from-container">
          <Form className="frmsign" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <br></br>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className="lablesign"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="lablesign"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="lablesign"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCrmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="lablesign"
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicDropdown">
              <Form.Label>Customer type</Form.Label>
              <Form.Select
                className="lablesign"
                aria-label="Default select example"
                name="type"
                onChange={handleChange}
                value={data.type}
                required
              >
                <option>Select customer type</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </Form.Select>
            </Form.Group>
            {error && <div className="error">{error}</div>}
            <br></br>
            <div className="btn-container">
              <Button className="btnsign" variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div className="frmtext">
              <small>
                Already have an account?{" "}
                <a href="/login">Login</a>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Signup;
