import '../App.css';
import 'animate.css';

import Carousel from 'react-grid-carousel';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* img */
import spot from "../images/climbingspot.jpg";
//import area from "../images/climbingAreaMap.jpg";
import area from "../images/climbingArea.jpg";
/* Railay */
import RailayBeach from "../images/Railay-Beach.jpg";
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
/* Ton sai */
import TonsaibeachLogo from "../images/Ton-sai-beach-logo.jpg";
import TonsaiBeach from "../images/Ton-sai-beach.jpg";
import Tonsai1 from "../images/Tonsai1.jpg";
import Tonsai2 from "../images/Humanality.jpg";
import Tonsai3 from "../images/Tonsai3.jpg";
import Tonsai4 from "../images/Tonsai4.jpg";
import Tonsai5 from "../images/climbing.JPG";
import Tonsai6 from "../images/photos.jpg";
import Tonsai7 from "../images/Tonsai7.jpg";
import Tonsai8 from "../images/Tonsai8.jpg";
/* アクセス */
import access1 from "../images/pier.jpeg";
import access2 from "../images/fromship.jpg";
import access3 from "../images/ship.JPEG";

function Map() {

  const { ref, inView } = useInView({
    rootMargin: '-30px'
  });

  return (
    <section id="Map">
      <Container>
        <Row>
          <Col className='text-center mt-5 mb-5'>
            <h2 className='pageTitle'>おすすめクライミングエリア</h2>
          </Col>
        </Row>
        <Row>
          <Col className='ml-5' sm={1}></Col>
          <Col className='mt-3' sm={6} xs={12}>
            <motion.div
              initial={{
                opacity: 0,
                y: -300
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 7
              }}
            >
              <p>
                Krabiにある、おすすめクライミングエリアを紹介します。<br />
                <br />
                本土から船でしか行くことのできない、秘境のビーチと言われている<br />
                Railay beach(ライレイ ビーチ)とトンサイ ビーチ(Ton sai beach)です。<br />
                <br />
                Krabi国際空港から車で約1時間のAo Nam Mao(アオ ナム マオ)から、<br />
                フェリーで約15分、Railay beach(ライレイ・ビーチ)にたどり着きます。<br />
                <br />
                Railay beach(ライレイ ビーチ)とトンサイ ビーチ(Ton sai beach)は<br />
                隣り合ったビーチなので、2つのビーチをつなぐカヌーで移動したり、<br />
                簡易なトレッキングでも行き来することができます。<br />
                <br />
              </p>
            </motion.div>
          </Col>
          <Col className='justify-content-center text-center' sm={2}>
            <motion.div
              initial={{
                opacity: 0,
                y: -300
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 7
              }}
            >
              <img
                alt={spot}
                src={spot}
                className='areaPhoto'
              />
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center mt-3'>
            <img
              className="mb-5 KrabiArea"
              alt={area}
              src={area}
              usemap="#image-map"
            />
            {/*<img
              className="mb-5 KrabiArea"
              alt={area}
              src={area}
              usemap="#image-map"
            />
            <map name="image-map">
              <area target="_blank" alt="Rairay" title="Rairay" href="#Rairay" coords="252,238,78" shape="circle" />
              <area target="_self" alt="Rairay" title="Rairay" href="Rairay" coords="546,220,108" shape="circle" />
              <area target="_blank" alt="Tonsai" title="Tonsai" href="#Tonsai" coords="177,82,85" shape="circle" />
            </map>*/}
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='justify-content-center text-center mt-5' sm={6}>
            <img
              className="logoSize"
              src={RailayBeachLogo}
              alt={RailayBeachLogo}
              id='Rairay'
            />
            <p>
              Railay beach(ライレイ ビーチ)には<br />
              様々なレベルのクライミングスポットがあり、<br />
              ビーチの目の前にある岩肌は、もはや全てがクライミングスポット！<br />
              と言ってもいいほど、ビーチのあちらこちらに<br />
              オールラウンドのクライミングスポットが混在しています。<br />
              <br />
              Railay beachには数多くのクライミングスポットはもちろんのこと、<br />
              リゾートホテルや飲食店、バーやマッサージ店もあるため、<br />
              クライミング以外の時間も楽しむことができ、長期滞在におすすめのエリアです。
            </p>
          </Col>
          <Col  style={{marginTop: '100px'}}>
            <img
              className="mapImg"
              src={RailayBeach}
              alt={RailayBeach}
            />
          </Col>
        </Row>
        <Row className='mt-5 mb-5'>
          <Col className='mt-1' sm={9}>
            <div style={{width: '60vw'}}>
              <Carousel cols={3} rows={1} gap={1} autoplay={4500} loop hideArrow >
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay1} alt='Carousel1' style={{borderRadius: '2rem'}}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay2} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay3} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay4} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay5} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay6} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay7} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay8} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay9} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col className='mt-1' sm={3}>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23893.099792090637!2d98.84656961293808!3d8.021899927950313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051ea9e0792e58b%3A0x61d88bb17c215081!2z44Op44Kk44Os44KkIOODk-ODvOODgQ!5e0!3m2!1sja!2sjp!4v1704759069730!5m2!1sja!2sjp'}
              style={{width: '300px', height: '200px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Railay Beach'}
            />
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='justify-content-center text-center mt-5' sm={6}>
            <img
              className="logoSize"
              src={TonsaibeachLogo}
              alt={TonsaibeachLogo}
            />
            <p>
              Ton sai beach(トン サイ ビーチ)には<br />
              ミドルクラスからハイクラスまで、429ルートがあります。<br />
              Krabiで一番多くのクライミングスポットを有している地域です。<br />
              Railay beach(ライレイ ビーチ)に比べて、砂浜は石が多ですが<br />
              クライミングスポットの周りは滑らかな砂で覆われています。<br />
              <br />
              Ton sai beachには、ホテルも飲食店も数を数えるほどしかないため<br />
              とても静かでプライベートなひと時を過ごすことができます。
            </p>
          </Col>
          <Col  style={{marginTop: '50px'}} sm={6}>
            <img
              className="mapImg"
              src={TonsaiBeach}
              alt={TonsaiBeach}
            />
          </Col>
        </Row>
        <Row>
          <Col className='mt-4' sm={9}>
            <div style={{width: '60vw'}}>
              <Carousel cols={4} rows={1} gap={1} autoplay={4500} loop hideArrow >
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai1} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai2} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai3} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai4} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai5} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai6} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai7} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai8} alt='Carousel1' style={{borderRadius: '2rem'}} />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col className='mt-4' sm={3}>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23893.28100418843!2d98.83787505770275!3d8.018815924392895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051c01f698dc337%3A0x37acb482b953a2e9!2z44OI44Oz44K144KkIOODk-ODvOODgQ!5e0!3m2!1sja!2sjp!4v1704759931272!5m2!1sja!2sjp'}
              style={{width: '300px', height: '255px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Ton Sai Beach'}
            />
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center' style={{marginTop:'100px'}}>
            <h2>アクセス</h2>
          </Col>
        </Row>
        <Row>
          <Col className='mr-1 areaRairay' sm={7}>
            <p>
              <br />
              Railay beachへ行くには、Ao Nam Mao(アオ ナム マオ)からフェリーで行きます。<br />
              Ao Nang(アオ ナン)からもフェリーで行くことができますが、フェリー乗り場の整備が<br />
              整っておらず、海岸からフェリーまでは、膝あたりまでの海水に浸かりながら移動する<br />
              必要があるため、Ao Nam Maoから行くことをおすすめします。<br />
              <br />
              Ao Nam MaoへはKrabi空港からバスで行くか、タクシーを使用します。<br />
              空港からタクシーを使用する際は、空港の1階にあるタクシーの乗り場からタクシーを<br />
              チャーターします。バスを利用する場合は、渡航の時期により運行表が異なるため、<br />
              バスターミナルで時間を確認しましょう。<br />
              <br />
              行きの最初のボートは朝8時に出航し、最終のボートは18時に出航します。<br />
              金額は片道あたり1人100バーツ(日本円で約400円)です。<br />
              <br />
              フェリーは所定の人数に達するまで出発しないので、お時間には余裕を持っていくこと<br />
              をおすすめします。時間がない場合は追加料金を払ってフェリーをチャーターすることも<br />
              可能なので一度訪ねてみてください。
            </p>
          </Col>
          <Col className='mt-5' sm={2} >
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17190.2479947461!2d98.84622006753142!3d8.022929397637172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051eac8dac9084f%3A0xf2701607d368e106!2sAo%20Nam%20Mao%20Beach!5e0!3m2!1sja!2sjp!4v1704757548266!5m2!1sja!2sjp'}
              style={{width: '300px', height: '255px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Ao Nam Mao'}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col className='mt-5 accessImgArea' sm={4}>
            <div ref={ref} style={{ height: '200px' }}>
              {inView && (
                <div className="animate__animated animate__fadeInTopLeft">
                    <img
                        className="photoSize accessImg1"
                        src={access1}
                        alt="access1"
                    />
                </div>
              )}
            </div>
          </Col>
          <Col className='mt-5 accessImg2' sm={3}>
            <div ref={ref} style={{ height: '200px' }}>
              {inView && (
                <div className="animate__animated animate__fadeInDown">
                  <img
                      className="photoSize"
                      src={access2}
                      alt="access2"
                  />
                </div>
              )}
            </div>
          </Col>
          <Col className='mt-5 accessImg3' sm={2}>
            <div ref={ref} style={{ height: '200px' }}>
              {inView && (
                <div className="animate__animated animate__fadeInTopRight">
                  <img
                      className="photoSize"
                      src={access3}
                      alt="access3"
                  />
                </div>
              )}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Map;
