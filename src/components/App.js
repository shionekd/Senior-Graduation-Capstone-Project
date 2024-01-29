import "../App.css";

import React, { useState } from "react";
import RouterFunction from "./Router";
import Footer from "./Footer";
import { IconContext } from 'react-icons';

import logo from "../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { GiMountainClimbing } from "react-icons/gi";
import { GiHiking } from "react-icons/gi";
import { GiBattleship } from "react-icons/gi";
import { BsCamera2 } from "react-icons/bs";

const App = () => {
  const [active, setActive] = useState(false);
  const showNav = () => {
    setActive(!active)
  };

  return (
    <div className="container">
      <div className={active ? "shazam" : "menu"}>
        <div className="burger">
          <div className="row burger">
            <div className="col" sm={4}>
              <span className="menu_toggle" onClick={showNav}>
                <i className="menu_open"><IconContext.Provider value={{ size: '20px' }}><RxHamburgerMenu /></IconContext.Provider></i>
                <i className="menu_close"><IconContext.Provider value={{ size: '20px' }}><IoClose /></IconContext.Provider></i>
              </span>
              <ul
                className="menu_items"
                style={{
                  left: active ? '50px' : '40px'
                }}>
                <li><a href="About"><i className="icon"><IconContext.Provider value={{ size: '40px'}}><FaUmbrellaBeach /></IconContext.Provider></i>Krabiとは</a></li>
                <li><a href="Area"><i className="icon"><IconContext.Provider value={{ size: '40px' }}><FaMountain /></IconContext.Provider></i>クライミングエリア</a></li>
                <li><a href="Climbing"><i className="icon"><IconContext.Provider value={{ size: '40px' }}><GiMountainClimbing /></IconContext.Provider></i>クライミングスポット</a></li>
                <li><a href="Spot"><i className="icon"><IconContext.Provider value={{ size: '40px' }}><GiHiking /></IconContext.Provider></i>おすすめスポット</a></li>
                <li><a href="Shop"><i className="icon"><IconContext.Provider value={{ size: '40px' }}><GiBattleship /></IconContext.Provider></i>おすすめショップ</a></li>
                <li><a href="Photo"><i className="icon"><IconContext.Provider value={{ size: '40px' }}><BsCamera2 /></IconContext.Provider></i>フォトギャラリー</a></li>
              </ul>
            </div>
          </div>
          <main className={active ? "inside2" : "inside"}>
            <div class="content_inner">
              <div class="col-10 d-flex ajustdiv">
                <a href="/"><img className="HomeLogo" src={logo} alt="" /></a>
                <a href="/" className="KrabiClimbingLogo"  style={{marginTop: '20px'}}><p className="titlefont">　Krabi Climbing</p></a>
              </div>
              <div class="col-4 text-right mt-1"></div>
              <RouterFunction />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
