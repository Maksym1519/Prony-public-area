import p from './postChat.module.scss';
import Arrow from '../../images/Arrow-Bottom.svg';
import Ava1 from '../../images/ava1.webp';
import Ava2 from '../../images/ava2.webp';
import Ava3 from '../../images/ava3.webp';
import Ava4 from '../../images/ava4.webp';
import Ava5 from '../../images/ava5.webp';
import Like from '../../images/like.svg';
import Chat from '../../images/post-chat-icon.svg';
import Delete from '../../images/post-chat-delete.svg';
import Block from '../../images/post-chat-block.svg';
import BlockActive from '../../images/block-active.svg';
import { useState } from 'react';

const PostChat = () => {
    const [isActive, setActive] = useState(false);
    const [customStyle, setCustomStyle] = useState({});
    const [isSpecialActive, setSpecialActive] = useState(false);
    const [isHorisontal, setHorizontal] = useState(false)
    const showChat = () => {
        setActive(true)
        setCustomStyle({
            background: '#F8FAFF',
            });
            setSpecialActive(true)
            setHorizontal(true); 
    };
    const hideChat = () => {
        setActive(false)
        setCustomStyle({});
        setSpecialActive({})
        setHorizontal(false);
    }
    
    return ( 
        <>
        <div className={p.postChat__wrapper}>
          <div className={p.postChat__header}>
             <span className={p.postChat__header__text + " " + p.color}>Sort by:</span>
             <div className={p.postChat__header__sorting}>
             <span className={p.postChat__header__text}>Trending</span>
             <img src={Arrow} alt="arrow" />
             </div>
          </div>
          <div className={p.postChat__body}>
            {/* //item------------------------------------------------- */}
            <div className={p.postChat__body__item}>
               <div className={p.item__imgWrapper}>
                 <img src={Ava1} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original 
                       conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text}>Delete</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Block} alt="icon" />
                       <span className={p.text}>Public</span>
                    </div>
                  </div>
               </div>
            </div>
             {/* //item2------------------------------------------------- */}
             <div className={p.postChat__body__item + " " + p.background}>
               <div className={p.item__imgWrapper}>
                 <img src={Ava2} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original 
                       conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text}>Delete</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={BlockActive} alt="icon" />
                       <span className={p.text + " " + p.textColor}>Private</span>
                    </div>
                  </div>
               </div>
            </div>
              {/* //item3------------------------------------------------- */}
              <div className={p.postChat__body__item}>
               <div className={p.item__imgWrapper}>
                 <img src={Ava3} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original 
                       conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text}>Delete</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Block} alt="icon" />
                       <span className={p.text}>Public</span>
                    </div>
                  </div>
               </div>
            </div>
               {/* //item4------------------------------------------------- */}
               <div className={p.postChat__body__item + " " + p.chat__bound} style={isActive ? customStyle : null}>
              {isHorisontal && <div className={p.lineConnector}></div>}
               <div className={p.item__imgWrapper}>
                 <img src={Ava4} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original 
                       conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom Instead of send updates via email, send them through the original
                        conversation on Intercom</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text} onClick={showChat}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text}>Delete</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Block} alt="icon" />
                       <span className={p.text}>Public</span>
                    </div>
                  </div>
               </div>
            </div>
                {/* //item5------------------------------------------------- */}
                {isActive &&
                <div className={`${p.postChat__body__item} ${p.chat__bound} ${isSpecialActive ? p.specialChat : ''}`} style={isActive ? customStyle : null}>
                     {isHorisontal && <div className={p.lineHorizontalConnector}></div>}
               <div className={p.item__imgWrapper}>
                 <img src={Ava5} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original
                     conversation on Intercom Instead of send updates via email, send them through the origina</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text} onClick={hideChat}>Delete</span>
                    </div>
                    </div>
               </div>
            </div>
}
                 {/* //item6------------------------------------------------- */}
                 <div className={p.postChat__body__item}>
               <div className={p.item__imgWrapper}>
                 <img src={Ava3} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Merge in a post:</p>
                  </div>
                  <div className={`${p.postChat__body__item} ${p.chat__bound} ${isSpecialActive ? p.lastChat : ''}`} style={isActive ? customStyle : null}>
                     {isHorisontal && <div className={p.lineHorizontalConnector}></div>}
               <div className={p.item__imgWrapper}>
                 <img src={Ava5} alt="ava" />
               </div>
               <div className={p.item__info}>
                  <div className={p.item__info__date}>
                    <img src={Like} alt="like" />
                    <div className={p.info__date__likeWrapper}>
                      <span className={p.numbers}>3</span>
                      <span className={p.text}>likes</span>
                    </div>
                    <span className={p.info__date__date}>01-02-2020</span>
                  </div>
                  <div className={p.item__info__description}>
                       <h4 className={p.title}>Sophia-Rose Nava</h4>
                       <p className={p.text}>Instead of send updates via email, send them through the original
                     conversation on Intercom Instead of send updates via email, send them through the origina</p>
                  </div>
                  <div className={p.item__info__functions}>
                    <div className={p.info__functions__item}>
                       <img src={Chat} alt="icon" />
                       <span className={p.text}>Reply</span>
                    </div>
                    <div className={p.info__functions__item}>
                       <img src={Delete} alt="icon" />
                       <span className={p.text} onClick={hideChat}>Delete</span>
                    </div>
                    </div>
               </div>
            </div>
               </div>
               
            </div>
                  {/* //item------------------------------------------------- */}
                   {/* //item------------------------------------------------- */}
                    {/* //item------------------------------------------------- */}
          </div>
        </div>
        </>
    )
}

export default PostChat;