import React from 'react';
import styles from './NoticeMark.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoticeMark = ({children}) => {
    return(
        <div className = {cx('NoticeMark')}>
            <span>{children}</span>
        </div>
    )
}

export default NoticeMark;