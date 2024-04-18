import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./navbar.module.css"
// import NavDropdown from 'react-bootstrap/NavDropdown';


export  const NavBar = () => {
    return(
        <>
      <Navbar expand="lg" className="bg-body-tertiary" className={styles.container}>
      <Container>
        <Navbar.Brand href="#home" className={styles.mainTitle}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.navLink}>About</Nav.Link>
            <Nav.Link href="#projects" className={styles.navLink}>Projects</Nav.Link>
            <Nav.Link href="#about" className={styles.navLink}>Experirence</Nav.Link>
            <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
};
export default NavBar;