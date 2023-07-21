import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import primaimmaginespiaggia from '../immagini/prima immagine spiaggia.jpg';
import secondaimmaginespiaggia from '../immagini/seconda immagine spiaggia.jpg';
import terzaimmaginespiaggia from '../immagini/terza immagine spiaggia.jpg';
import quartaimmaginespiaggia from '../immagini/quarta immagine spiaggia.jpg';

function Spiaggia() {
  return (
    <div className="container my-custom-class fw-bold text-center">
      <h1 className="text-center">Spiaggia</h1>
      <p className="text-center">Trascorri con noi una giornata davvero indimenticabile</p>
     
      <div className="d-flex justify-content-center"> 
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primaimmaginespiaggia}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondaimmaginespiaggia}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={terzaimmaginespiaggia}
              alt="terza slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={quartaimmaginespiaggia}
              alt="quarta slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Spiaggia;
