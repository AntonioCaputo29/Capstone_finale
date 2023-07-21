import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import primaimmaginebar from '../immagini/prima immagine bar.jpg';
import secondaimmaginebar from '../immagini/seconda immagine bar.jpg';
import terzaimmaginebar from '../immagini/terza immagine bar.jpg';
import quartaimmaginebar from '../immagini/quarta immagine bar.jpg';

function Bar() {
  return (
    <div className="container my-custom-class fw-bold text-center">
      <h1 className="text-center">Bar</h1>
      <p className="text-center">Da noi potrai consumare grandi colazioni e degustare i migliori aperitivi</p>
     
      <div className="d-flex justify-content-center"> 
        <Carousel className="d-flex justify-content-center" >
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={primaimmaginebar}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={secondaimmaginebar}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={terzaimmaginebar}
              alt="terza slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block custom-carousel-image"
              src={quartaimmaginebar}
              alt="quarta slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Bar;
