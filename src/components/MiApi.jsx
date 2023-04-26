import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function DatosFeriados({ buscaFeriado }) {
  const [feriados, setFeriados] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'https://api.victorsanmartin.com/feriados/en.json';
    const resp = await fetch(url);
    const data = await resp.json();
    setFeriados(data.data);
  };

  function displayDate(fecha) {
    let to = new Date(fecha).getTimezoneOffset() * 60000;
    let dateCl = new Date(Date.parse(fecha) + to);

    return dateCl.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const ferFiltro = feriados.filter((feriado) =>
    feriado.title.toLocaleLowerCase().includes(buscaFeriado.toLocaleLowerCase())
  );

  return (
    <>
      <h4 className="pt-4 text-center">Feriados de Chile</h4>
      <Row>
        <Col></Col>
        <Col xs={10} md={8} lg={8} xl={7} xxl={6}>
          <Accordion.Body as="div">
            {ferFiltro.map((feriado, i) => (
              <ListGroup key={i}>
                <ListGroup.Item variant="secondary" className="wrap">
                  {displayDate(feriado.date)}
                </ListGroup.Item>
                <ListGroup.Item className="mb-2 wrap">
                  {feriado.title}
                  <br></br>
                  <hr></hr>
                  {feriado.extra}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Accordion.Body>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
export default DatosFeriados;
