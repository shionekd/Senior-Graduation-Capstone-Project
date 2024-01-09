import '../App.css';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

/* react */
import React from 'react';
import ModalComponent from './Modal';

/* img */
/* one-two-three */
import OnetwothreeLogo from "../images/One-Two-Three-Logo.jpg";
import Onetwothree from "../images/One-two-three.jpg";
import ThePinnacle from "../images/ThePinnacle.jpg";
import ClimbingSchool from "../images/ClimbingSchool.jpg";
import cashFlow from "../images/cashFlow.jpg";
import MassageSecrets from "../images/MassageSecrets.jpg";
/* Ton-sai-wall */
import Tonsaiwall from "../images/Tonsaiwall.jpg";
import Humanality from "../images/Humanality.jpg";
import TonSaiWall2 from "../images/TonSaiWall2.jpg";
import TonSaiWall3 from "../images/TonSaiWall3.jpg";
import TonSaiWallLogo from "../images/Ton-Sai-Wall-Logo.jpg";
/* Wee's-Present-Wall */
import WeesPresentWallLogo from "../images/Wee's-Present-Wall-Logo.jpg";
import WeesPresentWall from "../images/Wee's-Present-Wall.jpg";
import WeesPresentWall1 from "../images/Wee's-Present-Wall1.jpg";
import WeesPresentWall2 from "../images/Wee's-Present-Wall2.jpg";
import WeesPresentWall3 from "../images/Wee's-Present-Wall3.jpg";


class Climbing extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal1: false,
      showModal2: false
    };

    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
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

  render () {
    return (
      <div>
          <section id="Climbing">
      <Container fluid>
        <Row>
          <Col className='justify-content-center text-center mt-5'>
            <h2>おすすめクライミングスポット</h2>
          </Col>
        </Row>

{/* One-Two-Three */}
        <Row className='mt-5'>
          <Col className='justify-content-center text-center' sm={6}>
            <img
              className="logoSize"
              src={OnetwothreeLogo}
              alt={OnetwothreeLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col className='ml-5'>
            <Row>
              <Col sm={2}>
                <p>タイプ</p>
              </Col>
              <Col sm={10}>
                img
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>レベル</p>
              </Col>
              <Col sm={10}>
                <Badge bg="success">5a</Badge>&nbsp;
                <Badge bg="success">5b+</Badge>&nbsp;
                <Badge bg="success">6a</Badge>&nbsp;
                <Badge bg="warning">6b</Badge>&nbsp;
                <Badge bg="warning">6c</Badge>&nbsp;
                <Badge bg="warning">7a</Badge>&nbsp;
                <Badge bg="danger">7b</Badge>&nbsp;
                <Badge bg="danger">7c</Badge>&nbsp;
                <Badge bg="danger">8a</Badge>&nbsp;
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>場所</p>
              </Col>
              <Col sm={10}>
                Railay Beach
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>時間帯</p>
              </Col>
              <Col sm={10}>
                潮の満ち引きによって異なる
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>概要</p>
              </Col>
              <Col sm={10}>
                One-Two-Threeは東側のRailay beachにあり、<br />
                5aから8a+まで、様々なレベルの全31ルートが存在しており、<br />
                他のエリアに比べてビギナークラスのルートが数多く存在しているため、
                屋外のクライミングが初めての方に人気のスポットです。<br />
                クライミング経験者の方には、1日目のセッションとして体慣らしスポットとしてもおすすめです。
                また、このエリアは午後からは潮が満ちてくるため、午前中向けのスポットです。
                <br /><br />
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>アクセス</p>
              </Col>
              <Col sm={10}>
                <p>
                  One-Two-Threeへは、東側のRailay beachから徒歩で行くことができます。
                  東側のビーチにあるフェリー乗り場からRailay East湾を南の端まで行くと、Railay stalactite(鍾乳石)の入り口が見えてくる。
                  Railay stalactiteの左側に伸びている道を進むと大きな岩があり、その行き止まりのエリアがOne-Two-Threeです。
                </p>
              </Col>
            </Row>
          </Col>
          <Col className='justify-content-center text-center' style={{marginTop: '-60px'}}>
            <img
              src={Onetwothree}
              alt={Onetwothree}
              style={{ height: '500px' }}
            />
          </Col>
        </Row>
        <Row className='mb-5' style={{marginTop: '30px'}}>
          <Col className='justify-content-center text-center mt-5' sm={3}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={ThePinnacle}
                alt={ThePinnacle}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="success">5</Badge>5 The Pinnacle</p>
          </Col>
          <Col className='justify-content-center text-center mt-5' sm={3}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={cashFlow}
                alt={cashFlow}
                onClick={this.handleOpenModal2}
              />
            </div>
            <p className='mr-5'><Badge bg="success">5a</Badge> Cash Flow</p>
          </Col>
          <Col className='justify-content-center text-center mt-5' sm={3}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={ClimbingSchool}
                alt={ClimbingSchool}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="success">6a</Badge> Climbing School</p>
          </Col>
          <Col className='justify-content-center text-center mt-5' sm={3}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={MassageSecrets}
                alt={MassageSecrets}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="warning">6b</Badge> Massage Secrets</p>
          </Col>
        </Row>

{/* Ton-Sai-Wall */}
        <Row className='mt-5'>
          <Col className='justify-content-center text-center' sm={6}>
            <img
              className="logoSize"
              src={TonSaiWallLogo}
              alt={TonSaiWallLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col className='ml-5'>
            <Row>
              <Col sm={2}>
                <p>タイプ</p>
              </Col>
              <Col sm={10}>
                <Badge bg="primary">4a</Badge>&nbsp;
                <Badge bg="primary">4a+</Badge>&nbsp;
                <Badge bg="primary">4b</Badge>&nbsp;
                <Badge bg="success">5a</Badge>&nbsp;
                <Badge bg="success">5a+</Badge>&nbsp;
                <Badge bg="success">5b</Badge>&nbsp;
                <Badge bg="success">5c</Badge>&nbsp;
                <Badge bg="success">5c+</Badge>&nbsp;
                <Badge bg="success">6a</Badge>&nbsp;
                <Badge bg="warning">6a+</Badge>&nbsp;
                <Badge bg="warning">6b</Badge>&nbsp;
                <Badge bg="warning">6b+</Badge>&nbsp;
                <Badge bg="warning">6c</Badge>&nbsp;
                <Badge bg="warning">6c+</Badge>&nbsp;
                <Badge bg="warning">7a</Badge>&nbsp;
                <Badge bg="warning">7a+</Badge>&nbsp;
                <Badge bg="danger">7b</Badge>&nbsp;
                <Badge bg="danger">7b+</Badge>&nbsp;
                <Badge bg="danger">7c</Badge>&nbsp;
                <Badge bg="danger">7c+</Badge>&nbsp;
                <Badge bg="danger">8a</Badge>&nbsp;
                <Badge bg="danger">8a+</Badge>&nbsp;
                <Badge bg="danger">8b</Badge>&nbsp;
                <Badge bg="danger">8b+</Badge>&nbsp;
                <Badge bg="dark">8c</Badge>&nbsp;
                <Badge bg="dark">8c+</Badge>&nbsp;
                <Badge bg="dark">9a</Badge>&nbsp;
                <Badge bg="dark">9a+</Badge>&nbsp;
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>レベル</p>
              </Col>
              <Col sm={10}>
                img
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>場所</p>
              </Col>
              <Col sm={10}>
              Ton Sai Beach
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>時間帯</p>
              </Col>
              <Col sm={10}>
                1日中
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>概要</p>
              </Col>
              <Col sm={10}>
                
                Krabiに来る多くのクライマーの目的は、Ton Sai Wallにある！と言っても過言ではありません。
                Ton Sai Wallには6bから8cまでの全63ルートが存在しており、
                Ton Sai Wallで1日クライミングをしても時間が足りないほど有意義な時間を過ごせるでしょう。<br />
                Krabiに来たらTon Sai Wallを訪れることをおすすめします！
                <br /><br />
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>アクセス</p>
              </Col>
              <Col sm={10}>
                <p>
                  Ton Sai Wallへは、西側のRailay beach(ライレイ ビーチ)から行くことができ、
                  海辺を徒歩で行くか、またはカヌーをレンタルして海側から行くことができます。
                  Ton Sai Beachの南側一面の壁がTon Sai Wallのため、比較的簡単に見つけることができます。<br />
                  <br />
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>注意</p>
              </Col>
              <Col sm={10}>
                <p>
                  海辺を徒歩で行く場合は海水で濡れた岩場を通るため、滑りにくい靴の着用が必要です。<br />
                  また、雨の後はかなり危険な道のりになるため、晴れた日に行くことをおすすめします。
                </p>
              </Col>
            </Row>
          </Col>
          <Col className='justify-content-center text-center' style={{marginTop: '-90px'}}>
            <img
              src={Tonsaiwall}
              alt={Tonsaiwall}
              style={{ height: '500px' }}
            />
          </Col>
        </Row>
        <Row className='mb-5' style={{marginTop: '100px'}}>
          <Col className='justify-content-center text-center ml-5' sm={3}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={Humanality}
                alt={Humanality}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="success">6</Badge> Humanality</p>
          </Col>
          <Col className='justify-content-center text-center mt-5' sm={4}>
            <div className='zoomPhotoWideOutside'>
              <img
                className="zoomPhotoWide"
                src={TonSaiWall2}
                alt={TonSaiWall2}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="warning">6c</Badge> Crying Rock</p>
          </Col>
          <Col className='justify-content-center text-center mt-5' sm={4}>
            <div className='zoomPhotoWideOutside'>
              <img
                className="zoomPhotoWide"
                src={TonSaiWall3}
                alt={TonSaiWall3}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="danger">7a</Badge> Big Guy Loosing the Cat</p>
          </Col>
        </Row>

{/* Wee's-Present-Wall */}
        <Row className='mt-5'>
          <Col className='justify-content-center text-center' sm={6}>
            <img
              className="logoSize"
              src={WeesPresentWallLogo}
              alt={WeesPresentWallLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col className='ml-5'>
            <Row>
              <Col sm={2}>
                <p>タイプ</p>
              </Col>
              <Col sm={10}>
                img
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>レベル</p>
              </Col>
              <Col sm={10}>
                <Badge bg="success">5b</Badge>&nbsp;
                <Badge bg="success">6a</Badge>&nbsp;
                <Badge bg="warning">6a+</Badge>&nbsp;
                <Badge bg="warning">6b</Badge>&nbsp;
                <Badge bg="warning">6b+</Badge>&nbsp;
                <Badge bg="warning">6c</Badge>&nbsp;
                <Badge bg="warning">7a</Badge>&nbsp;
                <Badge bg="warning">7a+</Badge>&nbsp;
                <Badge bg="danger">7b</Badge>&nbsp;
                <Badge bg="danger">7b+</Badge>&nbsp;
                <Badge bg="danger">7c+</Badge>&nbsp;
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>場所</p>
              </Col>
              <Col sm={10}>
              Railay Beach
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>時間帯</p>
              </Col>
              <Col sm={10}>
                1日中
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>概要</p>
              </Col>
              <Col sm={10}>
                Wee's Present Wallにはとても不思議なルートがたくさんあります。
                特に興味深いものは、熱帯雨林ならではの中が空洞になっている木がクライミングのルートになっているのです！
                クライミングしながら木を'コンコン'としてみると音が響いていくのを味わえる、不思議な体験ができます。<br />
                Railay Beachならではの、海に面したクライミングスポットとはまた違う、神秘の雰囲気を味わえるクライミングスポットです。
                <br /><br />
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>アクセス</p>
              </Col>
              <Col sm={10}>
                <p>
                  西側のRailay beach(ライレイ ビーチ)を南に降り、
                  Rayavadee Hotel(ラヤヴァディーホテル)の裏の一角に、
                  森の中に入る小道があるのでこの小道を進みます。
                  50メートルほど山道を登ると、Wee's Present Wallが見えてきます。<br />
                  <br />
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <p>注意</p>
              </Col>
              <Col sm={10}>
                <p>
                  この山道は木の根が露出していたり、滑りやすい山道のため、滑りにくい靴の着用が必要です。
                  また、雨の後はかなり危険な道のりになるため、晴れた日に行くことをおすすめします。
                </p>
              </Col>
            </Row>
          </Col>
          <Col className='justify-content-center text-center' style={{marginTop: '-90px'}}>
            <img
              src={WeesPresentWall}
              alt={WeesPresentWall}
              style={{ height: '500px' }}
            />
          </Col>
        </Row>
        <Row className='mb-5' style={{marginTop: '100px'}}>
          <Col className='justify-content-center text-center' sm={4}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={WeesPresentWall1}
                alt={WeesPresentWall1}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="success">6</Badge> Humanality</p>
          </Col>
          <Col className='justify-content-center text-center' sm={4}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={WeesPresentWall2}
                alt={WeesPresentWall2}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="warning">6c</Badge> Crying Rock</p>
          </Col>
          <Col className='justify-content-center text-center' sm={4}>
            <div className='zoomPhotoOutside'>
              <img
                className="zoomPhoto"
                src={WeesPresentWall3}
                alt={WeesPresentWall3}
                onClick={this.handleOpenModal1}
              />
            </div>
            <p className='mr-5'><Badge bg="danger">7a</Badge> Big Guy Loosing the Cat</p>
          </Col>
        </Row>

        <>
        <ModalComponent
          isOpen={this.state.showModal1}
          title="ハロー、ワールド！"
          src="img1"
          alt="WeesPresentWall2"
          content="これはモーダルウィンドウ1のテストです。"
          onClose={this.handleCloseModal1}
        />

        <ModalComponent
          isOpen={this.state.showModal2}
          title="こんにちは、ユニバース！"
          src="MassageSecrets"
          alt="MassageSecrets"
          content="test"
          onClose={this.handleCloseModal2}
        />
        </>

      </Container>
    </section>
      </div>
    );
  }
}

export default Climbing;
