import React from 'react';
import styles from './AddButton.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AddButton = () => {
    return(
        <div className = {cx('AddButton')}>
            <img src = 'img/add.svg' alt = 'plus-button' />
        </div>
    )
}

export default AddButton;