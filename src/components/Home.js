import "../App.css";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

/* img */
import MainImg from "../images/main_beach.jpg";
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
import { ClassNames } from "@emotion/core";


function Home() {
  return (
    <section id="home">
      <Container>
        {/*<Row className="TopImg">*/}
        <Row>
          <Col sm={9}>
            <img
              alt={MainImg}
              src={MainImg}
              style={{width: '1000px'}}
            />
          </Col>
        </Row>
        <Row className="text-center mt-5 justify-content-center">
          <Col　sm={6}>
            <Row>
              <Col>
                <img
                  alt={Homerock}
                  src={Homerock}
                  style={{width: '800px'}}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={9}>
                <Row>
                  <Col sm={3}>
                    <img
                      alt={topPage}
                      src={topPage}
                      style={{width: '250px'}}
                    />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm={4}></Col>
                  <Col sm={3}>
                    <img
                      alt={intro}
                      src={intro}
                      style={{width: '250px'}}
                    />
                  </Col>
                </Row>
              </Col>
              <Col sm={3}>
                <img
                  className="mapSize"
                  alt={Thailand_map}
                  src={Thailand_map}
                />
                </Col>
            </Row>
          </Col>
          <Col sm={5} className="mt-5 ml-5">
            <Row className="mt-5">
              <Col>
                <h2>クライミングの聖地</h2>
                <h2>Krabi (クラビ)</h2>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <h5>
                  「秘境のリゾート」と呼ばれる場所、<br />
                  　　　　　　　　　　　　　　　　Krabi (クラビ)。<br />
                  <br />
                  東京から飛行機を乗り継いで約8時間。<br />
                  <br />
                  Krabiには、世界中からクライマーが集まる。<br />
                  <br /><br />
                  切り立つ石灰岩と熱帯ジャングルに囲まれた<br />
                  自然豊かな場所、それがKrabi。<br />
                  <br /><br />
                  世界でもめずらしい、<br />
                  ロッククライミングと青い海の融合、<br />
                  <br />
                  そんな「クライミングの聖地」へ、<br />
                  あなたも訪れてみませんか？
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
              <Col className='text-center' style={{marginLeft: '100px', marginTop: '150px'}}>
                <h4><span className="titlefont">Krabi climbing</span><br />コンテンツ一覧</h4>
              </Col>
            </Row>
        <Row style={{marginLeft: '100px', marginTop: '50px'}}>
          <Col className="justify-content-center text-center ml-5" sm={3}>
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
          <Col className="justify-content-center text-center ml-5" sm={3}>
            <MDBCard>
              <MDBCardImage
                src={Map}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-4">クライミングマップ</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-4">
                  Krabiのおすすめ<br />クライミングエリアはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Map">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
          <Col className="justify-content-center text-center ml-5" sm={3}>
            <MDBCard>
              <MDBCardImage
                src={Spot}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>おすすめ<br />クライミングスポット</MDBCardTitle>
                <MDBCardText className="small mt-3 mb-4">
                  Krabiのおすすめ<br />クライミングスポットはこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Area">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        <Row style={{marginLeft: '100px'}} className="mt-5">
          <Col className="justify-content-center text-center ml-5" sm={3}>
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
          <Col className="justify-content-center text-center ml-5" sm={3}>
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
          <Col className="justify-content-center text-center ml-5" sm={3}>
            <MDBCard>
              <MDBCardImage
                src={Photos}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="mt-3">Krabi写真館</MDBCardTitle>
                <MDBCardText className="small mt-4 mb-4">
                  Krabi(クラビ)の写真を<br />見たい方はこちら
                </MDBCardText>
                <Button className="stretched-link" variant="outline-secondary"  href="Photo">Click here</Button>
              </MDBCardBody>
            </MDBCard>
          </Col>
        </Row>
        {/*
        <Row className="justify-content-center text-center">
          <Card className="mainCards" style={{ width: '20rem' }}>
            {/*<div class="img-wrap">
            <div class="img">
                <Card.Img variant="top mt-3" src={Activity}/>
            </div>
            </div>
            <Card.Img variant="top mt-3" src={Photos}/>
            <Card.Body>
              <Card.Title>Krabi写真館</Card.Title>
              <Card.Text>
              Krabi(クラビ)の写真を見たい方はこちら
              </Card.Text>
              <Button variant="outline-secondary" href="Photo">Click here</Button>
            </Card.Body>
          </Card>
        </Row>
      <div class="scroll">
      <div class="title">
          <h1>Krabi Climbing</h1>
      </div>
      <section>
          <h2 class="scrollTitle">Cross Scroll</h2>
          <div class="img-wrap">
          <div class="img img1"></div>
          </div>
      </section>
      </div>*/}
      </Container>
    </section>
  );
}

export default Home;