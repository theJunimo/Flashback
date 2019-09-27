import React from 'react';
import styles from './MarkedTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MarkedTitle = ({type, children}) => {
    return(
        <div className = {cx('MarkedTitle')}>
            <h1>
                <span className = {cx('mark ' + type)}>
                    <span className = {cx('header')}>{children}</span>    
                </span>
            </h1>
        </div>
    )
}

export default React.memo(MarkedTitle);