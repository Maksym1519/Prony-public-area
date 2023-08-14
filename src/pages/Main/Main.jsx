import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import m from "./main.module.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
const HeaderLazy = React.lazy(() => import("../../components/Header"));
const FeedbackLazy = React.lazy(() => import("./Feedback"));
const RoadmapLazy = React.lazy(() => import("./Roadmap"));
const FooterLazy = React.lazy(() => import("../../components/Footer"));

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const Main = () => {
  const colored = {
    color: "#272557",
  };
  return (
    <div className={m.main__wrapper}>
      <HeaderLazy text="boards" color={colored} />

      <div className={m.main__container}>
        <Suspense fallback={<LoadingInfo />}>
          <FeedbackLazy />
        </Suspense>
        <Suspense fallback={<LoadingInfo />}>
          <RoadmapLazy />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingInfo />}>
        <Link to="/NotFound">
          <FooterLazy />
        </Link>
      </Suspense>
    </div>
  );
};
export default Main;
