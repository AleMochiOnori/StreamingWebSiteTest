import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './NavBarComponent.css';

function FormExample() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between StyleNavBar">
      <Form className="d-inline">
        <InputGroup>
          <InputGroup.Text id="basic-addon1">Cerca Un Film</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default FormExample;