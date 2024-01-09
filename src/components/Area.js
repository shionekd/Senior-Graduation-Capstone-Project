import '../App.css';
import Carousel from 'react-grid-carousel';

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* img */
import spot from "../images/climbingspot.jpg";
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
  return (
    <section id="Map">
      <Container fluid>
        <Row>
          <Col className='text-center mt-5 mb-5'>
            <h2>おすすめクライミングエリア</h2>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5' style={{marginLeft:'100px'}}>
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
          </Col>
          <Col className='justify-content-center text-center'>
            <img
              alt={spot}
              src={spot}
              style={{ height: '400px' }}
            />
          </Col>
        </Row>
        <Row>
          <Col className='justify-content-center text-center'>
            <img
              className="mb-5"
              alt={area}
              src={area}
              style={{ height: '600px', marginTop: '60px' }}
            />
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='justify-content-center text-center mt-5 ml-5'>
            <img
              className="logoSize"
              src={RailayBeachLogo}
              alt={RailayBeachLogo}
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
          <Col className='mt-1'>
            <div style={{width: '65vw'}}>
              <Carousel cols={3} rows={1} gap={1} autoplay={5500} loop hideArrow >
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay1} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay2} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay3} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay4} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay5} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay6} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay7} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-image' src= {Railay8} alt='Carousel1' />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col className='mt-1'>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23893.099792090637!2d98.84656961293808!3d8.021899927950313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051ea9e0792e58b%3A0x61d88bb17c215081!2z44Op44Kk44Os44KkIOODk-ODvOODgQ!5e0!3m2!1sja!2sjp!4v1704759069730!5m2!1sja!2sjp'}
              style={{width: '300px', height: '200px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Railay Beach'}
            />
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='justify-content-center text-center mt-5'>
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
          <Col  style={{marginTop: '50px'}}>
            <img
              className="mapImg"
              src={TonsaiBeach}
              alt={TonsaiBeach}
            />
          </Col>
        </Row>
        <Row>
          <Col className='mt-5'>
            <div style={{width: '65vw'}}>
              <Carousel cols={4} rows={1} gap={1} autoplay={5500} loop hideArrow >
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai1} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai2} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai3} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai4} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai5} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai6} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai7} alt='Carousel1' />
                </Carousel.Item>
                <Carousel.Item>
                  <img className='carousel-img' src= {Tonsai8} alt='Carousel1' />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col className='mt-5'>
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
          <Col className='mr-1' sm={7} style={{marginLeft: '80px'}}>
            <p>
              <br />
              Railay beachへ行くには、Ao Nam Mao(アオ ナム マオ)からフェリーで行きます。<br />
              Ao Nang(アオ ナン)からもフェリーで行くことができますが、<br />
              フェリー乗り場の整備が整っておらず、海岸からフェリーまで<br />
              膝あたりまで海水に浸かりながら移動する必要があるため<br />
              Ao Nam Maoから行くことをおすすめします。<br />
              <br />
              Ao Nam MaoへはKrabi空港からバスで行くか、タクシーを使用します。<br />
              空港からタクシーを使用する際は、タクシーの乗り場が空港の1階にあるため、<br />
              そこでタクシーをチャーターします。バスは渡航の時期により時間帯が異なるため、<br />
              バスターミナルで時間を確認しましょう。
              <br />
              行きの最初のボートは朝8時に出航し、最終のボートは18時に出航します。<br />
              金額は片道あたり1人100バーツ(日本円で約400円)です。<br />
              <br />
              ボートは所定の人数に達するまで出発しないようなので、<br />
              お時間には余裕を持っていくことをおすすめします。<br />
            </p>
          </Col>
          <Col className='mt-5' sm={4}>
            <iframe
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17190.2479947461!2d98.84622006753142!3d8.022929397637172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051eac8dac9084f%3A0xf2701607d368e106!2sAo%20Nam%20Mao%20Beach!5e0!3m2!1sja!2sjp!4v1704757548266!5m2!1sja!2sjp'}
              style={{width: '400px', height: '300px', border: '0', allowfullscreen: "", loading: 'lazy', referrerpolicy: 'no-referrer-when-downgrade'}}
              title={'Ao Nam Mao'}
            />
          </Col>
        </Row>
        <Row>
          <Col className='mt-5' style={{marginLeft: '180px'}}>
            <img
                className="photoSize"
                src={access1}
                alt="access1"
            />
          </Col>
          <Col className='mt-5' style={{marginLeft: '-60px'}}>
            <img
                className="photoSize"
                src={access2}
                alt="access2"
            />
          </Col>
          <Col className='mt-5' style={{marginLeft: '-90px'}}>
            <img
                className="photoSize"
                src={access3}
                alt="access3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Map;
