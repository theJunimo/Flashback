import React from 'react';
import styles from './Modal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Modal = ({type = 'fail'}) => {
    return(
        <div className = {cx('Modal ' + type)}>
            {type === 'success'? 
            '복사 완료! ٩( ᐛ )و' 
            : 
            '복사 실패 ◟꒰◍´Д‵◍꒱◞' 
            }
            <div className = {cx('close')}/>
        </div>
    )
}

export default Modal;