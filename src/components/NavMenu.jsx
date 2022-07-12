import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "./LogoutButton.jsx";

export const NavMenu = (props) => {
  return (
    <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            Hexlet Chat
          </NavLink>
        </Navbar.Brand>
        <LogoutButton />
      </Container>
    </Navbar>
  );
};
