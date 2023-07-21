import { Carousel, Card, Button } from 'react-bootstrap';
import copertinaspiaggia from '../immagini/copertina spiaggia.jpg';
import copertinaristorante from '../immagini/copertina ristorante.jpg';
import copertinabar from '../immagini/copertina bar.jpg';
import copertinaanimazione from '../immagini/copertina animazione.jpg';
import copertinadiscopub from '../immagini/copertina discopub.jpg';
import copertinaprenotazione from '../immagini/copertina prenotazione.jpg';
import '../App.css';
import { useEffect } from 'react';


function Homepage() {
  function handleClick(activity) {
    if (activity === 'Spiaggia') {
      window.location.href = 'Spiaggia';
    } else if (activity === 'Ristorante') {
      window.location.href = '/Ristorante';
    } else if (activity === 'Bar') {
      window.location.href = 'Bar';
    } else if (activity === 'Animazione') {
      window.location.href = '/Animazione';
    } else if (activity === 'Discopub') {
      window.location.href = 'Discopub';
    } else if (activity === 'Prenotazione') {
      window.location.href = 'Prenotazione';
    }
  }



  const fetchPrenotazione= async () =>{
    try {
      let response = await fetch ("http://localhost:8080/prenotazioni/tuttePrenotazioni")
      if (response.ok){
        let dati = await response.json ()
        console.log (dati)
      }
    } catch (error) {
      console.log("errore " + error )
    }
  }
 useEffect(()=>{fetchPrenotazione()},[])



  return (
    <div className='container mt-4'>
      <Carousel>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }}>
            <Card.Img variant='top' src={copertinaspiaggia} className='adapt' />
            <Card.Body className='Home'>
              <Card.Title className='fw-bold  esperienze'>Spiaggia</Card.Title>
              <Button className='button-prenota fw-bold' variant='success' onClick={() => handleClick('Spiaggia')}>
                Visiona
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }}>
            <Card.Img variant='top' src={copertinaristorante} className='adapt'  />
            <Card.Body className='Home' >
              <Card.Title className='fw-bold esperienze'>Ristorante</Card.Title>
              <Button className='button-prenota fw-bold' variant='success' onClick={() => handleClick('Ristorante')}>
                Visiona
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }} >
            <Card.Img variant='top' src={copertinabar} className='adapt'  />
            <Card.Body className='Home' >
              <Card.Title className='fw-bold esperienze'>Bar</Card.Title>
              <Button className='button-prenota fw-bold' variant='success' onClick={() => handleClick('Bar')}>
                Visiona
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }}>
            <Card.Img variant='top' src={copertinaanimazione} className='adapt'  />
            <Card.Body className='Home' >
              <Card.Title className='fw-bold esperienze'>Animazione</Card.Title>
              <Button className='button-prenota fw-bold' variant='success' onClick={() => handleClick('Animazione')}>
                Visiona
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }} >
            <Card.Img variant='top' src={copertinadiscopub}  className='adapt' />
            <Card.Body className='Home' >
              <Card.Title className='esperienze fw-bold'>Discopub</Card.Title>
              <Button className='button-prenota fw-bold' variant='success' onClick={() => handleClick('Discopub')}>
                Visiona
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='card' style={{ width: '100%', height: 'auto' }}>
            <Card.Img variant='top' src={copertinaprenotazione}  className='adapt' />
            <Card.Body className='Home' >
              <Card.Title className='fw-bold esperienze'>Prenota la tua giornata</Card.Title>
              <Button className='button-prenota  fw-bold' onClick={() => handleClick('Prenotazione')}>
                Prenota
              </Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Homepage;
