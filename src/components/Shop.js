import '../App.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

/* img */
import example02 from "../images/ThePinnacle.jpg";
import example03 from "../images/example.JPG";
import krabiRockClimbing from "../images/krabiRockClimbing.png";
import shop from "../images/shop.JPG";


function Shop() {
  return (
    <section id="Shop">
      <Container >
        <Row>
          <Col className='text-center mt-5'>
            <h2>おすすめクライミングショップ</h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mb-4 mt-4'>
            <p>Krabiでクライミングを楽しむ際は、3通りの楽しみ方があります。</p>
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center examplecol ml-5' sm={3}>
            <div className='exampleArea'>
              <a href='map'>
              <h3 className='mt-3'>01</h3>
                <img
                  className='mt-3 mb-3'
                  alt={example02}
                  src={example02}
                  style={{height: '300px'}}
                />
              <p>
                クライミングマップを片手に、<br />クライミングルートを自身で探す。<br />
                Krabiおすすめクライミングエリアは<span>こちらから</span>
              </p>
              </a>
            </div>
          </Col>
          <Col sm={1}></Col>
          <Col className='justify-content-center text-center examplecol' sm={3}>
            <div className='exampleArea'>
              <a href='#example02'>
              <h3 className='mt-3'>02</h3>
              <img
                className='mt-3 mb-3'
                alt={example02}
                src={example02}
                style={{height: '300px'}}
              />
              <p>クライミングショップの<br />グループクライミングに参加する。</p>
              </a>
            </div>        
          </Col>
          <Col sm={1}></Col>
          <Col className='justify-content-center text-center examplecol' sm={3}>
            <div className='exampleArea'>
              <a href='#example03'>
              <h3 className='mt-3'>03</h3>
              <img
                className='mt-3 mb-3'
                alt={example03}
                src={example03}
                style={{height: '300px'}}
              />
              <p>クライミングショップに<br />プライベートガイドを頼む。</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: '100px'}}>
          <Col className='justify-content-center text-center'>
            <h5>このページではおすすめのクライミングショップを紹介します。</h5>
          </Col>
        </Row>
        <Row style={{marginTop: '50px'}}>
          <Col>　</Col>
          <Col className='justify-content-center text-center mt-5' style={{marginLeft: '-100px'}}>
            <h2 className='justify-content-center text-center KrabiShop' >Krabi Rock Climbing </h2>
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center' style={{marginLeft: '80px', marginTop: '-70px'}}>
            <a href='https://krabirockclimbing.com'>
              <img
                alt={krabiRockClimbing}
                src={krabiRockClimbing}
                style={{width: '350px'}}
              />
            </a>
          </Col>
          <Col className='mt-3' style={{marginLeft: '-80px'}}>
            <p>
              <br />
              「Krabi Rock Climbing」は、Krabiが拠点のクライミングショップです。<br />
              オーナーさんはタイ人の男性で、英語も堪能なとても陽気な方です。<br />
              ご家族で経営を行なっている、アットホームなクライミングショップです。<br />
              <br />
              こちらのクライミングショップでは、上記で述べた2通りのクライミング方法である<br />
              グループクライミング、プライベートガイドもどちらも行なっています。<br />
              <br />
              Krabiでクライミングを行う際は、ぜひこちらに連絡をしてみてください。
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center text-center mt-5'>
          <Col sm={8} className='mt-4'>
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
          <Col sm={4} style={{marginLeft: '200px', marginTop: '60px'}}>
            <Row>
              <Col sm={5}>
              <p>アドレス</p>
              </Col>
              <Col>
              <p>Railay Beach, Ao Nang, Krabi, <br />Thailand 81180</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <p>営業時間</p>
              </Col>
              <Col>
                毎日 9:00 ~ 18:00<br />
                <p className='small'>※雨季は長期休業予定あり、要予約</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <p>HP</p>
              </Col>
              <Col>
                <a id='HP' href='https://krabirockclimbing.com'>https://krabirockclimbing.com</a>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <p>Email</p>
              </Col>
              <Col>
                <p>krabirockclimbing@gmail.com</p>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <p>WHATSAPP & LINE</p>
              </Col>
              <Col>
                <p>+66 908723319</p>
              </Col>
            </Row>
          </Col>
          <Col sm={4} style={{marginLeft: '100px', marginTop: '30px'}}>
            <img
              alt={shop}
              src={shop}
              style={{width: '400px'}}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Shop;
