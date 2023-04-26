import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import DatosFeriados from './components/MiApi';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Busqueda from './components/Busqueda';
import Image from 'react-bootstrap/Image';

function App() {
  const [buscaFeriado, setBuscaFeriado] = useState('');

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Image
            src="https://imgmedia.larepublica.pe/1200x660/larepublica/original/2021/11/27/61a29e2bd528765b053d856a.jpg"
            fluid
          />
        </Row>
      </Container>
      <Container fluid="lg" className="mt-3 pb-3">
        <Accordion defaultActiveKey={['1']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Busca un Feriado</Accordion.Header>
            <Row>
              <Col></Col>
              <Col xs={12} md={10} lg={10} xl={10} xxl={8}>
                <Accordion.Body>
                  <Busqueda setBuscaFeriado={setBuscaFeriado} />
                </Accordion.Body>
              </Col>
              <Col></Col>
            </Row>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="py-4">
            <DatosFeriados buscaFeriado={buscaFeriado} />
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default App;
