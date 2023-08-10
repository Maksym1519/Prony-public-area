import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import l from "./login.module.scss";
const HeaderLazy = React.lazy(() => import("../../components/Header"));
const FooterLazy = React.lazy(() => import("../../components/Footer"));
import Blur from "../../images/blur-textform.svg";
import Google from "../../images/login-google.svg";
import Facebook from "../../images/login-facebook.svg";
import Twitter from "../../images/login-twitter.svg";
import Github from "../../images/login-github.svg";
import Discord from "../../images/login-discord.svg";
import CheckBox from "../../images/Checkbox.svg";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const Login = () => {
  const colored = {
    color: "#272557",
  };
  return (
    <>
      <div className={l.login__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLazy text={"Boards"} color={colored} />
        </Suspense>
        <div className={l.login__container}>
          <h3 className={l.title}>Login</h3>
          <div className={l.login__body}>
            <div className={l.input__wrapper}>
              <div className={l.input__item}>
                <label htmlFor="login">Your login</label>
                <input type="text" placeholder="Enter your login" />
              </div>
              <div className={l.input__item}>
                <label htmlFor="login">Your pasword</label>
                <input type="text" placeholder="Enter your password" />
              </div>
              <div className={l.inputs__functions}>
                <div className={l.input__checked}>
                  <div className={l.radioCustom__wrapper}>
                    <input type="radio" id="check" className={l.radio} />
                    <img
                      src={CheckBox}
                      alt="logo"
                      className={l.radioCustom__checked}
                    />
                  </div>
                  <label htmlFor="check">Keep me logged in</label>
                </div>
                <Link to='/Reset'>
                <span className={l.reminder}>Forgot password</span>
                </Link>
              </div>
              <div className={l.submit__button__form}>
                <Link to="/Profile" className={l.link__wrapper}>
                  <div className={l.submit__button__wrapper}>
                    <button className={l.submit__button}>Submit</button>
                    <img src={Blur} alt="blur" className={l.blur} />
                  </div>
                </Link>
                <Link to='/Registration'>
                  <div className={l.create__account}>
                    <span className={l.text}>Don’t have an account?</span>
                    <span className={l.text + " " + l.text_colored}>
                      Create a new account
                    </span>
                  </div>
                </Link>
              </div>
              <div className={l.socialMedia__wrapper}>
                <h3 className={l.socialMedia__title}>Or login with social:</h3>
                <div className={l.socialMedia__body}>
                  <div className={l.socialMedia__item}>
                    <img src={Google} alt="logo" />
                    <span className={l.text}>Login with Google</span>
                  </div>
                  <div className={l.socialMedia__item}>
                    <img src={Github} alt="logo" />
                    <span className={l.text}>Login with Github</span>
                  </div>
                  <div className={l.socialMedia__item}>
                    <img src={Facebook} alt="logo" />
                    <span className={l.text}>Login with Facebook</span>
                  </div>
                  <div className={l.socialMedia__item}>
                    <img src={Discord} alt="logo" />
                    <span className={l.text}>Login with Discord</span>
                  </div>
                  <div className={l.socialMedia__item}>
                    <img src={Twitter} alt="logo" />
                    <span className={l.text}>Login with Twitter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<LoadingInfo />}>
          <FooterLazy />
        </Suspense>
      </div>
    </>
  );
};

export default Login;
