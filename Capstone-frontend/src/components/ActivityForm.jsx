import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Spinner, Modal } from 'react-bootstrap';

function ActivityBookingForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [partecipants, setPartecipants] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [prenotazione, setPrenotazione] = useState({
    nome:"",
    cognome:"",
    mail:"",
    telefono:"",
    dataPrenotazione:"",
    numeroPersone:"",
    bambini:false,
    messaggio:""
  });
  const fetchRegistrazione= async () =>{
    try {
      let response = await fetch ("http://localhost:8080/prenotazioni",{
        method:"POST",
        body:JSON.stringify(prenotazione),
        headers:{
          'content-type':'application/json'
        }
      })
      if (response.ok){
        let dati = await response.json ()
        console.log (dati)
        alert('Prenotazione effettuata con successo!')
      }
    } catch (error) {
      console.log("errore " + error )
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setShowSpinner(true);

    const bookingData = {
      name,
      surname,
      email,
      phone,
      date,
      hasChildren,
      partecipants,
      specialRequests,
    };

    fetch('https://jsonserver-api.herokuapp.com/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setLoading(false);
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setDate('');
        setHasChildren(false);
        setPartecipants(1);
        setSpecialRequests('');
        fetchBookings();
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        alert('Si è verificato un errore durante la prenotazione.');
      })
      .finally(() => {
        setShowSpinner(false);
      });
  };

  const fetchBookings = () => {
    fetch('https://jsonserver-api.herokuapp.com/activities')
      .then((response) => response.json())
      .then((data) => {
        console.log('Bookings:', data);
        setBookings(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleEdit = (booking) => {
    setName(booking.name);
    setSurname(booking.surname);
    setEmail(booking.email);
    setPhone(booking.phone);
    setDate(booking.date);
    setHasChildren(booking.hasChildren);
    setPartecipants(booking.partecipants);
    setSpecialRequests(booking.specialRequests);
  };

  const handleDelete = (bookingId) => {
    setLoading(true);
    fetch(`https://jsonserver-api.herokuapp.com/activities/${bookingId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Success:', response);
        setLoading(false);
        alert('Prenotazione cancellata con successo!');
        fetchBookings();
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        alert('Si è verificato un errore durante la cancellazione della prenotazione.');
      });
  };

  const handleShowModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setShowModal(false);
  };

  return (
    <Container>
      <div className="text-center">
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="My-custom-class fw-bold">Nome</Form.Label>
            <Form.Control
              className="My-custom-form text-color-dark"
              type="text"
              placeholder="Inserisci il nome"
              value={prenotazione.nome}
              onChange={(e) => {
                setPrenotazione({...prenotazione, nome:e.target.value})
              } }
              required
            />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label className="My-custom-class fw-bold">Cognome</Form.Label>
            <Form.Control
              className="My-custom-form"
              type="text"
              placeholder="Inserisci il cognome"
              value={prenotazione.cognome}
              onChange={(e) => {
                setPrenotazione({...prenotazione, cognome:e.target.value})  
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="My-custom-class fw-bold">Email</Form.Label>
            <Form.Control
              className="My-custom-form"
              type="email"
              placeholder="Inserisci l'email"
              value={prenotazione.mail}
              onChange={(e) => {
                setPrenotazione({...prenotazione, mail:e.target.value})
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label className="My-custom-class fw-bold">Telefono</Form.Label>
            <Form.Control
              className="My-custom-form"
              type="text"
              placeholder="Inserisci il numero di telefono"
              value={prenotazione.telefono}
              onChange={(e) => {
                setPrenotazione({...prenotazione, telefono:e.target.value})
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label className="My-custom-class fw-bold">Data prenotazione</Form.Label>
            <Form.Control
              className="My-custom-form"
              type="date"
              placeholder="Seleziona la data"
              value={prenotazione.dataPrenotazione}
              onChange={(e) => {
                setPrenotazione({...prenotazione, dataPrenotazione:e.target.value})
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formHasChildren">
            <Form.Check
              className="form-label text-start fw-bold"
              type="checkbox"
              label="Bambini"
              value={prenotazione.bambini}
              onChange={(e) => {
                setPrenotazione({...prenotazione, bambini:e.target.checked})
              }}
            />
          </Form.Group>
          <Form.Group controlId="formPartecipants">
            <Form.Label className="My-custom-class fw-bold">Numero persone</Form.Label>
            <Form.Control
              className="My-custom-form"
              type="number"
              min={1}
              value={prenotazione.numeroPersone}
              onChange={(e) => {
                setPrenotazione({...prenotazione, numeroPersone:e.target.value})
              }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formSpecialRequests">
            <Form.Label className="My-custom-class fw-bold">Lascia un messaggio</Form.Label>
            <Form.Control
              className="My-custom-form"
              as="textarea"
              rows={3}
              placeholder="Inserisci il tuo messaggio"
              value={prenotazione.messaggio}
              onChange={(e) => {
                setPrenotazione({...prenotazione, messaggio:e.target.value})
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mx-auto mt-5 my-custom-class button-prenota"
            disabled={showSpinner}
            onClick={()=>{fetchRegistrazione()}}
          >
            {showSpinner ? <Spinner animation="border" size="sm" /> : 'Prenota'}
          </Button>
        </Form>
      </div>
      
      {bookings.map((booking) => (
  <div key={booking.id} className="button-wrapper">
    <div className="d-flex flex-column align-items-center">
      <Button className="modifica mt-4" variant="outline-primary" size="sm" onClick={() => handleEdit(booking)}>
        Modifica
      </Button>
      <Button className="btn-cancella mt-4" variant="outline-danger" size="sm" onClick={() => handleDelete(booking.id)}>
        Cancella
      </Button>
      <Button className="btn-dettagli mt-4" variant="outline-info" size="sm" onClick={() => handleShowModal(booking)}>
        Dettagli
      </Button>
    </div>
  </div>
))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Dettagli prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <>
              <p>
                <strong>Nome:</strong> {prenotazione.nome}
              </p>
              <p>
                <strong>Cognome:</strong> {prenotazione.cognome}
              </p>
              <p>
                <strong>Email:</strong> {prenotazione.mail}
              </p>
              <p>
                <strong>Telefono:</strong> {prenotazione.telefono}
              </p>
              <p>
                <strong>Data prenotazione:</strong> {prenotazione.dataPrenotazione}
              </p>
              <p>
                <strong>Bambini:</strong> {prenotazione.bambini ? 'Si' : 'No'}
              </p>
              <p>
                <strong>Numero partecipanti:</strong> {prenotazione.numeroPersone}
              </p>
              <p>
                <strong>Messaggio:</strong> {prenotazione.messaggio}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ActivityBookingForm;

