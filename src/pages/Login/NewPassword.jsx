import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import np from './newPassword.module.scss';
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Blur from '../../images/blur-textform.svg';
import Eye from '../../images/Eye.svg'

function LoadingInfo() {
    return <h2>Loading...</h2>;
  }
const Login = () => {
    return (
        <>
        <div className={np.login__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy />
        </Suspense>
        <div className={np.login__container}>
           <h3 className={np.title}>New password</h3>
           <div className={np.login__body}>
             <div className={np.input__wrapper}>
               <div className={np.input__item}>
                 <label htmlFor="login">New password</label>
                 <input type="password" placeholder="Enter your password"/>
                 <img src={Eye} alt="icon" className={np.eye}/>
               </div>
               <div className={np.input__item}>
                 <label htmlFor="login">Confirm password</label>
                 <input type="password" placeholder="Enter your password"/>
                 <img src={Eye} alt="icon" className={np.eye}/>
               </div>
               <div className={np.submit__button__form}>
                  <div className={np.submit__button__wrapper}>
                     <button className={np.submit__button}>Submit</button>
                     <img src={Blur} alt="blur" className={np.blur} />
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