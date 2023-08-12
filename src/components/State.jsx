import React from 'react';
import { useState,useEffect } from 'react';
import s from './state.module.scss';

const Car = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(()=> {
            setCount((count) => count + 1)
        },1000)
    })
    return (
        <div className={s.wrapper}>
           <h1>I'v rendered {count} times </h1>
           <button className={s.button}>Click</button>
        </div>
    )
}
export default Car;