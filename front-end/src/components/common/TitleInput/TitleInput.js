import React, { useEffect, useRef } from 'react';
import styles from './TitleInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TitleInput = ({selected}) => {
    const inputEl = useRef(null);

    useEffect(() => {
        if(!selected) return;
        inputEl.current.value = selected;
    }, [selected]);

    return(
        <div className = {cx('TitleInput')}>
            <div className = { cx('form-group')}>
                <label htmlFor = 'title'>TITLE</label>
                <div className = { cx('input-wrapper')}>
                    <input
                        ref = { inputEl }
                        id = "title"
                        name = 'title'
                        type = 'text'
                        autoComplete = 'off'
                    />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TitleInput);