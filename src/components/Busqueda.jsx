import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Busqueda({ setBuscaFeriado }) {
  const handleChange = (e) => {
    setBuscaFeriado(e.target.value);
  };

  return (
    <Form className="my-4">
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
    </Form>
  );
}
export default Busqueda;
