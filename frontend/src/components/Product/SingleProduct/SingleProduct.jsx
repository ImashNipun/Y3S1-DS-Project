import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

export default function SingleProduct() {
  const { id } = useParams();
  const { auth } = useAuth();
  const path = `/shop/${id}`;
  const navigate = useNavigate();
  const [data, setData] = useState({
    userID: auth.userdata._id,
    description: "",
    productID: id,
  });

  const [allR, setAllR] = useState([]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  useEffect(() => {
    const getAllReviews = async () => {
      await axios
        .get("http://localhost:5006/api/review/")
        .then((res) => {
          setAllR(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAllReviews();
  }, []);

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const url = "http://localhost:5006/api/review/";
      const { data: res } = await axios.post(url, data);
      navigate(path);
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add the review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your review"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div>
        <h1>All reviews</h1>
        {allR
          .filter((allR) => allR.productID.includes(id))
          .map((filteredName) => (
            <li>{filteredName.description}</li>
          ))}
      </div>
    </>
  );
}
