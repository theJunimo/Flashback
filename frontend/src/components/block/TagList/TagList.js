import React from 'react';
import styles from './TagList.scss';
import classNames from 'classnames/bind';
import colorPick from 'lib/colorPick';

const cx = classNames.bind(styles);

const TagList = ({tagList}) => {
    const colors = tagList.reduce((acc) => {
        while(true){
            const color = colorPick();
            if(acc.indexOf(color) === -1) {
                acc.push(color);
                break;
            }
        }
        return acc;
    },[]);

    const list = tagList.map((el, idx) =>{
        const style = {
            'backgroundColor' : colors[idx]
        }
        return (
            <li key = { idx }
                style = {style}>
                #{el}
            </li>
    )})

    return(
        <section className = {cx('TagList')}>
            <ul>
                {list}
            </ul>
        </section>
    )
}

export default TagList;