import '../App.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Photo() {
  return (
    <section id="Photo">
      <Container fluid>
        <Row>
          <Col>
            <p>Photo test</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Photo;
