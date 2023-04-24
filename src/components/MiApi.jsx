import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';

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
                  .includes(buscaFeriado.toLocaleLowerCase())
              )
              .map((feriado, i) => (
                <ListGroup key={i}>
                  <ListGroup.Item variant="secondary" className="wrap">
                    {feriado.date}
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
    // <ol>
    //   {bdFeriados.map((feriado, i) => (
    //     <>
    //       <li key={i}>{feriado.title}</li>
    //       <ul>
    //         <li>Fecha: {feriado.date}</li>
    //         <li>Tipo: {feriado.extra}</li>
    //       </ul>
    //       <br></br>
    //     </>
    //   ))}
    // </ol>
  );
}
export default DatosFeriados;
