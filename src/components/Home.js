import "../App.css";
import 'animate.css';

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

/* img */
import MainImg from "../images/BatCave.jpg";
import Homerock from "../images/Homerock.jpg";
import topPage from "../images/topPage.JPG";
import intro from "../images/intro.jpg";
import Thailand_map from "../images/Thai_map.jpg";
import Muaythai from "../images/muaythai.jpg";
import Shop from "../images/shoes.jpg";
import Map from "../images/climbingArea.jpg";
import Activity from "../images/ship.JPEG";
import Spot from "../images/spot.jpg";
import Photos from "../images/photos.jpg";

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Home() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
  });
  
  return (
    <section id="home">
      <Container>
        <Row className="justify-content-center text-center mr-5 mt-4">
          <Col sm={9} className="mainImgCal">
          <motion.div
              initial={{
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 6
              }}
            >
              <img
                alt={MainImg}
                src={MainImg}
                className="MainImg"
              />
            </motion.div>            
          </Col>
        </Row>
        <Row className="text-center mt-5 justify-content-center">
          <Col sm={6} xs={1}>
            <Row>
              <Col>
                <img
                  alt={Homerock}
                  src={Homerock}
                  className="Hommerock"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={9}>
                <Row>
                  <Col sm={3} xs={6}>
                    <div ref={ref} style={{ height: '200px' }}>
                    {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */}
                      {inView && (
                        <div className="animate__animated animate__fadeInTopLeft">
                          <img
                            alt={topPage}
                            src={topPage}
                            className="topPage"
                          />
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm={4}></Col>
                  <Col sm={3} x={6}>
                    <div ref={ref} style={{ height: '200px' }}>
                        {inView && (
                          <div className="animate__animated animate__fadeInBottomLeft animate__delay-1s">
                            <img
                              alt={intro}
                              src={intro}
                              className="intro"
                            />
                          </div>
                        )}
                      </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <div ref={ref} style={{ height: '200px' }}>
                  {inView && (
                    <div className="animate__animated animate__backInDown animate__delay-2s">
                      <img
                        className="mapSize"
                        alt={Thailand_map}
                        src={Thailand_map}
                      />
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={5} className="mt-5 ml-5" xs={12}>
            <Row className="ml-5" style={{marginTop: '130px'}}>
              <Col>
                <h5 className="HomeIntroText">
                  「クライミングの聖地」と呼ばれる場所<br />
                  <span className="krabiFont">Krabi</span><br />
                  <br /><br />
                  <span style={{fontSize: 'medium'}}>
                    東京から飛行機を乗り継いで約8時間。<br />
                    Krabiには世界中からクライマーが集まる。<br />
                    <br /><br />
                    切り立つ石灰岩と熱帯ジャングルに囲まれた<br />
                    自然豊かな場所、それが Krabi。<br />
                    <br /><br />
                    世界でもめずらしい<br />
                    ロッククライミングと青い海の融合<br />
                    <br />
                    そんな「クライミングの聖地」へ<br />
                    あなたも訪れてみませんか？
                  </span>
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop: '130px'}}>
          <Col className='text-center'>
            <h4><span className="titlefont">Krabi Climbing</span><br />コンテンツ一覧</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Activity}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-3">クラビとは</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-5">
                  Krabiの魅力についてはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="About">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Map}
                position="top"
                alt="..."
                className="cardMap"
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-3">クライミングエリア</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-4">
                  Krabiのおすすめ<br />クライミングエリアはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Area">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Spot}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>おすすめ<br /><span style={{fontSize: '18px'}}>クライミングスポット</span></MDBCardTitle>
                <MDBCardText className="small mt-3 mb-4">
                  Krabiのおすすめ<br />クライミングスポットはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Climbing">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Muaythai}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-3">おすすめスポット</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-4">
                  クライミング休憩時間に<br />おすすめスポットはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Spot">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Shop}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>おすすめ<br />クライミングショップ</MDBCardTitle>
                <MDBCardText className="small mt-3 mb-4">
                  Krabiのおすすめ<br />クライミングショップはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Shop">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className="justify-content-center text-center mb-5" sm={4}>
            <MDBCard>
              <MDBCardImage
                src={Photos}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-3">Krabiフォトギャラリー</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-4">
                  Krabi(クラビ)の写真を<br />見たい方はこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Photo">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;