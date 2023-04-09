import React from "react";
import {IoIosNotifications} from "react-icons/io";
import profile from "../../images/admin-profile.jpg"
import {Row, Col} from "react-bootstrap";

export default function AdminNavBar() {
  return (
    <Row>
      <Col className="d-flex justify-content-end align-items-center navgation-bar">
        <div className="d-flex me-5 align-items-center">
          <div
            className="me-3 admin-profile-pic"
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
          <div>Profile-name</div>
        </div>
        <div className="me-5 notification-icon">
          <IoIosNotifications />
        </div>
      </Col>
    </Row>
  );
}
