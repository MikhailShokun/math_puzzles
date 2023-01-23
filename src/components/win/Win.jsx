import React from 'react';
import s from "./Win.module.scss"
import FireWorks from "../fireworks/FireWorks";

const Win = () => {
    return (
        <div className={s.wrapper}>
            <FireWorks />
            <svg viewBox="0 0 600 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="50%" dy=".35em">You win!</text>
                </symbol>
                <use className={s.text} xlinkHref="#s-text"></use>
                <use className={s.text} xlinkHref="#s-text"></use>
                <use className={s.text} xlinkHref="#s-text"></use>
                <use className={s.text} xlinkHref="#s-text"></use>
                <use className={s.text} xlinkHref="#s-text"></use>
            </svg>
        </div>
    );
};

export default Win;