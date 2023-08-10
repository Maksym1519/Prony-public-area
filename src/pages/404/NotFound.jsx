import React from "react";
import n from "./notFound.module.scss";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
const HeaderLoggedLazy = React.lazy(() =>
  import("../../components/HeaderLogged")
);
const FooterLazy = React.lazy(() => import("../../components/Footer"));
import For from "../../images/4.webp";
import Zero from "../../images/Union.webp";
import Blur from "../../images/blur-404.webp";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
export default function NotFound() {
  const colored = {
    color: "#272557",
  };
  return (
    <div className={n.notFound__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <HeaderLoggedLazy />
      </Suspense>
      <div className={n.notFound__container}>
        <h3 className={n.notFound__title}>SOMETHING wrong</h3>
        <div className={n.notFound__imgWrapper}>
          <img src={For} alt="logo" />
          <img src={Zero} alt="logo" />
          <img src={For} alt="logo" />
        </div>
        <div className={n.notFound__description}>
          This page is missing or you assembled the link incorrectly
        </div>
        <Link to="/">
          <div className={n.notFound__button}>
            <img src={Blur} alt="blur" />
            To home page
          </div>
        </Link>
      </div>
      <Suspense fallback={<LoadingInfo />}>
        <Link to="/Error">
          <FooterLazy />
        </Link>
      </Suspense>
    </div>
  );
}
