import React from 'react';
import styles from './Options.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Options = ({ albumList, selected, onSelect }) => {
    const list = albumList.map((el, idx) => {
        return el === selected? 
        null
        : 
        <li 
            key = { idx }
            onClick = { () => onSelect(el) }>{el}</li> 
    })
    return(                    
        <div className = { cx('Options') }>
            <ul>
                { list }
            </ul>
        </div>
    )
}

export default React.memo(Options);