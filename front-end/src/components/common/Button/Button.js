import React, { useState, useRef, useCallback } from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({type, children, onClick}) => {
    const [msg, setMsg] = useState('');
    const buttonEl = useRef(null);

    const onHover = useCallback(() => {
        setMsg('R U Sure?');
    }, []);

    const onLeave = useCallback(() => {
        setMsg('');
    },[]);

    return(
        <div ref = { buttonEl }
            className = { cx('Button ' + (type))}  
            onClick = { onClick }
            onMouseEnter = { children === 'DELETE' || children === 'LEAVE'? onHover : null} 
            onMouseLeave = { children === 'DELETE' || children === 'LEAVE'? onLeave : null }>
            {msg? msg : children}
        </div>
    )
}

export default React.memo(Button);