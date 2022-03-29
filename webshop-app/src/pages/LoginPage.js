import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import InputGroup from "react-bootstrap/InputGroup";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import "../css/LoginPage.css";

function LoginPage() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let loggedIn = false;

  if (localStorage.getItem("user_id")) {
    loggedIn = true;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          setError(false);
          localStorage.setItem("user_username", data.username);
          localStorage.setItem("user_id", data.id);
          localStorage.setItem("user_role", data.role);
          setShow(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setError(true);
          setInputs({ email: "", password: "" });
          localStorage.removeItem("user_username");
          localStorage.removeItem("user_id");
          localStorage.removeItem("user_role");
          setShow(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <NavbarComponent navStyle="simple" />
      <Container className="container d-flex justify-content-center flex-column align-items-center mt-5 pt-5">
        {loggedIn ? (
          <>
            <h3 className="main-title">You are already logged in.</h3>
            <LinkContainer to="/">
              <Button variant="outline-danger">Go back to Home page</Button>
            </LinkContainer>
          </>
        ) : (
          <>
            <h1 className="main-title">Login to your account</h1>
            <Form className="login-form mt-4">
              <InputGroup className="input-group mb-3">
                <InputGroup.Text className="input-group-text">
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
              <InputGroup className="input-group mb-3">
                <InputGroup.Text className="input-group-text">
                  <FaUnlock />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </InputGroup>
              <div className="text-center">
                <Button
                  type="submit"
                  variant="outline-danger"
                  className="w-100 mt-3"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <Form.Text>
                  You don't have an account?{" "}
                  <LinkContainer
                    to="/auth/register"
                    className="register-link text-danger"
                  >
                    <span>Register</span>
                  </LinkContainer>
                </Form.Text>
              </div>
            </Form>
          </>
        )}
      </Container>
      <div className="login-footer">
        <FooterComponent />
      </div>
      <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          {error ? (
            <>
              <Toast.Body>
                The email or the password are incorrect! Please try again.
              </Toast.Body>
            </>
          ) : (
              <Toast.Body>Successfully logged in!</Toast.Body>
          )}
        </Toast>
      </ToastContainer>
    </>
  );
}

export default LoginPage;
