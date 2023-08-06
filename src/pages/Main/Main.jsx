//import React from 'react';
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
const Header = lazy(() => import("../../components/Common/Header/Header"));
const ClientSliderLazy = lazy(()=>import('../../components/ClientSlider'));
const CounterLazy = lazy(()=>import('../../components/Counter'));
//import { Header } from "../../components/Common/Header/Header";
import m from "./main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";
import "swiper/swiper-bundle.css";
import Car from "../../images/Nissan.webp";
import Honda from "../../images/Honda Accord-left.webp";
import Lexus from "../../images/Lexus-right.webp";
import StepIcon from "../../images/step-icon.svg";
import StepsImg1 from "../../images/steps-img1.webp";
import StepsImg2 from "../../images/steps-img2.webp";
import Adv1 from "../../images/advantages-bg1-3.webp";
import Adv2 from "../../images/advantages-bg2.webp";
import AdvLogo1 from "../../images/adv-logo1.svg";
import AdvLogo2 from "../../images/adv-logo2.svg";
import AdvLogo3 from "../../images/adv-logo3.svg";
import Car1 from "../../images/choose-car-img1.webp";
import Car2 from "../../images/choose-car-img2.webp";
import { Button } from "../../components/Common/Button";
//import { ClientSlider } from "../../components/ClientSlider";
//import { Counter } from "../../components/Counter";
import { ArticlesSlider } from "../../components/ArticlesSlider";
import { Footer } from "../../components/Common/Footer/Footer";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const Main = () => {
 return (
  <div>
    
  </div>

 )
  
};
export default Main;
