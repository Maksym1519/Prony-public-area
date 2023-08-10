import React from "react";
import n from './notFound.module.scss';
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
const HeaderLoggedLazy = React.lazy(() => import("../../components/HeaderLogged"));
const FooterLazy = React.lazy(() => import("../../components/Footer"));
import For from '../../images/4.webp';
import Zero from '../../images/zero.webp';
import Blur from '../../images/blur-404.webp';
import Five from '../../images/5.webp'

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
export default function Error() {
  const colored = {
    color: "#272557",
  };
  return (
    <div className={n.notFound__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <HeaderLoggedLazy />
        </Suspense>
        <div className={n.notFound__container + " " + n.error__container}>
         <h3 className={n.notFound__title}>unexpected error</h3>
         <div className={n.notFound__imgWrapper + " " + n.error__imgWrapper}>
           <img src={Five} alt="logo" />
           <img src={Zero} alt="logo" />
           <img src={Zero} alt="logo" />
         </div>
         <div className={n.notFound__description}>An error ocurred and your request couldn’t be completed.</div>
         <Link to="/">
         <div className={n.notFound__button}>
           <img src={Blur} alt="blur" />
           To home page
         </div>
         </Link>
         <span className={n.report}>Report this issue</span>
        </div>
        <Suspense fallback={<LoadingInfo />}>
        <FooterLazy />
        </Suspense>
    </div>
  );
}
