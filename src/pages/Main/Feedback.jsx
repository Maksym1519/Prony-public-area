import f from './feedback.module.scss';

const Feedback = () => {
    return (
        <>
        <div className={f.feedback__wrapper}>
          <h2 className={f.feedback__title}>Give feedback</h2>
          <div className={f.feedback__body}>
            <div className={f.feedback__body__item}>
                <span className={f.feedback__item__text}>Board title</span>
                <span className={f.feedback__item__numbers}>23</span>
            </div>
            <div className={f.feedback__body__item}>
                <span className={f.feedback__item__text}>Board title</span>
                <span className={f.feedback__item__numbers}>23</span>
            </div>
            <div className={f.feedback__body__item}>
                <span className={f.feedback__item__text}>Board title</span>
                <span className={f.feedback__item__numbers}>23</span>
            </div>
          </div>
        </div>
        </>
    )
}

export default Feedback;