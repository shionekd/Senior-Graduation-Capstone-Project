import '../App.css';

import React from 'react';
import ModalComponent from './Modal';

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
import LocalThaiFoodRestaurant from "../images/LocalThaiFoodRestaurant.jpg";
import Coco2004Restaurant from "../images/Coco2004Restaurant.jpeg";
import thaiFood from "../images/thaiFood.png";
import thaiFood2 from "../images/thaiFood2.png";
import thaiFood3 from "../images/thaiFood3.png";


class Spot extends React.Component {
  constructor() {
    super();

    this.textInput = React.createRef();
    
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
      showModal11: false
    };

    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
  }

  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }

  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }

  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }

  handleCloseModal3 () {
    this.setState({ showModal3: false });
  }

  handleOpenModal4 () {
    this.setState({ showModal4: true });
  }

  handleCloseModal4 () {
    this.setState({ showModal4: false });
  }

  handleOpenModal5 () {
    this.setState({ showModal5: true });
  }

  handleCloseModal5 () {
    this.setState({ showModal5: false });
  }

  render () {
    return (
      <div>
        <section id="Spot">
          <Container >
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
              <Col className='justify-content-center text-center'  style={{ marginTop: '-80px' }} >
                <div className='zoomPhotoOutside2'>
                  <img
                    className="zoomPhoto2"
                    src={BatCave}
                    alt={BatCave}
                    onClick={this.handleOpenModal1}
                  />
                </div>
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
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={BatCave1}
                    alt={BatCave1}
                    onClick={this.handleOpenModal2}
                  />
                </div>
              </Col>
              <Col>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={BatCave2}
                    alt={BatCave2}
                    onClick={this.handleOpenModal3}
                  />
                </div>
              </Col>
              <Col>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={BatCave3}
                    alt={BatCave3}
                    onClick={this.handleOpenModal4}
                  />
                </div>
              </Col>
              <Col>
                <div className='zoomPhotoWideOutside'>
                  <img
                    className="zoomPhotoWide"
                    src={BatCave4}
                    alt={BatCave4}
                    onClick={this.handleOpenModal5}
                  />
                </div>
                <p><br />懸垂下降をする場合は、ヘルメット、ロープ、などの各種ギアの持参が必要です。</p>
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
              <Col  style={{marginLeft: '100px'}} sm={4}>
                <p>
                  MuayThai(ムエタイ)とはタイの国技であり、<br />
                  キックボクシングの原型になった格闘技です。<br />
                  MuayThaiの他には、「タイ式ボクシング」または<br />
                  「タイボクシング」とも呼ばれています。<br />
                  <br />
                  東側のRailay beachから北に進んだ飲食店街にある<br />
                  「The Last Bar」では、夜になるとMuayThaiイベントが<br />
                  週に2回ほど行われています。Railay beachで<br />
                  MuayThai観戦ができるおすすめのスポットです。
                </p>
              </Col>
              <Col className='text-center' style={{marginTop: '-80px'}} sm={3}>
                <img
                  alt={MuayThai}
                  src={MuayThai}
                  style={{ height: '300px' }}
                />
              </Col>
              <Col className='text-center' style={{marginTop: '-80px'}} sm={4}>
                <iframe
                  src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8652403719175!2d98.84152767492232!3d8.012830292013398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051ea990afc1809%3A0xc2501699ee8909ef!2sThe%20Last%20Bar!5e0!3m2!1sja!2sjp!4v1704766078594!5m2!1sja!2sjp'}
                  style={{width: '400px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
                  title={'Muay Thai'}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: '150px' }}>
              <Col className='text-center' sm={4}>
                <img
                  alt={LocalThaiFoodRestaurant}
                  src={LocalThaiFoodRestaurant}
                  style={{width: '600px'}}
                />
              </Col>
            </Row>
            <Row>
              <Col  style={{marginLeft: '100px'}} sm={4}>
                <p>
                  「Local Thai Food Restaurant」は東西のRailay beachを結ぶ飲食店ストリートにあるタイレストランです。<br />
                  ローカルな味付けのタイ料理を楽しむことができます。<br />
                  <br />
                  ランチもディナー時間も、どちらも営業しているので、クライミングの休憩時間の昼食や、クライミング後の<br />
                  夕食とタイビールであるSingha(シンハー) を飲みに行ってはどうでしょうか。
                </p>
              </Col>
              <Col className='text-center' style={{marginTop: '-80px'}} sm={3}>
                <img
                  alt={Coco2004Restaurant}
                  src={Coco2004Restaurant}
                  style={{ height: '300px' }}
                />
              </Col>
              <Col className='text-center' style={{marginTop: '-80px'}} sm={4}>
                <iframe
                  src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.7176946261856!2d98.8401679940941!3d8.01225973175863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051eb7478041841%3A0xdb65abcfb34208bf!2sLocal%20Thai%20Food%20Restaurant!5e0!3m2!1sen!2sjp!4v1705043623907!5m2!1sen!2sjp'}
                  style={{width: '400px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
                  title={'Muay LocalThaiFoodRestaurant'}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6} style={{marginLeft: '100px'}}>
                <img
                  alt={thaiFood}
                  src={thaiFood}
                  style={{ height: '150px' }}
                />
                　　
                <img
                  alt={thaiFood2}
                  src={thaiFood2}
                  style={{ height: '150px' }}
                />
                　　
                <img
                  alt={thaiFood3}
                  src={thaiFood3}
                  style={{ height: '150px' }}
                />
              </Col>
              <Col sm={4} className='mt-5'>
                <Row>
                  <Col sm={3}>
                    <p>
                      アドレス
                    </p>
                  </Col>
                  <Col sm={9}>
                    <p>
                      32, บ้านเลขที่ 652/36 บ้านเลขที่ 652 Ao Nang, เมือง Krabi 81000, Thailand
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={3}>
                    <p>
                      営業時間
                    </p>
                  </Col>
                  <Col sm={9}>
                    <p>
                      10:00 ~ 22:00
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <>
              <ModalComponent
                isOpen={this.state.showModal1}
                title="Bat Cave"
                src="BatCave"
                alt="BatCave"
                onClose={this.handleCloseModal1}
              />

              <ModalComponent
                isOpen={this.state.showModal2}
                title="Bat Cave"
                src="BatCave1"
                alt="BatCave1"
                onClose={this.handleCloseModal2}
              />

              <ModalComponent
                isOpen={this.state.showModal3}
                title="Bat Cave"
                src="BatCave2"
                alt="BatCave2"
                onClose={this.handleCloseModal3}
              />

              <ModalComponent
                isOpen={this.state.showModal4}
                title="Bat Cave"
                src="BatCave3"
                alt="BatCave3"
                onClose={this.handleCloseModal4}
              />
              <ModalComponent
                isOpen={this.state.showModal5}
                title="Bat Cave"
                src="BatCave4"
                alt="BatCave4"
                onClose={this.handleCloseModal5}
              />
            </>
          </Container>
        </section>
      </div>
    );
  }
}

export default Spot;