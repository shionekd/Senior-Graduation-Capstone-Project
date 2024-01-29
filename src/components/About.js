import '../App.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

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

import リーフレット1 from '../images/リーフレット.jpg';
import リーフレット2 from '../images/リーフレット2.jpg';

// import PDF1 from '../images/リーフレット1.pdf';
// import PDF2 from '../images/リーフレット2.pdf';

function About() {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
  });

  return (
    <section id="About">
      <Container>
        <Row>
          <Col className='text-center mt-4 mb-4 Krabi'>
            <motion.div
              initial={{
                opacity: 0,
                y: 200
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 5
              }}
            >
              <h2 >About Krabi</h2>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <motion.div
              initial={{
                opacity: 0,
                y: 200
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 5
              }}
            >
              <h5 className='justify-content-center text-center'>クラビとは</h5>
              <p>
                <br />
                Krabi (クラビ)はバンコクからは飛行機で約1.5時間の場所に位置し、<br />
                切り立つ石灰岩と熱帯ジャングルに囲まれています。<br />
                <br />
                息をのむような美しい景色や透き通った綺麗なビーチが有名で、<br />
                珊瑚礁の景観は世界でも有数の美しさを誇り、珊瑚礁でのダイビングには絶好のスポットです。<br />
                <br />
                温泉、野生動物保護区、海の洞窟、サンゴ礁の繁茂、エキゾチックな海洋生物、
                ロッククライミング愛好家が世界中から集まる石灰岩の崖、<br />
                ピピ島とランタ島を含む国立公園など、Krabiには多くの魅力あります。<br />
                <br />
                Krabiは「クライミングの聖地」と呼ばれる程、多くのクライミングスポット
                があり、ビギナーからベテランまで、世界中のクライマーが訪れるほど、人気のクライミングスポットです。
              </p>
            </motion.div>
          </Col>
          <Col sm={6} >
            <motion.div
              initial={{
                y: 200
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 5
              }}
            >
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
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center' sm={6}>
            <div ref={ref} style={{ marginTop: '150px' }}>
                {inView && (
                  <div className="animate__animated animate__fadeInUp">
                    <img
                      src={Thailand_map}
                      alt={Thailand_map}
                      className='Thailand_map'
                    />
                  </div>
                )}
              </div>
            </Col>
          <Col className='mt-5 KrabiGoogleMap' sm={6}>
            <Row className='mt-5'>
              <h5 className='justify-content-center text-center'>クラビへのアクセス</h5>
            </Row>
            <Row>
              <p>
                <br />
                クラビはタイ王国の南部の地域です。<br />
                東京からは飛行機で約7時間の距離にある、タイ王国の首都バンコクへ。<br />
                <br />
                そこから国内線に乗り継ぎ約1.5時間、Krabi (クラビ)へ到着します。<br />
                <br />
              </p>
            </Row>
            <Row className='ml-5'>
              <iframe
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011268.84532834!2d98.35381180545733!3d8.074030485221263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30518d792d7f9309%3A0x10223bc2c364c90!2z44K_44KkIOOCr-ODqeODk-ODvA!5e0!3m2!1sja!2sjp!4v1704756802193!5m2!1sja!2sjp'}
                style={{width: '400px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
                title={'Krabi'}
              />
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center text-center' style={{marginTop: '100px'}}>
          <Col sm={6}>
            <h2>Krabiについて 案内リーフレット</h2>
            <p className='visibilityHidden'>画像をクリックするとPDFがダウンロードできます。</p>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col sm={5} className='pdfDL mb-3'>
            <a
              // href={PDF1}
              download="Krabi Climbing Map 1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt={リーフレット1}
                src={リーフレット1}
                className='leafletHeight'
              />
            </a>
          </Col>
          <Col sm={6} style={{marginLeft: '-10px'}}>
          <a
              // href={PDF2}
              download="Krabi Climbing Map 2"
              download="Krabi Climbing Map 2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt={リーフレット2}
                src={リーフレット2}
                className='leafletHeight'
              />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;