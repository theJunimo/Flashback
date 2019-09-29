import React from 'react';
import styles from './BackToTop.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BackToTop = () => {

    const goToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    return(
        <div className = {cx('BackToTop mt-0')}
            onClick = {goToTop}>
            <img src = 'img/arrow-up.svg' alt = 'icon'/><span>TOP</span>
        </div>
    )
}

export default BackToTop;