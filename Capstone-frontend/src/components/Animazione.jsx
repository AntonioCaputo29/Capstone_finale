import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import primaimmagineanimazione from '../immagini/prima immagine animazione.jpg';
import secondaimmagineanimazione from '../immagini/seconda immagine animazione.jpg';
import terzaimmagineanimazione from '../immagini/terza immagine animazione.jpg';
import quartaimmagineanimazione from '../immagini/quarta immagine animazione.jpg';

function Animazione() {
  return (
    <div className="container my-custom-class fw-bold text-center">
      <h1 className="text-center">Animazione</h1>
      <p className="text-center">I nostri migliori animatori ti faranno passare una giornata all'insegna del divertimento</p>
     
      <div className="d-flex justify-content-center"> 
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primaimmagineanimazione}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondaimmagineanimazione}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={terzaimmagineanimazione}
              alt="terza slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={quartaimmagineanimazione}
              alt="quarta slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Animazione;
