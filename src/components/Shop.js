import '../App.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

/* img */
import example01 from "../images/findroot.jpg";
import example02 from "../images/ThePinnacle.jpg";
import example03 from "../images/example.JPG";
import krabiRockClimbing from "../images/krabiRockClimbing.png";
import shop from "../images/shop.JPG";


function Shop() {
  const { ref, inView } = useInView({
    rootMargin: '-100px'
  });
  
  return (
    <section id="Shop">
      <Container >
        <Row>
          <Col className='text-center mt-5'>
            <h2 className='pageTitle'>おすすめクライミングショップ</h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mb-4 mt-4'>
            <p>Krabiでクライミングを楽しむ際は、3通りの楽しみ方があります。</p>
          </Col>
        </Row>
        <motion.div
          initial={{
            y: 600
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 5
          }}
        >
          <Row>
            <Col className='justify-content-center text-center examplecol example mt-3' sm={3}>
              <div className='exampleArea'>
                <a href='area'>
                  <h3 className='mt-2'>01</h3>
                    <img
                      className='mt-3 mb-3'
                      alt={example01}
                      src={example01}
                      style={{height: '300px'}}
                    />
                  <p>
                    クライミングマップを片手に、<br />クライミングルートを自身で探す。<br />
                    <br />
                    <span style={{fontSize: '0.7rem'}}>Krabiおすすめクライミングエリアは<span> <br />
                    こちらのページからご覧いただけます。</span></span>
                  </p>
                </a>
              </div>
            </Col>
            <Col className='justify-content-center text-center examplecol example mt-3' sm={3}>
              <div className='exampleArea'>
                <a href='#KrabiRockClimbing'>
                  <h3 className='mt-3'>02</h3>
                  <img
                    className='mt-3 mb-3'
                    alt={example02}
                    src={example02}
                    style={{height: '300px'}}
                  />
                  <p>
                    クライミングショップの<br />グループクライミングに参加する。<br />
                    <br />
                    <span style={{fontSize: '0.7rem'}}>Krabiおすすめクライミングショップは<br />下記にてご案内します。</span>
                  </p>
                </a>
              </div>      
            </Col>
            <Col className='justify-content-center text-center examplecol example mt-3' sm={3}>
              <div className='exampleArea'>
                <a href='#KrabiRockClimbing'>
                  <h3 className='mt-3'>03</h3>
                  <img
                    className='mt-3 mb-3'
                    alt={example03}
                    src={example03}
                    style={{height: '300px'}}
                  />
                  <p>
                    クライミングショップに<br />プライベートガイドを頼む。<br />
                    <br />
                    <span style={{fontSize: '0.7rem'}}>Krabiおすすめクライミングショップは<br />下記にてご案内します。</span>
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </motion.div>
        <Row style={{marginTop: '100px'}}>
          <Col className='justify-content-center text-center'>
            <h5>このページではおすすめのクライミングショップを紹介します。</h5>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col className='mt-4 KrabiShopTitle'>
            <h2 className='text-right KrabiShop' >Krabi Rock Climbing </h2>
          </Col>
        </Row>
        <Row id='KrabiRockClimbing'>
          <Col className='justify-content-center text-center' sm={6}>
            <div ref={ref} style={{ height: '200px' }}>
              {inView && (
                <div className="animate__animated animate__bounce">
                  <a href='https://krabirockclimbing.com'>
                    <img
                      alt={krabiRockClimbing}
                      src={krabiRockClimbing}
                      className='krabiRockClimbing'
                    />
                  </a>
                </div>
              )}
            </div>
          </Col>
          <Col className='mt-3 KrabiClimbingText' sm={6}>
            <p className='KrabiClimbingInfo'>
              <br />
              「Krabi Rock Climbing」はKrabi拠点のクライミングショップです。
              オーナーさんはタイ人の男性で、英語も堪能なとても陽気な方です。<br />
              ご家族経営のアットホームなクライミングショップです。<br />
              <br />
              「Krabi Rock Climbing」では、上記で述べたクライミング方法のうち<br />
              グループクライミング、プライベートガイドを行なっています。<br />
              <br />
              Krabiでクライミングを行う際は、ぜひ連絡をしてみてください。
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center text-center mt-5'>
          <Col sm={9} className='mt-4'>
            <Table responsive>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Half Day<br />9:30-13:00 / 14:00-17:30</th>
                  <th>Full Day<br />9:30-17:30</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>グループクライミング</td>
                    <td>THB 1500 (約6,000円)</td>
                    <td>THB 2600 (約10,400円)</td>
                </tr>
                <tr>
                  <td>プライベートガイド</td>
                    <td>THB 3500 (約14,000円)</td>
                    <td>THB 5500 (約22,000円)</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col className='info' sm={5}>
            <Row className='mt-5'>
              <Col sm={5} xs={4}>
                <p>アドレス</p>
              </Col>
              <Col sm={7} xs={8}>
                <p>Railay Beach, Ao Nang, Krabi, <br />Thailand 81180</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5} xs={4}>
                <p>営業時間</p>
              </Col>
              <Col sm={7} xs={8}>
                毎日 9:00 ~ 18:00<br />
                <p className='small'>※雨季は長期休業予定あり、要予約</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5} xs={4}>
                <p>HP</p>
              </Col>
              <Col sm={7} xs={8}>
                <a className="underlinenon" href='https://krabirockclimbing.com'>https://krabirockclimbing.com</a>
              </Col>
            </Row>
            <Row>
              <Col sm={5} xs={4}>
                <p>Email</p>
              </Col>
              <Col sm={7} xs={8}>
                <p>krabirockclimbing@gmail.com</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5} xs={4}>
                <p>WHATSAPP & LINE</p>
              </Col>
              <Col sm={7} xs={8}>
                <p>+66 908723319</p>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <img
              alt={shop}
              src={shop}
              className='shop'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Shop;
