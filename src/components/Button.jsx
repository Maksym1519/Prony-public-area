import React from 'react';
import b from './button.module.scss';
import { Link,BrowserRouter } from 'react-router-dom';
import Blur from '../images/blur-textform.svg'

 const MyButton = (props) => {
    return (
        <>
         <div className={b.button__wrapper} style={{width:props.width}}>
             <div className={b.img__wrapper}>
             <img src={Blur} alt="blur" className={b.blur}/>
             </div>
             <span>{props.text}</span>
        </div>
       </>
    )
}
export default MyButton;
