import React, { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductCardContainer() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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

  const renderCards = post.map((post) => (
    <ProductCard
      key={post.id}
      id = {post.id}
      image="https://via.placeholder.com/600/771796"
      title={post.title}
      description={post.body}
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
