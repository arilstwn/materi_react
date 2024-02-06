import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPw20a7DhgU45dGhpJI2G-EhvGJZ6Q-a9XtDtqEMEKeA&s" alt="mr-2" style={{position: "relative", height: "50px", width: "50px"}} /></Navbar>
        <Navbar.Brand href="#home">Anime<span style={{color: "#4070f4"}}>.jawa</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Vidio</Nav.Link>
            <Nav.Link href="/data_diri">Jadwal anime</Nav.Link>
            <NavDropdown title="Rincian Anime " id="collapsible-nav-dropdown">
              <NavDropdown.Item href="tambahan"> Isekai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Komedi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Keluarga
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzdC8tyLdAaX5o6jygK9y6ruUdNcAyNqLjZTW1XuN6w&s" alt="" style={{position: "relative", height: "40px", width: "40px"}} />
            </Nav.Link>
           <Navbar>
           </Navbar>
          </Nav>
        </Navbar.Collapse>
        
      </Container>

      
    </Navbar>

    


  );
}

export default CollapsibleExample;
