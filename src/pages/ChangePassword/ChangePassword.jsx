import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import cp from "./changePassword.module.scss";
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Blur from '../../images/blur-textform.svg'


function LoadingInfo() {
    return <h2>Loading...</h2>;
  }
const ChangePassword = () => {
  return (
    <>
      <div className={cp.changePassword__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy />
        </Suspense>
        <div className={cp.changePassword__container}>
            <h2 className={cp.title}>Change password</h2>
          <div className={cp.changePassword__body}>
            <div className={cp.input__wrapper}>
                <label htmlFor="1">Current password</label>
              <input type="password" id="1" placeholder="***********" className={cp.input + " " + cp.input__red} />
              <p className={cp.text__prediction}>Workspace name should not be longer than 250 characters</p>
            </div>
            <div className={cp.input__wrapper}>
                <label htmlFor="1">New Password</label>
              <input type="password" id="1" placeholder="Enter new password" className={cp.input}/>
            </div>
            <div className={cp.input__wrapper}>
                <label htmlFor="1">Repeat New Password</label>
              <input type="password" id="1" placeholder="Enter new password" className={cp.input}/>
            </div>
            <div className={cp.button__wrapper}>
             <Link to="#" onClick={() => window.history.back()}>
            <div className={cp.cancel}>Cancel</div>
            </Link>
            <Link to="#" onClick={() => window.history.back()}>
            <div className={cp.submit__wrapper}>
            <button className={cp.submit}>Submit</button>
            <img src={Blur} alt="blur" className={cp.button__blur} />
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
