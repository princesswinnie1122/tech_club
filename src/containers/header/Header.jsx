import React, { useState } from 'react';
import './header.css';
import kids from '../../assets/kids.png';

const Header = () => {
  const [isJelly, setJelly] = useState(false);

  const toggleJelly = () => {
    setJelly(!isJelly);
  };

  return (
    <div className="header">
      <div className="header section__padding">
        <div className="header-content">
          <div className="header-title">
            <div className="header-line">
              <h1 className="title-1">Together,</h1>
            </div>
            <div className="header-line">
              <h1 className="title-2">we can put a </h1>
            </div>
            <div className="header-line">
              <h1 className="title-3">in the&nbsp;</h1>
              <h1 className="title-4">universe.</h1>
            </div>
            <div className="header-ding-append text-flicker-in-glow" onClick={toggleJelly}>
              <h1 className={`title-ding ${isJelly ? 'jello-horizontal' : ''}`}>DING</h1>
            </div>
          </div>
          <div className="header-slogan-container">
            <p className="header-slogan">在科研社，每個想法都有可能成真！</p>
            <button id="header-join-button">加入我們</button>
          </div>
        </div>
      </div>
      <div className="header-kids">
        <img src={kids} alt="kids" />
      </div>
    </div>
  )
}

export default Header