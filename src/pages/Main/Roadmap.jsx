import r from "./roadmap.module.scss";
import Status1 from "../../images/roadmap-planed.svg";
import Status2 from "../../images/roadmap-inprogress.svg";
import Status3 from "../../images/roadmap-soon.svg";
import Like from "../../images/like.svg";

const Roadmap = () => {
  return (
    <>
      <div className={r.roadmap__wrapper}>
        <h3 className={r.roadmap__title}>Roadmap</h3>
        <div className={r.roadmap__blocks__body}>
          <div className={r.roadmap__block}>
            <div className={r.image__wrapper}>
              <img src={Status1} alt="icon" />
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
          </div>
          <div className={r.roadmap__block}>
            <div className={r.image__wrapper}>
              <img src={Status2} alt="icon" />
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
          </div>
          <div className={r.roadmap__block}>
            <div className={r.image__wrapper}>
              <img src={Status3} alt="icon" />
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
            <div className={r.roadmap__block__item}>
              <div className={r.roadmap__block__item__like}>
                <img src={Like} alt="icon" />
                <span className={r.block__item__like__amount}>23</span>
              </div>
              <div className={r.roadmap__block__item__info}>
                <p className={r.block__item__info__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <span className={r.block__item__info__subtitle}>
                  Board title
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
