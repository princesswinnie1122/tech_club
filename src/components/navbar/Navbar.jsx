import React, {useState} from 'react'
import {RiMenuLine, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#recent">近期活動</a></p>
  <p><a href="#about">關於我們</a></p>
  <p><a href="#plan">年度計畫</a></p>
  <p><a href="#activity">活動介紹</a></p>
  </>  
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>
      <button id="navbar-member-button">社員專區</button>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FBE8D3" size="2rem" onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#FBE8D3" size="2rem" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu-container slide-fwd-bottom">
            <div className="navbar-menu-links">
              <Menu />
              <button id="navbar-menu-member-button">社員專區</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar