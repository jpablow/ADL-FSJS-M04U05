import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

function Busqueda({ setBuscaFeriado, setFerFecha, setFerTipo }) {
  const handleChange = (e) => {
    if (e.target.id === 'busqueda') {
      setBuscaFeriado(e.target.value);
    } else if (e.target.id === 'btn-reset') {
      setBuscaFeriado(e.target.value);
      setSwitchStatus(false);
      setFerFecha(-1);
      setFerTipo('all');
    } else if (e.target.id === 'select-tipo') {
      setFerTipo(e.target.value);
    } else if (e.target.id === 'select-mes') {
      setFerFecha(Number(e.target.value));
    } else {
      null;
    }
  };

  //   const handleSwitchChange = () => {
  //     switchStatus === false ? setSwitchStatus(true) : setSwitchStatus(false);
  //   };

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
          {/* <Col>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Sólo Feriados Irrenunciables"
              onChange={handleSwitchChange}
            />
          </Col> */}
          <Col className="me-2">
            <Form.Select
              defaultValue="all"
              aria-label="select-tipo"
              size="sm"
              id="select-tipo"
              onChange={handleChange}
            >
              <option value="all" disabled>
                Tipo de Feriado
              </option>
              <option>Todos</option>
              <option value="Civil">Civil</option>
              <option value="Religioso">Religioso</option>
            </Form.Select>
          </Col>
          <Col className="ms-2">
            <Form.Select
              defaultValue={-1}
              aria-label="select-mes"
              size="sm"
              id="select-mes"
              onChange={handleChange}
            >
              <option value={-1} disabled>
                Mes
              </option>
              <option value={-1}>Todos</option>
              <option value={0}>Enero</option>
              <option value={1}>Febrero</option>
              <option value={2}>Marzo</option>
              <option value={3}>Abril</option>
              <option value={4}>Mayo</option>
              <option value={5}>Junio</option>
              <option value={6}>Julio</option>
              <option value={7}>Agosto</option>
              <option value={8}>Septiembre</option>
              <option value={9}>Octubre</option>
              <option value={10}>Noviembre</option>
              <option value={11}>Diciembre</option>
            </Form.Select>
          </Col>
        </InputGroup>
      </Stack>
    </Form>
  );
}

export default Busqueda;
