import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import primaimmaginediscopub from '../immagini/prima immagine discopub.jpg';
import secondaimmaginediscopub from '../immagini/seconda immagine discopub.jpg';
import terzaimmaginediscopub from '../immagini/terza immagine discopub.jpg';
import quartaimmaginediscopub from '../immagini/quarta immagine discopub.jpg';

function Discopub() {
  return (
    <div className="container my-custom-class fw-bold text-center">
      <h1 className="text-center">Discopub</h1>
      <p className="text-center">Per le tue serate all'insegna della musica e del divertimento, vieni a ballare sotto le stelle</p>
     
      <div className="d-flex justify-content-center"> 
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primaimmaginediscopub}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondaimmaginediscopub}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={terzaimmaginediscopub}
              alt="terza slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={quartaimmaginediscopub}
              alt="quarta slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Discopub;
