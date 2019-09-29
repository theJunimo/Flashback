import React from 'react';
import styles from './TextSection.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TextSection = () => {
    return(
        <div className = {cx('TextSection')}>
            <input
                type = 'text'
                name = 'photoTitle'
                autoComplete = 'off'
                autoFocus
                placeholder = '사진 제목'/>
            <textarea
                placeholder = '설명 추가'/>
        </div>
    )
}

export default TextSection;