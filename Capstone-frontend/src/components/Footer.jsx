
import { Container, Row, Col, } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='py-3 mt-5'>
      <Container>
        <Row>
          <Col md={4}>
          </Col>
          <Col md={4}>
            <p>SHOW BEACH <br /> C.da Salicetta, Marina di Sibari <br /> Cassano allo Ionio 87011 (CS)</p>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;