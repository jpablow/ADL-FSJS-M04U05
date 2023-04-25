import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function DatosFeriados({ buscaFeriado, ferFecha, ferTipo }) {
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
    let dcons = new Date(Date.parse(fecha) + to);
    let m = dcons.getMonth();

    return new Date(Date.parse(fecha) + to).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function dateMonth(fecha) {
    let to = new Date(fecha).getTimezoneOffset() * 60000;
    let dcons = new Date(Date.parse(fecha) + to);
    let m = dcons.getMonth();
    console.log(ferFecha);
    return m;
  }

  return (
    <>
      <h4 className="pt-4 text-center">Feriados de Chile</h4>
      <Row>
        <Col></Col>
        <Col xs={10} md={8} lg={8} xl={7} xxl={6}>
          <Accordion.Body as="div">
            {feriados
              .filter((feriado) =>
                feriado.title
                  .toLowerCase()
                  .includes(buscaFeriado.toLocaleLowerCase()) &&
                ferTipo === 'all'
                  ? true
                  : feriado.extra
                      .toLocaleLowerCase()
                      .includes(ferTipo.toLocaleLowerCase()) && ferFecha === -1
                  ? true
                  : dateMonth(feriado.date) === ferFecha
              )
              .map((feriado, i) => (
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
