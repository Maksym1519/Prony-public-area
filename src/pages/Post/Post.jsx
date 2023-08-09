import React from 'react';
import { lazy, Suspense } from "react";
import p from './post.module.scss';
const HeaderLazy = React.lazy(() => import('../../components/Header'));
const PostChatLazy = React.lazy(() => import('./PostChat'));
const FooterLazy = React.lazy(() => import('../../components/Footer'));
import Vouter1 from '../../images/vouters1.webp';
import Vouter2 from '../../images/vouters2.webp';
import Vouter3 from '../../images/vouters3.webp';
import Vouter4 from '../../images/vouters4.webp';
import Vouter5 from '../../images/vouters5.webp';
import Vouter6 from '../../images/vouters6.webp';
import LikeActive from '../../images/like-active.svg';
import Avatar from '../../images/avatar-post.webp';
import TagnameImg from '../../images/tagname-bg.webp';
import Dot from '../../images/Dot-green.svg';
import Chat from '../../images/chat.svg';
import Add from '../../images/add.svg';
import Blur from '../../images/blur-textform.svg'


function LoadingInfo() {
    return <h2>Loading...</h2>;
  }
const Post = () => {
    const colored = {
        color: '#272557'
      }
    return (
        <>
        <div className={p.post__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
        <HeaderLazy text={"Boards"} color={colored}/>
         </Suspense>
         <div className={p.post__container}>
           <div className={p.vouters__wrapper}>
              <div className={p.vouters__body}>
                <span className={p.vouters__body__title}>Vouters</span>
                <div className={p.vouters__body__imgWrapper}>
                  <img src={Vouter1} alt="logo" className={p.vouters__body__img1 + " " + p.vouters__body__img} />
                  <img src={Vouter2} alt="logo" className={p.vouters__body__img2 + " " + p.vouters__body__img} />
                  <img src={Vouter3} alt="logo" className={p.vouters__body__img3 + " " + p.vouters__body__img} />
                  <img src={Vouter4} alt="logo" className={p.vouters__body__img4 + " " + p.vouters__body__img} />
                  <img src={Vouter5} alt="logo" className={p.vouters__body__img5 + " " + p.vouters__body__img} />
                  <img src={Vouter6} alt="logo" className={p.vouters__body__img6 + " " + p.vouters__body__img} />
                </div>
                <span className={p.vouters__body__amount}>+12</span>
              </div>
           </div>
           <div className={p.vouterCard__wrapper}>
             <div className={p.vouterCard__header}>
               <div className={p.vouterCard__header__like}>
                  <div className={p.header__like__imgWrapper}>
                    <img src={LikeActive} alt="like" />
                  </div>
                  <span className={p.header__like__amount}>23</span>
               </div>
               <img src={Avatar} alt="avatar" className={p.vouterCard__header__avatar} />
               <span className={p.vouterCard__header__name}>John Doe</span>
               <span className={p.vouterCard__header__seen}>3 min ago</span>
             </div>
             <div className={p.vouterCard__textInfo}>
               <h3 className={p.vouterCard__textInfo__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</h3>
               <p className={p.vouterCard__textInfo__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam 
               tellus. Vel aliquam diam sit odio. Elit sed orci, bibendum sit. Nunc, penatibus blandit faucibus
                tristique vulputate tincidunt. Lorem sit egestas bibendum consectetur nisi, nunc. Dignissim non eget 
                nisl ultrices dui aliquet. Porttitor ridiculus orci diam at. Tempus in auctor rutrum diam lobortis 
                tempus non egestas rhoncus.</p>
             </div>
             <div className={p.vouterCard__tagname}>
                <div className={p.vouterCard__tagname__imgWrapper}>
                   <img src={TagnameImg} alt="img" />
                </div>
                <div className={p.tagname__functions}>
                  <div className={p.tagname__functions__status}>
                     <img src={Dot} alt="icom" />
                     <span className={p.functions__status__text}>Completed</span>
                  </div>
                  <div className={p.tagname__functions__comments}>
                     <img src={Chat} alt="icon" />
                     <span className={p.functions__comments__text}>12</span>
                     <span className={p.functions__comments__text}>Comments</span>
                  </div>
                  <button className={p.tagname__functions__button + " " + p.red}>Tagname1</button>
                  <button className={p.tagname__functions__button + " " + p.green}>Tagname2</button>
                </div>
              </div>
              <div className={p.textForm__wrapper}>
                  <div className={p.textForm__textArea__wrapper}>
                   <textarea name="text" id="post" cols="30" rows="10" className={p.textForm__textArea} placeholder='Cmment here...'></textarea>
                  </div>
                  <div className={p.textForm__functions}>
                      <div className={p.textForm__functions__addFilles}>
                        <img src={Add} alt="icon" />
                        <span className={p.functions__addFilles__text + " " + p.blue}>Add file</span>
                        <span className={p.functions__addFilles__text}>or drop files here</span>
                      </div>
                      <div className={p.textForm__functions__inputsWrapper}>
                        <div className={p.textForm__input + " " + p.margin}>
                           <input type="radio" id='public' name='input'/>
                           <label htmlFor="public" className={p.textForm__input__label}>Public</label>
                        </div>
                        <div className={p.textForm__input}>
                           <input type="radio" id='private' name='input'/>
                           <label htmlFor="private" className={p.textForm__input__label}>Public</label>
                        </div>
                        <div className={p.textForm__button__wrapper}>
                        <button className={p.textForm__button}>Comment</button>
                        <img src={Blur} alt="blur" className={p.button__blur} />
                        </div>
                      </div>
                  </div>
                </div>
           </div>
           <Suspense fallback={<LoadingInfo />}>
        <PostChatLazy />
         </Suspense>
         </div>
         <Suspense fallback={<LoadingInfo />}>
        <FooterLazy />
         </Suspense>
        </div>
        </>
    )
}

export default Post;