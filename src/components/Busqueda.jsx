import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

function Busqueda({ setBuscaFeriado }) {
  const [switchStatus, setSwitchStatus] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === 'btn-reset') {
      setBuscaFeriado(e.target.value);
      setSwitchStatus(false);
    } else {
      setBuscaFeriado(e.target.value);
    }
  };

  const handleSwitchChange = () => {
    switchStatus === false ? setSwitchStatus(true) : setSwitchStatus(false);
  };

  return (
    <Form className="my-4">
      <Stack gap={3}>
        <InputGroup>
          <Form.Control
            placeholder="Empieza a escribir para filtrar"
            id="busqueda"
            onChange={handleChange}
          />
          <Button
            variant="outline-danger"
            id="btn-reset"
            type="reset"
            onClick={handleChange}
          >
            Reiniciar
          </Button>
        </InputGroup>
        <InputGroup>
          <Col>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Sólo Feriados Irrenunciables"
              onClick={handleSwitchChange}
            />
          </Col>
          <Col>
            <Form.Select defaultValue={0} aria-label="TipoFeriado" size="sm">
              <option value={0} disabled>
                Tipo de Feriado
              </option>
              <option>Todos</option>
              <option value="Civil">Civil</option>
              <option value="Religioso">Religioso</option>
            </Form.Select>
          </Col>
        </InputGroup>
      </Stack>
    </Form>
  );
}

export default Busqueda;
