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

export default About;
