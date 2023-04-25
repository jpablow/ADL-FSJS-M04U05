import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DatosFeriados from './components/MiApi';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Busqueda from './components/Busqueda';
import { useState } from 'react';

function App() {
  const [buscaFeriado, setBuscaFeriado] = useState('');
  const [ferFecha, setFerFecha] = useState(-1);
  const [ferTipo, setFerTipo] = useState('all');

  return (
    <>
      <Header />
      <Container fluid="lg" className="mt-3 pb-3">
        <Accordion defaultActiveKey={['1']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Busca un Feriado</Accordion.Header>
            <Row>
              <Col></Col>
              <Col xs={12} md={10} lg={10} xl={10} xxl={8}>
                <Accordion.Body>
                  <Busqueda
                    setBuscaFeriado={setBuscaFeriado}
                    setFerTipo={setFerTipo}
                    setFerFecha={setFerFecha}
                  />
                </Accordion.Body>
              </Col>
              <Col></Col>
            </Row>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="py-4">
            <DatosFeriados
              buscaFeriado={buscaFeriado}
              ferTipo={ferTipo}
              ferFecha={ferFecha}
            />
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default App;
