import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import rs from './reset.module.scss';
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Blur from '../../images/blur-textform.svg';
import Google from '../../images/login-google.svg';
import Facebook from '../../images/login-facebook.svg';
import Twitter from '../../images/login-twitter.svg';
import Github from '../../images/login-github.svg';
import Discord from '../../images/login-discord.svg';
import CheckBox from '../../images/Checkbox.svg'

function LoadingInfo() {
    return <h2>Loading...</h2>;
  }
const Login = () => {
    return (
        <>
        <div className={rs.login__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy />
        </Suspense>
        <div className={rs.login__container}>
           <h3 className={rs.title}>Reset password</h3>
           <div className={rs.login__body}>
            <h3 className={rs.reset__title}>Forgot your password? Enter your email address below, and we'll email you 
            instructions to set a new one.</h3>
             <div className={rs.input__wrapper}>
               <div className={rs.input__item}>
                 <label htmlFor="login">Your email</label>
                 <input type="password" placeholder="Enter your email"/>
               </div>
               <div className={rs.submit__button__form}>
                 <Link to='/Profile'>
                  <div className={rs.submit__button__wrapper}>
                     <button className={rs.submit__button}>Submit</button>
                     <img src={Blur} alt="blur" className={rs.blur} />
                  </div>
                 </Link>
                 <Link to='/Login'>
                  <div className={rs.create__account}>
                     <span className={rs.text + " " + rs.text_colored}>Login to your account</span>
                  </div>
                </Link>
               </div>
            </div>
           </div>
        </div>
        <Suspense fallback={<LoadingInfo />}>
          <FooterLazy />
        </Suspense>
        </div>
        </>
    )
}

export default Login;