import React, { useState } from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import pf from "./profile.module.scss";
import Ava from '../../images/ava1.webp';
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Blur from '../../images/blur-textform.svg'

function LoadingInfo() {
    return <h2>Loading...</h2>;
  }
const ChangePassword = () => {
  const [isProfileMenu, setProfileMenu] = useState(null)
  const hideProfileMenu = () => {
    setProfileMenu(false)
  }
  return (
    <>
      <div className={pf.changePassword__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy action={hideProfileMenu} img={Ava}/>
        </Suspense>
        <div className={pf.changePassword__container}>
            <h2 className={pf.title}>Profile</h2>
          <div className={pf.changePassword__body}>
            <div className={pf.input__wrapper}>
                <label htmlFor="1">First name</label>
              <input type="text" id="1" placeholder="Enter your first name" className={pf.input} />
               </div>
            <div className={pf.input__wrapper}>
                <label htmlFor="1">Last name</label>
              <input type="text" id="1" placeholder="Enter your last name" className={pf.input}/>
            </div>
            <div className={pf.input__wrapper}>
                <label htmlFor="1">Email</label>
              <input type="email" id="1" placeholder="Enter your email" className={pf.input}/>
            </div>
            <div className={pf.button__wrapper}>
             <Link to="#" onClick={() => window.history.back()}>
            <div className={pf.cancel}>Cancel</div>
            </Link>
            <Link to="/">
            <div className={pf.submit__wrapper}>
            <button className={pf.submit}>Submit</button>
            <img src={Blur} alt="blur" className={pf.button__blur} />
            </div>
            </Link>
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

export default ChangePassword;
