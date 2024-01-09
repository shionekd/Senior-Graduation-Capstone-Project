import "../App.css";
import React from 'react';

/* img */
import MainImg from "../images/main_beach.jpg";
import Thailand_map from "../images/Thai_map.jpg";
import Muaythai from "../images/muaythai.jpg";
import Shop from "../images/shoes.jpg";
import Map from "../images/map.jpg";
import Activity from "../images/ship.JPEG";
import Spot from "../images/spot.jpg";
import Photos from "../images/photos.jpg";

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <section id="home">
      <Container fluid>
        <Row>
          <Col>
            <img
            className="MainImg"
            alt={MainImg}
            src={MainImg}
            />
          </Col>
        </Row>
        <Row className="text-center mt-5 justify-content-center" style={{ marginBottom: '-300px' }}>
          <Col sm={4}>
            <h2>クライミングの聖地</h2>
            <p>Krabi <span>クラビ</span></p>
            Krabi (クラビ)<br />「秘境のリゾート」と呼ばれる場所。<br />
            <br />
            そして「クライミングの聖地」でもある。<br />
            <br />
            東京から飛行機を乗り継いで約8時間。<br />
            <br />
            Krabiには、世界中からクライマーが集まる。<br />
            <br />
            「クライミングの聖地」<br />
            あなたも訪れてみませんか？
          </Col>
          <Col sm={3}>
            <img
            className="mapSize"
            alt={Thailand_map}
            src={Thailand_map}
            />
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Card className="mainCards" style={{ width: '20rem' }}>
            {/*<div class="img-wrap">
            <div class="img">
                <Card.Img variant="top mt-3" src={Activity}/>
            </div>
            </div>*/}
            <Card.Img variant="top mt-3" src={Activity}/>
            <Card.Body>
              <Card.Title>クラビとは</Card.Title>
              <Card.Text>
                Krabi(クラビ)についての魅力はこちらをチェック
              </Card.Text>
              <Button variant="outline-secondary" href="About">Click here</Button>
            </Card.Body>
          </Card>
          <Card className="mainCards" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Map}/>
            <Card.Body>
              <Card.Title>クライミングマップ</Card.Title>
              <Card.Text>
              Krabi(クラビ)のクライミングマップはこちらをチェック
              </Card.Text>
              <Button variant="outline-secondary"  href="Map">Click here</Button>
            </Card.Body>
          </Card>
          <Card className="mainCards" style={{ width: '20rem' }}>
            <Card.Img variant="top mt-3" src={Spot}/>
            <Card.Body>
              <Card.Title>おすすめクライミングエリア</Card.Title>
              <Card.Text>
              Krabi(クラビ)のおすすめクライミングエリアはこちらをチェック
              </Card.Text>
              <Button variant="outline-secondary" href="Area">Click here</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center text-center">
          <Card className="mainCards" style={{ width: '20rem' }}>
            <Card.Img variant="top mt-3" src={Muaythai}/>
            <Card.Body>
              <Card.Title>おすすめスポット</Card.Title>
              <Card.Text>
                クライミングの休憩時間におすすめ！<br />おすすめスポットはこちらをチェック
              </Card.Text>
              <Button variant="outline-secondary" href="Spot">Click here</Button>
            </Card.Body>
          </Card>
          <Card className="mainCards" style={{ width: '20rem' }}>
            <Card.Img variant="top mt-3" src={Shop}/>
            <Card.Body>
              <Card.Title>おすすめクライミングショップ</Card.Title>
              <Card.Text>
              Krabi(クラビ)にある<br />おすすめクライミングショップはこちらをチェック
              </Card.Text>
              <Button variant="outline-secondary" href="Shop">Click here</Button>
            </Card.Body>
          </Card>
          <Card className="mainCards" style={{ width: '20rem' }}>
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
      {/*}<div class="scroll">
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