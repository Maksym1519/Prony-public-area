import React from "react";
import b from "./boardMain.module.scss";
import { useState } from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Search from "../../images/search.svg";
import ArrowDown from "../../images/Arrow-down.svg";
import ArrowTop from "../../images/Arrow-Top.svg";
const HeaderLazy = React.lazy(() => import("../../components/Header"));
const ChatBoardLazy = React.lazy(() => import("./ChatBoard"));
const FooterLazy = React.lazy(() => import("../../components/Footer"));
import { FiltersData2 } from "./FiltersData";
import { FiltersData1 } from "./FiltersData";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const BoardMain = () => {
  const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: auto;
    row-gap: 10px;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 10px;
    min-width: 100%;
  `;

  const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 33px;
    background: #fff;
    cursor: pointer;
    padding: 12px;
    h1 {
      color: var(--272557, #272557);
      font-family: "Poppins-400";
      font-size: 12px;
      line-height: 21px;
      letter-spacing: 0.079px;
      // margin-bottom: 10px
    }

    span {
      //margin-right: 1.5rem;
    }
  `;
  const Dropdown = styled.div`
    width: 100%;
    //height: 98px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 12px;
    p {
        color: var(--272557, #272557);
        font-family: 'Poppins-400';
        font-size: 12px;
        line-height: 21px; 
        letter-spacing: 0.079px;
        margin-bottom: 10px;
    }
  `;

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  //accordion-----------------------------------------------
  const [clicked1, setClicked1] = useState(null);
  const [clicked2, setClicked2] = useState(null);
  const [clicked3, setClicked3] = useState(null);
  const [clicked4, setClicked4] = useState(null);
  const toggle1 = (index) => {
    if (clicked1 === index) {
      //if clicked question is already active, then close it
      return setClicked1(null);
    }

    setClicked1(index);
  };

  const toggle2 = (index) => {
    if (clicked2 === index) {
      //if clicked question is already active, then close it
      return setClicked2(null);
    }

    setClicked2(index);
  };
  const toggle3 = (index) => {
    if (clicked3 === index) {
      //if clicked question is already active, then close it
      return setClicked3(null);
    }

    setClicked3(index);
  };
  const toggle4 = (index) => {
    if (clicked4 === index) {
      //if clicked question is already active, then close it
      return setClicked4(null);
    }

    setClicked4(index);
  };
  //--------------------------------------------------------
  const colored = {
    color: '#1565C0'
  }
  return (
    <>
      <div className={b.boardMain__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
          <HeaderLazy text={"Board title 1"} color={colored}/>
        </Suspense>
        <div className={b.boardMain__container}>
          <div className={b.boardMain__main}>
            <div className={b.main__filters}>
              <div className={b.filters__input__wrapper}>
                <input
                  type="text"
                  placeholder="Search"
                  className={b.main__filters__search}
                />
                <img
                  src={Search}
                  alt="icon"
                  className={b.filters__input__search}
                />
              </div>
              <div className={b.main__filters__left}>
                <div className={b.main__filters__left__item}>
                  <h4 className={b.filters__item__title}>Sort by:</h4>
                  <AccordionSection>
                    <Container>
                      {FiltersData1.map((item1, index) => {
                        return (
                          <>
                            {/* <div className={b.line__wrapper}> */}
                            <Wrap onClick={() => toggle1(index)} key={index}>
                              <h1 className={b.dropdown__title}>
                                {item1.title}
                              </h1>
                              <span className={b.arrow__wrapper}>
                                {clicked1 === index ? (
                                  <img src={ArrowTop} alt="arrow" />
                                ) : (
                                  <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    className={b.terms__arrow}
                                  />
                                )}
                              </span>
                            </Wrap>
                            {clicked1 === index ? (
                              <Dropdown>
                                <p className={b.dropdown__text}>
                                  {item1.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item1.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item1.content}
                                </p>
                              </Dropdown>
                            ) : null}
                            {/* </div> */}
                          </>
                        );
                      })}
                    </Container>
                  </AccordionSection>
                </div>
                <div className={b.main__filters__left__item}>
                  <h4 className={b.filters__item__title}>Showing:</h4>
                  <AccordionSection>
                    <Container>
                      {FiltersData2.map((item, index) => {
                        return (
                          <>
                            {/* <div className={b.line__wrapper}> */}
                            <Wrap onClick={() => toggle2(index)} key={index}>
                              <h1 className={b.dropdown__title}>
                                {item.title}
                              </h1>
                              <span className={b.arrow__wrapper}>
                                {clicked2 === index ? (
                                  <img src={ArrowTop} alt="arrow" />
                                ) : (
                                  <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    className={b.terms__arrow}
                                  />
                                )}
                              </span>
                            </Wrap>
                            {clicked2 === index ? (
                              <Dropdown>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                              </Dropdown>
                            ) : null}
                            {/* </div> */}
                          </>
                        );
                      })}
                    </Container>
                  </AccordionSection>
                </div>
              </div>
              <div className={b.main__filters__right}>
                <div className={b.main__filters__right__item}>
                  <h4 className={b.filters__item__title}>Showing:</h4>
                  <AccordionSection>
                    <Container>
                      {FiltersData1.map((item, index) => {
                        return (
                          <>
                            {/* <div className={b.line__wrapper}> */}
                            <Wrap onClick={() => toggle3(index)} key={index}>
                              <h1 className={b.dropdown__title}>
                                {item.title}
                              </h1>
                              <span className={b.arrow__wrapper}>
                                {clicked3 === index ? (
                                  <img src={ArrowTop} alt="arrow" />
                                ) : (
                                  <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    className={b.terms__arrow}
                                  />
                                )}
                              </span>
                            </Wrap>
                            {clicked3 === index ? (
                              <Dropdown>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                              </Dropdown>
                            ) : null}
                            {/* </div> */}
                          </>
                        );
                      })}
                    </Container>
                  </AccordionSection>
                </div>
                <div className={b.main__filters__right__item}>
                  <h4 className={b.filters__item__title}>Showing:</h4>
                  <AccordionSection>
                    <Container>
                      {FiltersData1.map((item, index) => {
                        return (
                          <>
                            {/* <div className={b.line__wrapper}> */}
                            <Wrap onClick={() => toggle4(index)} key={index}>
                              <h1 className={b.dropdown__title}>
                                {item.title}
                              </h1>
                              <span className={b.arrow__wrapper}>
                                {clicked4 === index ? (
                                  <img src={ArrowTop} alt="arrow" />
                                ) : (
                                  <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    className={b.terms__arrow}
                                  />
                                )}
                              </span>
                            </Wrap>
                            {clicked4 === index ? (
                              <Dropdown>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                                <p className={b.dropdown__text}>
                                  {item.content}
                                </p>
                              </Dropdown>
                            ) : null}
                            {/* </div> */}
                          </>
                        );
                      })}
                    </Container>
                  </AccordionSection>
                </div>
              </div>
            </div>
            <Suspense fallback={<LoadingInfo />}>
              <ChatBoardLazy />
            </Suspense>
             </div>
        </div>
        <Suspense fallback={<LoadingInfo />}>
          <FooterLazy />
        </Suspense>
      </div>
    </>
  );
};
export default BoardMain;
