import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import r from './registration.module.scss';
const HeaderLazy = React.lazy(() =>
  import("../../components/Header")
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
  const colored = {
    color: '#272557'
  }
    return (
        <>
        <div className={r.login__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLazy text={"Boards"} color={colored}/>
        </Suspense>
        <div className={r.login__container}>
           <h3 className={r.title}>User registration</h3>
           <div className={r.login__body}>
             <div className={r.input__wrapper}>
               <div className={r.input__item}>
                 <label htmlFor="login">Your name</label>
                 <input type="text" placeholder="Enter your name"/>
               </div>
               <div className={r.input__item}>
                 <label htmlFor="login">Your last name</label>
                 <input type="text" placeholder="Enter your last name"/>
               </div>
               <div className={r.input__item}>
                 <label htmlFor="login">Your email</label>
                 <input type="email" placeholder="Enter your email"/>
               </div>
               <div className={r.input__item}>
                 <label htmlFor="login">Your password</label>
                 <input type="password" placeholder="Enter your password"/>
               </div>
               <div className={r.input__item}>
                 <label htmlFor="login">Confirm password</label>
                 <input type="password" placeholder="Enter your password"/>
               </div>
               <div className={r.inputs__functions}>
                  <div className={r.input__checked}>
                    <div className={r.radioCustom__wrapper}>
                     <input type="radio" id="check" className={r.radio} />
                     <img src={CheckBox} alt="logo" className={r.radioCustom__checked} />
                     </div>
                     <label htmlFor="check">Keep me logged in</label>
                  </div>
                  <Link to='/Reset'>
                  <span className={r.reminder}>Forgot password</span>
                  </Link>
               </div>
               <div className={r.submit__button__form}>
               <Link to='/Login'>
                  <div className={r.submit__button__wrapper}>
                     <button className={r.submit__button}>Submit</button>
                     <img src={Blur} alt="blur" className={r.blur} />
                  </div>
                  </Link>
                  <div className={r.create__account}>
                     <span className={r.text}>Don’t have an account?</span>
                     <span className={r.text + " " + r.text_colored}>Create a new account</span>
                  </div>
               </div>
               <div className={r.socialMedia__wrapper}>
                  <h3 className={r.socialMedia__title}>Or login with social:</h3>
                  <div className={r.socialMedia__body}>
                      <div className={r.socialMedia__item}>
                         <img src={Google} alt="logo" />
                         <span className={r.text}>Login with Google</span>
                      </div>
                      <div className={r.socialMedia__item}>
                         <img src={Github} alt="logo" />
                         <span className={r.text}>Login with Github</span>
                      </div>
                      <div className={r.socialMedia__item}>
                         <img src={Facebook} alt="logo" />
                         <span className={r.text}>Login with Facebook</span>
                      </div>
                      <div className={r.socialMedia__item}>
                         <img src={Discord} alt="logo" />
                         <span className={r.text}>Login with Discord</span>
                      </div>
                      <div className={r.socialMedia__item}>
                         <img src={Twitter} alt="logo" />
                         <span className={r.text}>Login with Twitter</span>
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
    )
}

export default Login;