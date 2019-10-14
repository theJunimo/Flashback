import React from 'react';
import styles from './BestMark.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BestMark = () => {
    return(
        <div className = {cx('BestMark')}>
            <span>❤︎BEST❤︎</span>
        </div>
    )
}

export default BestMark;