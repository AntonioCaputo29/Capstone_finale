import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import primopiatto from '../immagini/primo piatto.jpg';
import primopiatto2 from '../immagini/primopiatto2.jpg';
import secondopiatto from '../immagini/secondo piatto.jpg';
import secondopiatto2 from '../immagini/secondo piatto 2.jpg';

function Ristorante() {
  return (
    <div className="container my-custom-class fw-bold text-center">
      <h1 className="text-center">Ristorante</h1>
      <p className="text-center">Ogni giorno il nostro chef prepara le migliori pietanze</p>
     
      <div className="d-flex justify-content-center"> 
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primopiatto}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primopiatto2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondopiatto}
              alt="terza slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondopiatto2}
              alt="quarta slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Ristorante;
