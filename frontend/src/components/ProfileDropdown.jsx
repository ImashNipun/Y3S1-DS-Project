import { Dropdown, Button } from "react-bootstrap";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProfileDropdown() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("auth");
    setAuth({});
    navigate("/");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <BsFillPersonFill />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          {auth.role === "buyer" ? (
            <Link to="/customer/profile">Profile</Link>
          ) : (
            <Link to="/seller/profile">Profile</Link>
          )}
        </Dropdown.Item>
        <Dropdown.Item>
          <Button onClick={() => logout()}>SignOut</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdown;
