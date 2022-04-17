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
import Services from './components/services/Services';
import Blog from './components/blog/Blog';
import Footer from './components/Footer/Footer'
import DetailsDisplay from './components/DetailsDisplay/DetailsDisplay';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
const auth = getAuth(app);




function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home of success</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="about">About Me</Nav.Link>
              <Nav.Link as={Link} to="services">Services</Nav.Link>
              <Nav.Link as={Link} to="blog">blog</Nav.Link>
              <NavDropdown title="More About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Demo class</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">youtube</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Live class</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="signUp">sign Up</Nav.Link>
              <Nav.Link as={Link} to="logIn">Log In </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="/service/:detailsId" element={<DetailsDisplay />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer></Footer>
    </div>

  );
}

export default App;
