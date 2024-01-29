import '../App.css';

import { motion } from 'framer-motion';
import React from 'react';
import ModalComponent from './Modal';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Railay */
import RailayBeachLogo from "../images/Railay-beach-logo.jpg";
import Railay1 from "../images/Railay1.jpg";
import Railay2 from "../images/Railay2.jpg";
import Railay3 from "../images/BatCave.jpg";
import Railay4 from "../images/BatCave4.JPG";
import Railay5 from "../images/intro.jpg";
import Railay6 from "../images/Railay5.jpg";
import Railay7 from "../images/Railay3.JPG";
import Railay8 from "../images/Railay4.JPG";

import Railay9 from "../images/Railay9.jpg";
import Railay10 from "../images/ship.JPEG";
import Railay11 from "../images/cashFlow.jpg";
import Railay12 from "../images/BatCave1.jpg";
import Railay13 from "../images/BatCave2.jpg";
import Railay14 from "../images/BatCave3.jpg";
import Railay15 from "../images/BatCave4.JPG";
import Railay16 from "../images/muaythai.jpg";

/* Ton sai */
import TonsaibeachLogo from "../images/Ton-sai-beach-logo.jpg";
import Tonsai1 from "../images/Tonsai1.jpg";
import Tonsai2 from "../images/Humanality.jpg";
import Tonsai3 from "../images/Tonsai3.jpg";
import Tonsai4 from "../images/Tonsai4.jpg";
import Tonsai5 from "../images/climbing.JPG";
import Tonsai6 from "../images/photos.jpg";

import Tonsai7 from "../images/Tonsai7.jpg";
import Tonsai8 from "../images/Tonsai8.jpg";
import Tonsai9 from "../images/Humanality.jpg";
import Tonsai10 from "../images/sunset.JPG";
import Tonsai11 from "../images/rock.jpg";
import Tonsai12 from "../images/beach.jpg";

import foodLogo from "../images/food.jpg";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";


class Photo extends React.Component {
  constructor() {
    super();

    this.textInput = React.createRef();
    
    this.state = {
      showModal1: false,
    };

    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
  }

  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }

  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }


  render () {
    return (
      <div>
        <section id="Climbing">
          <Container>
            <Row>
              <Col className='justify-content-center text-center mt-5'>
                <h2>Krabi フォトギャラリー</h2>
              </Col>
            </Row>
            <Row>
              <Col className='justify-content-center text-center mt-3'>
                <p>
                  ここではkrabiで撮影した写真をご覧いただけます。<br />
                  列ごとにスクロールすることができるので、ぜひご覧ください。
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='text-left mt-3'>
                <img
                  src={RailayBeachLogo}
                  alt=''
                  className='RailayBeachLogo'
                />
              </Col>
            </Row>
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -1600 }}
                      className='inner-carousel'
                    >
                      <motion.div className='item'>
                        <img
                          src={Railay1}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay2}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay3}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay4}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay5}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay6}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay7}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={Railay8}
                          alt=''
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>
            <Row className='tnsaiPhotos2'>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -1600 }}
                      className='inner-carousel'
                    >
                      <motion.div className='item2'>
                        <img
                          src={Railay9}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay10}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay11}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay12}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay13}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay14}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay15}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item2'>
                        <img
                          src={Railay16}
                          alt=''
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className='text-left'>
                <img
                  src={TonsaibeachLogo}
                  alt=''
                  className='TonsaibeachLogo'
                />
              </Col>
            </Row>
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -900 }}
                      className='inner-carousel'
                    >
                      <motion.div className='item3'>
                        <img
                          src={Tonsai1}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item3'>
                        <img
                          src={Tonsai2}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item3'>
                        <img
                          src={Tonsai3}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item3'>
                        <img
                          src={Tonsai4}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item3'>
                        <img
                          src={Tonsai5}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item3'>
                        <img
                          src={Tonsai6}
                          alt=''
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>
            <Row style={{marginTop: '-230px', marginBottom: '-100px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -900 }}
                      className='inner-carousel'
                    >
                      <motion.div className='item4'>
                        <img
                          src={Tonsai7}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item4'>
                        <img
                          src={Tonsai8}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item4'>
                        <img
                          src={Tonsai9}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item4'>
                        <img
                          src={Tonsai10}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item4'>
                        <img
                          src={Tonsai11}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item4'>
                        <img
                          src={Tonsai12}
                          alt=''
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='text-left mb-2'>
                <img
                  src={foodLogo}
                  alt=''
                  className='foodLogo'
                />
              </Col>
            </Row>
            <Row style={{marginTop: '-50px', marginBottom: '-30px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -600 }}
                      className='inner-carousel'
                    >
                      <motion.div className='item'>
                        <img
                          src={food1}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={food2}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={food3}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={food4}
                          alt=''
                        />
                      </motion.div>
                      <motion.div className='item'>
                        <img
                          src={food5}
                          alt=''
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>

            <>
            <ModalComponent
              isOpen={this.state.showModal1}
              title="Railay1"
              src="Railay1"
              alt="Railay1"
              onClose={this.handleCloseModal1}
            />
            </>
          </Container>
        </section>
      </div>
    );
  }
}

export default Photo;