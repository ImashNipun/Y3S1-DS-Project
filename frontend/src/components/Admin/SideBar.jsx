import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { HiUser } from "react-icons/hi";
import { BsFillBox2HeartFill, BsCartFill } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function SideBar() {
  return (
    <Col xs lg="2" className="side-bar">
      <Row>
        <Col className="ms-4 mt-4 mb-5">
            <Link to="/admin" className="sidebar-links"><h3>RareAyur</h3></Link>
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <MdDashboard className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin" className="sidebar-links">Dashboard</Link>
          
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <HiUser className="me-4 side-bar-icon" id="user-icon" />
          <Link to="/admin/customer" className="sidebar-links">Customer</Link>
          
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <BsFillBox2HeartFill className="me-4 side-bar-icon" />
          <Link to="/admin/product" className="sidebar-links">Products</Link>
          
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <FaHandHoldingHeart className="me-4 side-bar-icon" />
          <Link to="/admin/seller" className="sidebar-links">Sellers</Link>
          
        </Col>
      </Row>
      <Row>
        <Col className="ms-4 mt-3 mb-5">
          <BsCartFill className="me-4 side-bar-icon" />
          <Link to="/admin/order" className="sidebar-links">Orders</Link>
          
        </Col>
      </Row>
      <Row>
        <Col className="ms-5 mt-5">
          <Button variant="light" className="bg-white">
            Sign out
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
