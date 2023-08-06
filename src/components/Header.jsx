import h from './header.module.scss';
import { lazy, Suspense } from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/header-logo.svg';
import Icon1 from '../images/header-icon1.svg';
import Icon2 from '../images/header-icon2.svg';
import Icon3 from '../images/header-icon3.svg';

const Header = () => {
    return (
        <>
        <div className={h.header__wrapper}>
          <div className={h.header__container}>
            <Link to="/">
                <div className={h.logo__wrapper}>
                   <img src={Logo} alt="logo" />
                </div>
            </Link>
            <div className={h.header__nav}>
              <div className={h.header__nav__item}>
                <img src={Icon1} alt="icon" />
                 <p className={h.header__nav__itemText}>Boards</p>
              </div>
              <div className={h.header__nav__item}>
                <img src={Icon2} alt="icon" />
                 <p className={h.header__nav__itemText}>Changelog</p>
              </div>
              <div className={h.header__nav__item}>
                <img src={Icon3} alt="icon" />
                 <p className={h.header__nav__itemText}>Log in</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
export default Header;