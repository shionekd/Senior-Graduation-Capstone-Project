import '../App.css';
import 'animate.css';

/* react */
import React from 'react';
import ModalComponent from './Modal';
import { motion } from "framer-motion";

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

/* img */
import slab from "../images/slab.jpg";
import vertical from "../images/vertical.jpg";
import overhung from "../images/overhung.jpg";
import roof from "../images/roof.jpg";
import tufa from "../images/tufa.jpg";

/* one-two-three */
import OnetwothreeLogo from "../images/One-Two-Three-Logo.jpg";
import Onetwothree from "../images/One-two-three.jpg";
import ThePinnacle from "../images/ThePinnacle.jpg";
import ClimbingSchool from "../images/ClimbingSchool.jpg";
import CashFlow from "../images/cashFlow.jpg";
import MassageSecrets from "../images/MassageSecrets.jpg";
/* Ton-sai-wall */
import Tonsaiwall from "../images/Tonsaiwall.jpg";
import Humanality from "../images/Humanality.jpg";
import CryingRock from "../images/CryingRock.jpg";
import BigGuyLoosingtheCat from "../images/BigGuy.jpg";
import TonSaiWallLogo from "../images/Ton-Sai-Wall-Logo.jpg";
/* Wee's-Present-Wall */
import WeesPresentWallLogo from "../images/Wee's-Present-Wall-Logo.jpg";
import WeesPresentWall from "../images/Wee's-Present-Wall.jpg";
import WeesPresentWall1 from "../images/Wee's-Present-Wall1.jpg";
import WeesPresentWall2 from "../images/Wee's-Present-Wall2.jpg";
import WeesPresentWall3 from "../images/Wee's-Present-Wall3.jpg";
import WeesPresentWall4 from "../images/Wee's-Present-Wall4.jpg";


class Climbing extends React.Component {
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
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
    this.handleOpenModal7 = this.handleOpenModal7.bind(this);
    this.handleCloseModal7 = this.handleCloseModal7.bind(this);
    this.handleOpenModal8 = this.handleOpenModal8.bind(this);
    this.handleCloseModal8 = this.handleCloseModal8.bind(this);
    this.handleOpenModal9 = this.handleOpenModal9.bind(this);
    this.handleCloseModal9 = this.handleCloseModal9.bind(this);
    this.handleOpenModal10 = this.handleOpenModal10.bind(this);
    this.handleCloseModal10 = this.handleCloseModal10.bind(this);
    this.handleOpenModal11 = this.handleOpenModal11.bind(this);
    this.handleCloseModal11 = this.handleCloseModal11.bind(this);
    
  };

  handleOpenModal1 () {
    this.setState({ showModal1: true });
  };

  handleCloseModal1 () {
    this.setState({ showModal1: false });
  };

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  };

  handleCloseModal2 () {
    this.setState({ showModal2: false });
  };

  handleOpenModal3 () {
    this.setState({ showModal3: true });
  };

  handleCloseModal3 () {
    this.setState({ showModal3: false });
  };

  handleOpenModal4 () {
    this.setState({ showModal4: true });
  };

  handleCloseModal4 () {
    this.setState({ showModal4: false });
  };

  handleOpenModal5 () {
    this.setState({ showModal5: true });
  };

  handleCloseModal5 () {
    this.setState({ showModal5: false });
  };

  handleOpenModal6 () {
    this.setState({ showModal6: true });
  };

  handleCloseModal6 () {
    this.setState({ showModal6: false });
  };

  handleOpenModal7 () {
    this.setState({ showModal7: true });
  };

  handleCloseModal7 () {
    this.setState({ showModal7: false });
  };

  handleOpenModal8 () {
    this.setState({ showModal8: true });
  };

  handleCloseModal8 () {
    this.setState({ showModal8: false });
  };

  handleOpenModal9 () {
    this.setState({ showModal9: true });
  };

  handleCloseModal9 () {
    this.setState({ showModal9: false });
  };

  handleOpenModal10 () {
    this.setState({ showModal10: true });
  };

  handleCloseModal10 () {
    this.setState({ showModal10: false });
  };

  handleOpenModal11 () {
    this.setState({ showModal11: true });
  };

  handleCloseModal11 () {
    this.setState({ showModal11: false });
  };

  render () {
    return (
      <div>
        <section id="Climbing">
          <Container>
            <Row>
              <Col className='justify-content-center text-center mt-5'>
                <h2 className='pageTitle'>おすすめクライミングスポット</h2>
              </Col>
            </Row>

{/* One-Two-Three */}
            <Row className='mt-5'>
              <Col className='justify-content-center text-center' sm={6}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 400
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 4
                  }}
                >
                  <img
                    className="logoSize"
                    src={OnetwothreeLogo}
                    alt={OnetwothreeLogo}
                  />
                </motion.div>
              </Col>
            </Row>
            <Row>
              <Col className='ml-5'>
                <Row>
                  <Col sm={2}>
                    <p>タイプ</p>
                  </Col>
                  <Col sm={10}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 400
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 4
                      }}
                    >
                      <Row>
                        <Col className='justify-content-center text-center' sm={2} xs={2}>
                          <Row className='justify-content-center text-center'>
                            <img
                              src={slab}
                              alt={slab}
                              style={{width: '80px'}}
                            />
                          </Row>
                          <Row><p className='typeTitle'>Slab</p></Row>
                        </Col>
                        <Col className='justify-content-center text-center' sm={2} xs={2}>
                          <Row className='justify-content-center text-center'>
                            <img
                              src={vertical}
                              alt={vertical}
                              style={{width: '80px'}}
                            />
                          </Row>
                          <Row><p className='typeTitle'>Vertical</p></Row>
                        </Col>
                        <Col className='justify-content-center text-center' sm={2} xs={2}>
                          <Row className='justify-content-center text-center'>
                            <img
                              src={overhung}
                              alt={overhung}
                              style={{width: '80px'}}
                            />
                          </Row>
                          <Row><p className='typeTitle'>Overhung</p></Row>
                        </Col>
                        <Col className='justify-content-center text-center' sm={2} xs={2}>
                          <Row className='justify-content-center text-center'>
                            <img
                              src={roof}
                              alt={roof}
                              style={{width: '80px'}}
                            />
                          </Row>
                          <Row><p className='typeTitle'>Roof</p></Row>
                        </Col>
                        <Col className='justify-content-center text-center' sm={2} xs={2}>
                          <Row className='justify-content-center text-center'>
                            <img
                              src={tufa}
                              alt={tufa}
                              style={{width: '80px'}}
                            />
                          </Row>
                          <Row><p className='typeTitle'>Tufa</p></Row>
                        </Col>
                      </Row>
                    </motion.div>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2}>
                    <p>レベル</p>
                  </Col>
                  <Col sm={10}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 400
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 4
                      }}
                    >
                      <Badge bg="success">5a</Badge>&nbsp;
                      <Badge bg="success">5b+</Badge>&nbsp;
                      <Badge bg="success">6a</Badge>&nbsp;
                      <Badge bg="warning">6b</Badge>&nbsp;
                      <Badge bg="warning">6c</Badge>&nbsp;
                      <Badge bg="warning">7a</Badge>&nbsp;
                      <Badge bg="danger">7b</Badge>&nbsp;
                      <Badge bg="danger">7c</Badge>&nbsp;
                      <Badge bg="danger">8a</Badge>&nbsp;
                    </motion.div>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2} xs={4}>
                    <p>場所</p>
                  </Col>
                  <Col sm={10} xs={8}>
                    Railay Beach
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2} xs={4}>
                    <p>時間帯</p>
                  </Col>
                  <Col sm={10} xs={8}>
                    潮の満ち引きによって異なる
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2}>
                    <p>概要</p>
                  </Col>
                  <Col sm={10}>
                    One-Two-Threeは東側のRailay beachにあります。<br />
                    5aから8a+まで、様々なレベルの全31ルートが存在しており、
                    他のエリアに比べてビギナークラスのルートが数多く存在しているため、
                    屋外のクライミングが初めての方に人気のスポットです。<br />
                    クライミング経験者の方には、1日目のセッションとして体慣らしスポットとしてもおすすめです。
                    また、このエリアは午後からは潮が満ちてくるため、午前中向けのスポットです。
                    <br /><br />
                  </Col>
                </Row>
                <Row className='mt-1'>
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
              <Col className='justify-content-center text-center'>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -400
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 4
                  }}
                >
                  <img
                    src={Onetwothree}
                    alt={Onetwothree}
                    className='onetwothreeMap'
                  />
                </motion.div>
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
                <p className='mr-5'><Badge bg="success">5</Badge> The Pinnacle</p>
              </Col>
              <Col className='justify-content-center text-center mt-5' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={CashFlow}
                    alt={CashFlow}
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
                    onClick={this.handleOpenModal3}
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
                    onClick={this.handleOpenModal4}
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
                    <Row>
                      <Col className='justify-content-center text-center' sm={2} xs={2}>
                        <Row className='justify-content-center text-center'>
                          <img
                            src={overhung}
                            alt={overhung}
                            style={{width: '80px'}}
                          />
                        </Row>
                        <Row><p className='typeTitle'>Overhung</p></Row>
                      </Col>
                      <Col className='justify-content-center text-center' sm={2} xs={2}>
                        <Row className='justify-content-center text-center'>
                          <img
                            src={roof}
                            alt={roof}
                            style={{width: '80px'}}
                          />
                        </Row>
                        <Row><p className='typeTitle'>Roof</p></Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2}>
                    <p>レベル</p>
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
                <Row className='mt-4'>
                  <Col sm={2} xs={4}>
                    <p>場所</p>
                  </Col>
                  <Col sm={10} xs={8}>
                  Ton Sai Beach
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2} xs={4}>
                    <p>時間帯</p>
                  </Col>
                  <Col sm={10} xs={8}>
                    1日中
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2}>
                    <p>概要</p>
                  </Col>
                  <Col sm={10}>
                    Krabiに来る多くのクライマーの目的は、Ton Sai Wallにある！と言っても過言ではありません。
                    Ton Sai Wallには6bから8cまでの全63ルートが存在しており、
                    Ton Sai Wallで1日クライミングをしても時間が足りないほど有意義な時間を過ごせるでしょう。<br />
                    <br /><br />
                  </Col>
                </Row>
                <Row className='mt-1'>
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
              <Col className='justify-content-center text-center'>
                <img
                  src={Tonsaiwall}
                  alt={Tonsaiwall}
                  className='tonsaiMap'
                />
              </Col>
            </Row>
            <Row className='mb-5' style={{marginTop: '100px'}}>
              <Col sm={1}></Col>
              <Col className='justify-content-center text-center' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={Humanality}
                    alt={Humanality}
                    onClick={this.handleOpenModal5}
                  />
                </div>
                <p className='mr-5'><Badge bg="success">6</Badge> Humanality</p>
              </Col>
              <Col className='justify-content-center text-center' sm={4}>
                <div className='zoomPhotoWideOutside'>
                  <img
                    className="zoomPhotoWide"
                    src={CryingRock}
                    alt={CryingRock}
                    onClick={this.handleOpenModal6}
                  />
                </div>
                <p className='mr-5'><Badge bg="warning">6c</Badge> Crying Rock</p>
              </Col>
              <Col className='justify-content-center text-center' sm={4}>
                <div className='zoomPhotoWideOutside'>
                  <img
                    className="zoomPhotoWide"
                    src={BigGuyLoosingtheCat}
                    alt={BigGuyLoosingtheCat}
                    onClick={this.handleOpenModal7}
                  />
                </div>
                <p className='mr-5'><Badge bg="danger">7a</Badge> Big Guy Loosing the Cat</p>
              </Col>
            </Row>

{/* Wee's-Present-Wall */}
            <Row className='mt-5'>
              <Col className='justify-content-center text-center weesTitle'>
                <img
                  src={WeesPresentWallLogo}
                  alt={WeesPresentWallLogo}
                  className='weesTitle'
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Row>
                  <Col sm={2}>
                    <p>タイプ</p>
                  </Col>
                  <Col sm={10}>
                  <Row>
                      <Col className='justify-content-center text-center' sm={2} xs={2}>
                        <Row className='justify-content-center text-center'>
                          <img
                            src={slab}
                            alt={slab}
                            style={{width: '80px'}}
                          />
                        </Row>
                        <Row><p className='typeTitle'>Slab</p></Row>
                      </Col>
                      <Col className='justify-content-center text-center' sm={2} xs={2}>
                        <Row className='justify-content-center text-center'>
                          <img
                            src={vertical}
                            alt={vertical}
                            style={{width: '80px'}}
                          />
                        </Row>
                        <Row><p className='typeTitle'>Vertical</p></Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='mt-1'>
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
                <Row className='mt-3'>
                  <Col sm={2} xs={4}>
                    <p>場所</p>
                  </Col>
                  <Col sm={10} xs={8}>
                  Railay Beach
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col sm={2} xs={4}>
                    <p>時間帯</p>
                  </Col>
                  <Col sm={10} xs={8}>
                    1日中
                  </Col>
                </Row>
                <Row className='mt-1'>
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
                <Row className='mt-1'>
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
                <Row className='mt-1'>
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
              <Col className='justify-content-center text-center' sm={5}>
                <img
                  src={WeesPresentWall}
                  alt={WeesPresentWall}
                  className='weesMap'
                />
              </Col>
            </Row>
            <Row className='mb-5' style={{marginTop: '100px'}}>
              <Col className='justify-content-center text-center' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={WeesPresentWall1}
                    alt={WeesPresentWall1}
                    onClick={this.handleOpenModal8}
                  />
                </div>
                <p className='mr-5'><Badge bg="success">5b</Badge> Easy Approach</p>
              </Col>
              <Col className='justify-content-center text-center' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={WeesPresentWall2}
                    alt={WeesPresentWall2}
                    onClick={this.handleOpenModal9}
                  />
                </div>
                <p className='mr-5'><Badge bg="success">6a</Badge> A Man Can Tell a 1000 Lies</p>
              </Col>
              <Col className='justify-content-center text-center' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={WeesPresentWall3}
                    alt={WeesPresentWall3}
                    onClick={this.handleOpenModal10}
                  />
                </div>
                <p className='mr-5'><Badge bg="warning">7a</Badge> Milky Way</p>
              </Col>
              <Col className='justify-content-center text-center' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={WeesPresentWall4}
                    alt={WeesPresentWall4}
                    onClick={this.handleOpenModal11}
                  />
                </div>
                <p className='mr-5'><Badge bg="danger">7b</Badge> Som Tam</p>
              </Col>
            </Row>

            <>
            <ModalComponent
              isOpen={this.state.showModal1}
              title="The Pinnacle"
              src="ThePinnacle"
              alt="The Pinnacle"
              onClose={this.handleCloseModal1}
            />

            <ModalComponent
              isOpen={this.state.showModal2}
              title="Cash Flow"
              src="CashFlow"
              alt="Cash Flow"
              onClose={this.handleCloseModal2}
            />

            <ModalComponent
              isOpen={this.state.showModal3}
              title="Climbing School"
              src="ClimbingSchool"
              alt="Climbing School"
              onClose={this.handleCloseModal3}
            />

            <ModalComponent
              isOpen={this.state.showModal4}
              title="Massage Secrets"
              src="MassageSecrets"
              alt="MassageSecrets"
              onClose={this.handleCloseModal4}
            />
            <ModalComponent
              isOpen={this.state.showModal5}
              title="Humanality"
              src="Humanality"
              alt="Humanality"
              onClose={this.handleCloseModal5}
            />
            <ModalComponent
              isOpen={this.state.showModal6}
              title="CryingRock"
              src="CryingRock"
              alt="CryingRock"
              onClose={this.handleCloseModal6}
            />
            <ModalComponent
              isOpen={this.state.showModal7}
              title="Big Guy Loosing the Cat"
              src="BigGuyLoosingtheCat"
              alt="BigGuyLoosingtheCat"
              onClose={this.handleCloseModal7}
            />
            <ModalComponent
              isOpen={this.state.showModal8}
              title="Easy Approach"
              src="WeesPresentWall1"
              alt="WeesPresentWall1"
              onClose={this.handleCloseModal8}
            />
            <ModalComponent
              isOpen={this.state.showModal9}
              title="A Man Can Tell a 1000 Lies"
              src="WeesPresentWall2"
              alt="WeesPresentWall2"
              onClose={this.handleCloseModal9}
            />
            <ModalComponent
              isOpen={this.state.showModal10}
              title="Milky Way"
              src="WeesPresentWall3"
              alt="WeesPresentWall3"
              onClose={this.handleCloseModal10}
            />
            <ModalComponent
              isOpen={this.state.showModal11}
              title="Som Tam"
              src="WeesPresentWall4"
              alt="WeesPresentWall4"
              onClose={this.handleCloseModal11}
            />
            </>
          </Container>
        </section>
      </div>
    );
  }
}

export default Climbing;
