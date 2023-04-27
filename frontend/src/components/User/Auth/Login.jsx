import "./styles.css";
import { useState } from "react";
import {axiosPrivate} from "../../../api/axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const {setAuth} = useAuth();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/users/login";
      const { data: res } = await axiosPrivate.post(url, data);
      console.log(res);
      // localStorage.setItem("token", res.);
      setAuth({userdata : res.data, role : res.data.type, accessToken: res.accesstoken})

      if(res.data.type === "admin"){
        navigate("/admin",{replace:true});
      }
      if(res.data.type === "buyer"){
        navigate("/customer/profile",{replace:true});
      }
      if(res.data.type === "seller"){
        navigate("/seller/profile",{replace:true});
      }

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
          <Form className="frmlogin" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <br></br>
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
            {error && <div className="error">{error}</div>}
            <br></br>
            <div className="btn-container">
              <Button className="btnsign" variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div className="frmtext">
              <small>
                Don't have an account?{" "}
                <a href="/signup">
                  Create account
                </a>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
