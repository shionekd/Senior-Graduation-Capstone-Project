import "../App.css";
// import PDF from "../images/KrabiClimbingMap.pdf";

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
      <Container>
        <Row className="footerRow">
          <Col></Col>
          <Col className="d-flex align-items-center justify-content-center mt-5 ml3" sm={3}>
            <a href="/">
              <img
                  className="footerLogo"
                  alt={logo}
                  src={logo}
              />
            </a>
          </Col>
          <Col className="d-flex align-items-center justify-content-center" sm={3} style={{marginTop: '90px'}}>
            <p className="contactInfo text-center">contact info
              <span style={{fontSize: 'small'}}><br />krabi_climbing@info.com</span>
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center footerDLD" sm={2} style={{marginLeft: '70px', marginTop: '100px'}}>
            <a
              // href={PDF}
              download="Krabi Climbing Map"
              target="_blank"
              rel="noreferrer"
            >
              <p className="visibilityHidden">
                クライミングマップ<br />
                ダウンロードはこちら
              </p>
            </a>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
              <p className="text-center ml-4" style={{fontSize: "small"}}>
                Copyright&nbsp;&copy;&nbsp;Krabi climbing
              </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;