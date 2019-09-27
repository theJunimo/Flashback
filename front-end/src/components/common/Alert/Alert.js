import React from 'react';
import styles from './Alert.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Alert = () => {
    return(
        <div className = {cx('Alert')}>
        </div>
    )
}

export default Alert;