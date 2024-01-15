import '../App.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

/* img */
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/CryingRock.jpg";
import slide3 from "../images/slide3.JPG";
import Thailand_map from "../images/Thai_map.jpg";

function About() {
  return (
    <section id="About">
      <Container>
        <Row>
          <Col className='text-center mt-5 mb-5 Krabi'>
            {/* <p>クラビ</p>
            <h2 ><span>Krabi</span> とは</h2>*/}
            <h2 >About Krabi</h2>
          </Col>
        </Row>
        <Row className='justify-content-center text-center'>
          <Col className='ml-5'>
            <h5>クラビとは</h5>
            <p>
              <br />
              Krabi(クラビ)とはタイ王国にある、<br />「秘境のリゾート」と呼ばれる場所。<br />
              <br />
              バンコクからは飛行機で約1.5時間の場所に位置し、<br />
              切り立つ石灰岩と熱帯ジャングルに囲まれています。<br />
              <br />
              そしてKrabiは、世界中のクライマーから<br />
              「クライミングの聖地」<br />
              と呼ばれるほど、多くのクライミングスポットがあります。
            </p>
          </Col>
          <Col>
            <MDBCarousel showControls fade>
              <MDBCarouselItem itemId={1}>
                <img src={slide1} className='d-block w-100' alt='slide1' />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={2}>
                <img src={slide2} className='d-block w-100' alt='slide2' />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img src={slide3} className='d-block w-100' alt='slide3' />
              </MDBCarouselItem>
            </MDBCarousel>
          </Col>
        </Row>
        <Row className='justify-content-center text-center mt-5'>
          <Col>
              <img
                src={Thailand_map}
                alt={Thailand_map}
                style={{ height: '500px' }}

              />
            </Col>
          <Col className='mt-5'>
            <p>
              クラビはタイ王国の南部の地域にあります。<br />
              日本からは飛行機で約7時間の距離にある、タイ王国の首都であるバンコクへ飛び、<br />
              そこから国内線に乗り継ぎ約1.5時間、Krabi(クラビ)へ到着します。
            </p>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011268.84532834!2d98.35381180545733!3d8.074030485221263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30518d792d7f9309%3A0x10223bc2c364c90!2z44K_44KkIOOCr-ODqeODk-ODvA!5e0!3m2!1sja!2sjp!4v1704756802193!5m2!1sja!2sjp'}
              style={{width: '400px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Krabi'}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;