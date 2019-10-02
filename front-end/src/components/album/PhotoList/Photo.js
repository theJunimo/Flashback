import React, { useState, useCallback } from 'react';
import styles from './Photo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Photo = ({info, onClick}) => {
    const [visible, setVisible] = useState(false);

    const onHover = useCallback(() => {
        setVisible((visible) => true);
    },[]);

    const onLeave = useCallback(() => {
        setVisible((visible) => false);
    },[])

    return(
        <div 
            className = {cx('Photo')}
            onMouseEnter = { onHover }
            onMouseLeave = { onLeave }
            onClick = { onClick }>
            <div className = {cx('img-wrapper')}>
                <img alt = 'img ' src = { info.src } />
            </div>
            {visible && (
                <div className = {cx('cover')}>
                    <div className = {cx('date')}>
                        2018.04.24
                    </div>
                    <div className = {cx('photo-title')}>
                        행복한 내 생일날
                    </div>
                </div>
            )}
        </div>
    )
}

export default React.memo(Photo);