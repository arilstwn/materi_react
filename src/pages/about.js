import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
  return (
    <div className="landing-page">
           <Container className="text-center">
        {" "}
        {/* Kontainer diberi kelas text-center */}
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <h1 style={{ color: "#4070f4" }}>
              Anime
              <span style={{ color: "red" }}>.shope</span>
            </h1>
            <p style={{ color: "black" }}>
              Dini kami menjual beberapa tentang anime seperti baju anime dll.
              kami juga menjual Karakter anime yang bagus seperti karakter figuran mahiru dll dan di anime shope ini sangat murah dan terjamin aman barang bagus dan anda juga bisa membayar di tempat atau lewat dana dan rekening bank anda.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://i.pinimg.com/originals/fd/e8/87/fde887d8d07a4ba78c229398e260dbac.jpg" style={{padding: "50px", margin: "40px", paddingRadius: "30px"}}
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
