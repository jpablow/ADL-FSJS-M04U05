import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="danger" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Feriados de Chile 2023</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
