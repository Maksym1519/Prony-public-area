import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import h from "./header.module.scss";
import { lazy, Suspense, useState } from "react";
const HeaderLoggedLazy = React.lazy(() => import("../components/HeaderLogged"));
import Logo from "../images/header-logo.svg";
import Icon1 from "../images/header-icon1.svg";
import Icon2 from "../images/header-icon2.svg";
import Icon3 from "../images/header-icon3.svg";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}

const Header = (props) => {
  const [isLogged, setLogged] = useState(false);
  const showLoggedHeader = () => {
    setLogged(true);
  };
  const hideLoggedHeader = () => {
    setLogged(false);
  };
  //----------------------------------------------------------------
  // const { color } = props.color;
  // const textStyle = {
  //   color: color || "var(--272557, #1565C0)",
  // };
  // const textStyle = {
  //   color: props.color?.color || "var(--272557, #1565C0)",
  // };
  //-------------------------------------------------------------------

  return (
    <>
    {/* <BrowserRouter> */}
      <div className={`${h.header__wrapper} ${isLogged ? h.display : ""}`}>
        <div className={h.header__container}>
          <Link to="/">
            <div className={h.logo__wrapper}>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <div className={h.header__nav}>
            <div className={h.header__nav__item}>
              <img src={Icon1} alt="icon" />
              {/* <p className={h.header__nav__itemText + " " + h.header__nav__itemTextColored} style={textStyle}> */}
              <p
                className={h.header__nav__itemText}
                style={{ color: props.color }}
              >
                {props.text}
              </p>
            </div>
            <div className={h.header__nav__item}>
              <img src={Icon2} alt="icon" />
              <p className={h.header__nav__itemText}>Changelog</p>
            </div>
            <div className={h.header__nav__item}>
              <img src={Icon3} alt="icon" />
              <Link to="/Login">
                <p className={h.header__nav__itemText}>Log in</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isLogged && (
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy
            show={showLoggedHeader}
            hide={hideLoggedHeader}
            isLogged={isLogged}
          />
        </Suspense>
      )}
      {/* </BrowserRouter> */}
    </>
  );
};
export default Header;
