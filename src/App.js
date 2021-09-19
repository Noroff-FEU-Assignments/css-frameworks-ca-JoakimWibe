import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <div>
            <Navbar bg="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                    <NavLink to="/news" className="nav-link">
                      News
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                    <Button variant="go">GO</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Switch>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      <Footer />
    </>
  );
}

export default App;
