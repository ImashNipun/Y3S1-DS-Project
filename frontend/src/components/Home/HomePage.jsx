import React from "react";
import { Container, Button, Row, Col, CardGroup,} from "react-bootstrap";
import {Link} from "react-router-dom";
import bgimg from "../../images/hero-background.jpg";
import "./HomePage.css";
import ServiceCards from "./ServiceCards";
import card01img from "../../images/image 01.png";
import card02img from "../../images/image 02.png";
import card03img from "../../images/image 03.png";
import sec3Img from "../../images/mediSpoon.png";
import qualityBadge from "../../images/quality.png";

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col
          fluid
          style={{
            background: `rgba(0, 0, 0, 0.7) url(${bgimg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "80vh",
          }}
          className="d-flex align-items-center justify-content-center hero-section"
        >
          <div>
            <div>
              <h5>Treat your self with RareAyur</h5>
              <h1 className="pt-3">Ayurveda & Ayurvedic Medicine</h1>
              <h6 className="pt-3">
                We provide 100% ayurvedic medicines & lotions to your door steps
              </h6>
            </div>
            <Row className="mt-5">
              <Col>
              <Link to="/shop"><Button className="shopNow-btn">Shop Now</Button></Link>
              <Link to="/login"><Button className="ms-5 signIn-btn">Sign In</Button></Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <section
        className="mt-5"
        style={{ textAlign: "center", margin: "0 6rem 0 6rem" }}
      >
        <h3 className="mb-5">Let's start your purchase</h3>

        <CardGroup>
          <ServiceCards
            key={1}
            image={card01img}
            title="01.Lorem ipsum dolor"
            description="Dolore sunt nihil nobis veniam similique quam tenetur facere ducimus quos voluptate excepturi eveniet cum architecto quisquam"
          />

          <ServiceCards
            key={1}
            image={card02img}
            title="02.Lorem ipsum dolor"
            description="Dolore sunt nihil nobis veniam similique quam tenetur facere ducimus quos voluptate excepturi eveniet cum architecto quisquam"
          />

          <ServiceCards
            key={1}
            image={card03img}
            title="03.Lorem ipsum dolor"
            description="Dolore sunt nihil nobis veniam similique quam tenetur facere ducimus quos voluptate excepturi eveniet cum architecto quisquam"
          />
        </CardGroup>
      </section>

      <section style={{ margin: "4rem 0 0 0" }}>
        <Row>
          <Col
            style={{
              backgroundImage: `url(${sec3Img})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "80vh",
            }}
          ></Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div style={{ textAlign: "center", width: "70%" }}>
              <h2>We have 100% Naturel Ayurvedic Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                obcaecati temporibus provident in rerum hic expedita veniam
                deserunt nostrum velit!
              </p>
              <Link to="/shop"><Button className="shopNow-btn">Shop Now</Button></Link>
            </div>
          </Col>
        </Row>
      </section>

      <section style={{ margin: "4rem 0 4rem 0" }}>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div style={{ textAlign: "center", width: "70%" }}>
              <h2>Pure & Naturel Ayurvedic treatments</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ab consequuntur, quam maxime sed voluptas facere nemo saepe similique obcaecati aliquam voluptatibus voluptate eos facilis quod nam ratione tempora molestiae!
              </p>
              <Link to="/about"><Button className="signIn-btn text-black" id="aboutBtn">More About US</Button></Link>
            </div>
          </Col>
          <Col
            style={{
              background: `url(${qualityBadge})`,
              backgroundPosition: "center center",
              backgroundRepeat:"no-repeat",
              backgroundSize: "contain",
              height: "70vh",
            }}
          ></Col>
        </Row>
      </section>
    </Container>
  );
}
