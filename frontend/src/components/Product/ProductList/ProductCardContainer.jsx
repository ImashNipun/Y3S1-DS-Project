import React, { useContext, useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Cartcontext } from "../../../context/Context";

export default function ProductCardContainer() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5004/api/products/")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setPost(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  // console.log(Globalstate);


  const renderCards = post.map((post) => (
    <ProductCard
      key={post._id}
      id = {post._id}
      image={post.image}
      title={post.tital}
      description={post.description}
      price = {post.price}
      handleDispatch = {dispatch}
    />
  ));

  return (
    <Container>
      <Row md={3} className="g-5">
        {renderCards}
      </Row>
    </Container>
  );
}
