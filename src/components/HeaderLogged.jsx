import hl from "./headerLogged.module.scss";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.svg";
import Icon1 from "../images/header-icon1.svg";
import Icon2 from "../images/header-icon2.svg";
import Icon3 from "../images/header-icon3.svg";
import Ava from "../images/ava1.webp";
import Dots from "../images/header-dots.svg";
import Bird from "../images/header-bird.svg";
import { useState } from "react";

const HeaderLogged = ({ show, hide, isLogged }) => {
  const [isProfile, setProfile] = useState(false);
  const showProfile = () => {
    setProfile(true);
  };
  const hideProfile = () => {
    setProfile(false);
  };
  return (
    <>
      <div className={hl.header__wrapper}>
        <div className={hl.header__container}>
          <Link to="/">
            <div className={hl.logo__wrapper}>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <div className={hl.header__nav}>
            <div className={hl.header__nav__item}>
              <p className={hl.header__nav__itemText}></p>
            </div>
            <div className={hl.header__nav__item}>
              <img src={Bird} alt="icon" />
              <p className={hl.header__nav__itemText}>Changelog</p>
            </div>
            <div className={hl.header__profile}>
              <img src={Ava} alt="ava" className={hl.ava} />
              <p className={hl.name}>Lucy Lavender</p>

              <div className={hl.menu__wrapper} onClick={showProfile}>
                <img src={Dots} alt="icon" className={hl.menu} />
              </div>
              {isProfile && (
                <div className={hl.profile__menu}>
                  <Link to="/ChangePassword">
                    <span className={hl.profile__menu__item}>
                      Change password
                    </span>
                  </Link>
                  <Link to="/">
                    <span className={hl.profile__menu__item}>Profile</span>
                  </Link>
                  <Link to="/Avatar">
                    <span className={hl.profile__menu__item}>Avatar</span>
                  </Link>
                  <Link to="/">
                    <span className={hl.profile__menu__item} onClick={hide}>
                      Logout
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogged;
