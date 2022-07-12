import { LoginForm } from "../components/LoginForm.jsx";
import logo from "../assets/Login.jpeg";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginPage = (props) => (
  <div className="h-100">
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              Hexlet Chat
            </a>
          </div>
        </nav>
        <Container className="h-100">
          <div className="row justify-content-center align-content-center h-100">
            <div className="col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
              <Card className="shadow-sm">
                <Card.Body className="row px-lg-5">
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <Card.Img src={logo} className="rounded-circle" alt="login" />
                  </div>
                  <LoginForm />
                </Card.Body>
                <Card.Footer className="p-4">
                  <div className="text-center">
                    <span>Нет аккаунта?</span> <Link to="/signup">Регистрация</Link>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </Container>
      </div>
      <div className="Toastify"></div>
    </div>
  </div>
);
