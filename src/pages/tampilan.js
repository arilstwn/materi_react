import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function CollapsibleExample() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {" "}
        {/* Mengubah warna latar belakang menjadi hitam */}
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://i.pinimg.com/originals/fd/e8/87/fde887d8d07a4ba78c229398e260dbac.jpg"
              alt="mr-2"
              style={{
                position: "relative",
                height: "50px",
                width: "50px",
                fontSize: "30px",
                fontWeight: "bold",
                letterSpacing: "2px",
                borderRadius: "50%", // Membuat gambar bundar
                padding: "0 2px",
              }}
            />
            <span
              style={{
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              Anime<span style={{ color: "red" }}>.shope</span>
            </span>{" "}
            {/* Mengubah warna teks menjadi putih */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>{" "}
              {/* Mengubah warna teks menjadi putih */}
              <Nav.Link href="/about" style={{ color: "white" }}>
                About
              </Nav.Link>{" "}
              <Nav.Link href="/tugas" style={{ color: "white" }}>
                Produk
              </Nav.Link>{" "}
              {/* Mengubah warna teks menjadi putih */}
              <NavDropdown
                style={{ color: "white" }}
                title="Rincian Anime "
                id="collapsible-nav-dropdown"
              >
                {" "}
                {/* Mengubah warna teks menjadi putih */}
                <NavDropdown.Item href="/login" style={{ color: "drak" }}>
                  <ul style={{ color: "#2100fa" }}>
                    <li>Isekai.</li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" style={{ color: "drak" }}>
                  <ul style={{ color: "#2100fa" }}>
                    <li>Romance.</li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3" style={{ color: "drak" }}>
                  <ul style={{ color: "#2100fa" }}>
                    <li>Komedi.</li>
                  </ul>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" style={{ color: "drak" }}>
                  <ul style={{ color: "#2100fa" }}>
                    <li>Keluarga.</li>
                  </ul>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0te9fRP7CH8fGRwS2kM_f-Q6C3AG2S4tyENgTGHdjAw&s"
                  alt="mr-2"
                  style={{
                    position: "relative",
                    height: "50px",
                    width: "50px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    borderRadius: "50%", // Membuat gambar bundar
                    padding: "0 2px",
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container className="text-center">
        {" "}
        {/* Kontainer diberi kelas text-center */}
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h1 style={{ color: "#4070f4" }}>
              Selamat Datang di Anime
              <span style={{ color: "red" }}>.shope</span>
            </h1>
            <p style={{ color: "black" }}>
              Dini kami menjual beberapa baju dan figuran anime yang mungkjin
              anda inginkan atau baju baut anda yang suka cosplay anime.
            </p>
            <Button variant="primary" className="btn-lg">
              Login Gab
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/12/5/abd985fb-1c98-49e0-bec4-70d75fabb067.jpg"
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CollapsibleExample;
