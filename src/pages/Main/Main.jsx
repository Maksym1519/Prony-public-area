import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import m from "./main.module.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
const HeaderLazy = React.lazy(() => import('../../components/Header'));
const FeedbackLazy = React.lazy(() => import('./Feedback'));
const RoadmapLazy = React.lazy(() => import('./Roadmap'));

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const Main = () => {
 return (
  <div className={m.main__wrapper}>
    <Suspense fallback={<LoadingInfo />}>
        <HeaderLazy />
      </Suspense>
      <div className={m.main__container}>
    <Suspense fallback={<LoadingInfo />}>
        <FeedbackLazy />
      </Suspense>
    <Suspense fallback={<LoadingInfo />}>
        <RoadmapLazy />
      </Suspense>
      </div>
  </div>

 )
  
};
export default Main;
