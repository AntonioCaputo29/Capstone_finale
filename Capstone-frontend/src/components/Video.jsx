import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import '../App.css';





function Video() {
  return (
    <Container className='mt-3 my-jumbotron'>
      <Row className='position-relative jumbotron-row'>
        <video className='full-width-video video-container' autoPlay muted loop>
          <source src={require('../immagini/Videohome.mp4')} type='video/mp4' />
        </video>
        <Col md={12} className='text-center'>
          <p className='lead fw-bold text-inferiore'>
            Vivi la magia della costa ionica <br /> passa le tue vacanze in nostra compagnia
          </p>
        </Col>
      </Row>
      <Row className='mt-3 align-items-center'>
        <Col md={4} className='d-flex justify-content-end'>
        </Col>
        <Col md={4} className='text-center'>
          <h2 className='attività'>Scopri i nostri servizi</h2>
        </Col>
        <Col md={4} className='d-flex justify-content-start'>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;




