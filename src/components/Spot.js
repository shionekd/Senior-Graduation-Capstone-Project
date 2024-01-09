import '../App.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* img */
import BatCaveLogo from "../images/Bat-Cave-logo.jpg";
import BatCaveMap from "../images/Bat-Cave-map.jpg";
import Mountain from "../images/ship.JPEG";
import BatCave from "../images/BatCave.jpg";
import BatCave1 from "../images/BatCave1.jpg";
import BatCave2 from "../images/BatCave2.jpg";
import BatCave3 from "../images/BatCave3.jpg";
import BatCave4 from "../images/BatCave4.JPG";
import MuayThaiLogo from "../images/muay-thai-logo.jpg";
import MuayThai from "../images/muaythai.jpg";


function Spot() {
  return (
    <section id="Spot">
      <Container fluid>
        <Row>
          <Col className='text-center mt-5 mb-5'>
            <h2>おすすめスポット</h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p>このページでは、クライミングのオフタイムに楽しめるスポットを紹介します。</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center' sm={4}>
            <img
              className="logoSize"
              alt={BatCaveLogo}
              src={BatCaveLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center' style={{ marginLeft: '50px' }}>
            <p>
              Bat Cave(バット ケーブ)は西側のRailay beachに位置し、<br />
              Railay beachの象徴である、大きな山の中の洞窟です。<br />
              <br />
            </p>
            <img
              alt={Mountain}
              src={Mountain}
              style={{ height: '200px' }}
            />
            <p>
              <br />
              <br />
              山の中は大きな空洞になっており、<br />
              頂上からの海を見下ろせるスポットを目指して<br />
              ハイキングをすることができます。
            </p>
          </Col>
          <Col className='justify-content-center text-center'  style={{ marginTop: '-80px' }}>
            <img
              alt={BatCave}
              src={BatCave}
              style={{ height: '500px' }}
            />
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-5' style={{ height: '400px' }} sm={3}>
            <img
              alt={BatCaveMap}
              src={BatCaveMap}
              style={{ height: '400px' }}
            />
          </Col>
          <Col className='text-center' style={{ height: '400px', marginLeft:'-50px', marginTop: '110px' }} sm={3}>
            <iframe
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.9102041185843!2d98.83491900997127!3d8.00819678264782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051eb105ca3b2d5%3A0xa593b9fc04e446b9!2sBat%20Cave!5e0!3m2!1sja!2sjp!4v1704765613189!5m2!1sja!2sjp'}
                style={{width: '200px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
                title={'Bat Cave'}
              />
          </Col>
          <Col className='mt-5'  sm={6}>
            <h4>アクセス</h4>
            <p>
              <br />
              Bat Caveへは、Phra Nang Beach(プラナン ビーチ)から出発します。<br />
              Phra Nang Beachを北に進み、海岸の一番端にある道から登山がスタートします。<br />
              Bat Caveの山頂への途中には、岩場を登ったり、急な坂道を登ることが多いため、<br />
              スニーカーとヘッドライトが必需品です。<br />
              <br />
              険しい道のりを登り始めてから約30分ほどすると、景色が段々と明るくなりはじめ、<br />
              頂上に着くと、青い海がキラキラと輝く、素晴らしい景色が目の前に現れます。<br />
              <br />
              頂上の眺めを楽しんだ後は、来た道を戻り山を下るか、<br />
              山の反対側のRailay beachへ懸垂下降をすることもできます。<br />
              <br />
              Bat Caveへの道のりには、険しい山道を登る必要があるため、<br />
              天気の良い晴れた日に行くことをおすすめします。
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              alt={BatCave1}
              src={BatCave1}
              style={{ height: '200px' }}
            />
          </Col>
          <Col>
            <img
              alt={BatCave2}
              src={BatCave2}
              style={{ height: '200px' }}
            />
          </Col>
          <Col>
            <img
              alt={BatCave3}
              src={BatCave3}
              style={{ height: '200px' }}
            />
          </Col>
          <Col>
            <img
              alt={BatCave4}
              src={BatCave4}
              style={{ height: '200px' }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '150px' }}>
          <Col className='text-center' sm={4}>
            <img
              className="logoSize"
              alt={MuayThaiLogo}
              src={MuayThaiLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col  style={{marginLeft: '100px'}} sm={5}>
            <p>
              MuayThai(ムエタイ)とはムエタイとはタイの国技であり、<br />
              キックボクシングの原型になった格闘技です。<br />
              「タイ式ボクシング」または「タイボクシング」とも呼ばれています。<br />
              <br />
              東側のRailay beachから北に進んだ飲食店街にある、<br />
              「The Last Bar」では、MuayThaiイベントが週に2回行われています。<br />
              Railay beachでMuayThai観戦におすすめのスポットです。
            </p>
          </Col>
          <Col className='text-center' style={{marginTop: '-80px'}} sm={3}>
            <img
              alt={MuayThai}
              src={MuayThai}
              style={{ height: '300px' }}
            />
          </Col>
          <Col className='text-center' style={{marginTop: '-80px'}} sm={3}>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8652403719175!2d98.84152767492232!3d8.012830292013398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051ea990afc1809%3A0xc2501699ee8909ef!2sThe%20Last%20Bar!5e0!3m2!1sja!2sjp!4v1704766078594!5m2!1sja!2sjp'}
              style={{width: '200px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Muay Thai'}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Spot;