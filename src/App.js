// import { Container, Nav, NavDropdown } from 'react-bootstrap'; 
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import LogIn from './components/login/LogIn';
// import Navbar from './components/navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignUp from './components/signUp/SignUp';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home of success</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="signUp">sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>

  );
}

export default App;
