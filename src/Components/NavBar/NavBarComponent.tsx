import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './NavBarComponent.css';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between StyleNavBar">
      <Form className="d-inline">
        <h1>LIVE STREAMING</h1>
        <InputGroup>
       
        
        </InputGroup>
      </Form>
    </Navbar>
  );
}

export default NavBar;