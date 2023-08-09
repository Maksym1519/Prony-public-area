import React from "react";
import { lazy, Suspense } from "react";
import c from "./changeLog.module.scss";
import cb from "../Board-main/chatBoard.module.scss";
const HeaderLazy = React.lazy(() => import("../../components/Header"));
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Dot from "../../images/Dot-green.svg";
import ArrowDown from "../../images/choose-status-down.svg";
import Ava from "../../images/changelog-ava.webp";
import DoubleBefore from "../../images/double-before.svg";
import SingleBefore from "../../images/single-before.svg";
import SingleAfter from "../../images/single-after.svg";
import DoubleAfter from "../../images/double-after.svg";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const ChangeLog = () => {
  const colored = {
    color: "#272557",
  };
  return (
    <>
      <div className={c.changeLog__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLazy text={"Boards"} color={colored} />
        </Suspense>
        <div className={c.changeLog__container}>
          <div className={c.status__choose}>
            <div className={c.status__choose__body}>
              <h4 className={c.status__choose__title}>Status:</h4>
              <div className={c.status__content}>
                <div className={c.status__content__option}>
                  <img src={Dot} alt="dot" />
                  <span className={c.text}>New</span>
                </div>
                <img src={ArrowDown} alt="arrow" />
              </div>
            </div>
          </div>
          <div className={c.log__items}>
            {/* //item------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item2------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status + " " + c.status__improved}>
                Improved
              </div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item3------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item4------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status + " " + c.status_fixed}>Fixed</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item------------------------------------------------ */}
            <div className={c.log__item}>
              <h4 className={c.title}>Test record</h4>
              <div className={c.status}>New</div>
              <div className={c.item__body}>
                <div className={c.avatar__wrapper}>
                  <img src={Ava} alt="ava" />
                </div>
                <div className={c.item__body__description}>
                  <div className={c.description__header}>
                    <span className={c.name}>John Doe</span>
                    <span className={c.date}>01-02-2020</span>
                  </div>
                  <p className={c.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor id quisque magna massa ullamcorper. Vitae justo, fusce
                    viverra arcu enim varius suscipit diam tellus.
                  </p>
                </div>
              </div>
            </div>
            {/* //item------------------------------------------------ */}
            <div className={c.pagination__wrapper}>
              <div className={cb.chatBoard__pagination}>
                <img src={DoubleBefore} alt="icon" />
                <img src={SingleBefore} alt="icon" />
                <div className={cb.pagination__button}>
                  <span className={cb.pagination__number}>1</span>
                </div>
                <div className={cb.pagination__button}>
                  <span className={cb.pagination__number}>2</span>
                </div>
                <div className={cb.pagination__button}>
                  <span className={cb.pagination__number}>3</span>
                </div>
                <div className={cb.pagination__button}>
                  <span className={cb.pagination__number}>4</span>
                </div>
                <div className={cb.pagination__button}>
                  <span className={cb.pagination__number}>5</span>
                </div>
                <img src={SingleAfter} alt="icon" />
                <img src={DoubleAfter} alt="icon" />
              </div>
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

export default ChangeLog;
