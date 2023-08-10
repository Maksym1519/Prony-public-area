import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import a from "./avatar.module.scss";
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import("../../components/Footer"));
import Blur from '../../images/blur-textform.svg';
import AvatarImg from '../../images/avatar-avatar.webp';
import Add from '../../images/add.svg'


function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const Avatar = () => {
  return (
    <>
      <div className={a.avatar__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLoggedLazy />
        </Suspense>
        <div className={a.avatar__container}>
            <h2 className={a.title}>Avatar</h2>
          <div className={a.avatar__body}>
           <h4 className={a.title}>Current avatar</h4>
           <div className={a.avatar__photo__wrapper}>
             <div className={a.img__wrapper}>
               <img src={AvatarImg} alt="ava" />
             </div>
             <div className={a.addFiles}>
               <img src={Add} alt="add" />
               <div className={a.text__wrapper}>
                    <span className={a.text + " " + a.text_colored}>Add file</span>
                    <span className={a.text}>or drop files here</span>
               </div>
             </div>
           </div>
            <div className={a.button__wrapper}>
             <Link to="#" onClick={() => window.history.back()}>
            <div className={a.cancel}>Cancel</div>
            </Link>
            <Link to="/Profile">
            <div className={a.submit__wrapper}>
            <button className={a.submit}>Submit</button>
            <img src={Blur} alt="blur" className={a.button__blur} />
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

export default Avatar;
