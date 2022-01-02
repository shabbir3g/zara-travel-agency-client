import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
  const { user, logOut } = useAuth({});
  return (
    <div>
      <h2>travels</h2>
      <Link to="/home">
        <Button color="inherit">Home</Button>
      </Link>
      {user?.email ? (
        <Button onClick={logOut} color="inherit">
          Logout
        </Button>
      ) : (
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      )}
    </div>
  );
};

export default Banner;
