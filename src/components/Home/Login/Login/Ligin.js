import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/login.jpg";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWidthGoogle } =
    useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWidthGoogle(location, navigate);
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col xs={6} md={6}>
            <h2>Login</h2>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <input
                  style={{ width: "75%" }}
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <br />
                <input
                  style={{ width: "75%" }}
                  placeholder="Your Password"
                  name="password"
                  type="password"
                  onBlur={handleOnBlur}
                />
                <br />
                <Button style={{ width: "75%" }} type="submit">
                  Login
                </Button>
              </form>
            )}
            {isLoading && <Spinner animation="border" />}
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button>New User? Please Register</Button>
            </Link>
            <br />
            <Button onClick={handleGoogleSignIn}>Google SignIn</Button>
            <br />
            {user.email && (
              <alert severity="success">User Login successfully</alert>
            )}
            {authError && <alert severity="error">{authError}</alert>}
          </Col>
          <Col xs={6} md={6}>
            <img style={{ width: "80%" }} src={login} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
