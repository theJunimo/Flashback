import React from 'react';
import styles from './ContentWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ContentWrapper = ({children}) => {
    return(
        <div className = {cx('ContentWrapper')}>
            <div className = {cx('prevBtn')}>
                <img alt = 'left-arrow' src = 'img/arrow-left.svg'></img>
            </div>
            {children}
            <div className = {cx('nextBtn')}>
            <img alt = 'right-arrow' src = 'img/arrow-right.svg'></img>
            </div>
        </div>
    )
}

export default ContentWrapper;