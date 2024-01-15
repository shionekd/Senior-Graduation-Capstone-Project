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
import Tonsai10 from "../images/CryingRock.jpg";
import Tonsai11 from "../images/BigGuy.jpg";

class Photo extends React.Component {
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

  handleOpenModal6 () {
    this.setState({ showModal6: true });
  }

  handleCloseModal6 () {
    this.setState({ showModal6: false });
  }

  handleOpenModal7 () {
    this.setState({ showModal7: true });
  }

  handleCloseModal7 () {
    this.setState({ showModal7: false });
  }

  handleOpenModal8 () {
    this.setState({ showModal8: true });
  }

  handleCloseModal8 () {
    this.setState({ showModal8: false });
  }

  handleOpenModal9 () {
    this.setState({ showModal9: true });
  }

  handleCloseModal9 () {
    this.setState({ showModal9: false });
  }

  handleOpenModal10 () {
    this.setState({ showModal10: true });
  }

  handleCloseModal10 () {
    this.setState({ showModal10: false });
  }

  handleOpenModal11 () {
    this.setState({ showModal11: true });
  }

  handleCloseModal11 () {
    this.setState({ showModal11: false });
  }

  render () {
    return (
      <div>
        <section id="Climbing">
          <Container>
            <Row>
              <Col className='justify-content-center text-center mt-5'>
                <h2>Krabi 写真館</h2>
              </Col>
            </Row>
            <Row>
              <Col className='justify-content-center text-center mt-5'>
                <p>
                  ここではkrabiで撮影した写真をご覧いただけます。<br />
                  列ごとにスクロールすることができるので、ぜひご覧ください。
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='justify-content-center text-center mt-5' sm={5}>
                <img
                  src={RailayBeachLogo}
                  alt=''
                  style={{height: '150px'}}
                />
              </Col>
            </Row>
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -1400 }}
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
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -1400 }}
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
              <Col className='justify-content-center text-center mt-5' sm={5} style={{marginLeft: '800px'}}>
                <img
                  src={TonsaibeachLogo}
                  alt=''
                  style={{height: '150px'}}
                />
              </Col>
            </Row>
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -750 }}
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
            <Row style={{marginTop: '-50px'}}>
              <Col className='text-center'>
                <div className='photo'>
                  <motion.div className='photoSlide' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -430 }}
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
                    </motion.div>
                  </motion.div>
                </div>
              </Col>
            </Row>

            <Row className='mb-5' style={{marginTop: '30px'}}>
              <Col className='justify-content-center text-center mt-5' sm={3}>
                <div className='zoomPhotoOutside'>
                  <img
                    className="zoomPhoto"
                    src={Railay1}
                    alt={Railay1}
                    onClick={this.handleOpenModal1}
                  />
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