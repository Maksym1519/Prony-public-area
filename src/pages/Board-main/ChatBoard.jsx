import React from "react";
import { lazy, Suspense } from "react";
import cb from "./chatBoard.module.scss";
import Like from "../../images/like.svg";
import GreenDot1 from "../../images/Dot-green.svg";
import YellowDot1 from "../../images/Dot-yellow.svg";
import Chat from "../../images/chat.svg";
import DoubleBefore from '../../images/double-before.svg';
import SingleBefore from '../../images/single-before.svg';
import SingleAfter from '../../images/single-after.svg';
import DoubleAfter from '../../images/double-after.svg';

function LoadingInfo() {
  return <h2>Loading...</h2>;
}
const ChatBoard = () => {
  return (
    <div className={cb.chatBoard__item__wrapper}>
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={YellowDot1} alt="icon" />
            <span className={cb.info__status__statusText}>In progress</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={YellowDot1} alt="icon" />
            <span className={cb.info__status__statusText}>In progress</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={YellowDot1} alt="icon" />
            <span className={cb.info__status__statusText}>In progress</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__item}>
        <div className={cb.chatBoard__item__like}>
          <img src={Like} alt="icon" className={cb.item__like__img} />

          <span className={cb.item__like__numbers}>23</span>
        </div>
        <div className={cb.chatBoard__item__info}>
          <h4 className={cb.item__info__title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </h4>
          <div className={cb.item__info__status}>
            <img src={GreenDot1} alt="icon" />
            <span className={cb.info__status__statusText}>Complete</span>
          </div>
          <p className={cb.info__status__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in
            est turpis nulla tortor.
          </p>
        </div>
        <div className={cb.chatBoard__item__messages}>
          <img src={Chat} alt="icon" />
          <span className={cb.item__messages__numbers}>12</span>
        </div>
      </div>
      {/* new item----------------------------------------------------- */}
      <div className={cb.chatBoard__pagination}>
       <img src={DoubleBefore} alt="icon" />
       <img src={SingleBefore} alt="icon" />
       <div className={cb.pagination__button}><span className={cb.pagination__number}>1</span></div>
       <div className={cb.pagination__button}><span className={cb.pagination__number}>2</span></div>
       <div className={cb.pagination__button}><span className={cb.pagination__number}>3</span></div>
       <div className={cb.pagination__button}><span className={cb.pagination__number}>4</span></div>
       <div className={cb.pagination__button}><span className={cb.pagination__number}>5</span></div>
       <img src={SingleAfter} alt="icon" />
       <img src={DoubleAfter} alt="icon" />
      </div>
    </div>
  );
};

export default ChatBoard;
