import "../App.css";

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* img */
import logo from "../images/logo.png";

function Footer() {
  return (
    <section id="footer">
      <Container fluid>
        <Row className="footerRow">
          <Col className="d-flex align-items-center justify-content-center">
          <img
              className="footerLogo"
              alt={logo}
              src={logo}
          />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Krabi climbing
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <p>
              contact info<br />
                  krabi_climbing@info.com
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;