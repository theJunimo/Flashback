import React from 'react';
import styles from './NoSearchResult.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoSearchResult = () => {
    return(
        <div className = {cx('NoSearch')}>
            <p>검색결과가 없습니다.◟꒰◍´Д‵◍꒱◞</p>
        </div>
    )
}

export default NoSearchResult;