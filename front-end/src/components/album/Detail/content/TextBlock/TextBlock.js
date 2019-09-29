import React from 'react';
import styles from './TextBlock.scss';
import classNames from 'classnames/bind';
import CommentBlock from 'components/album/Detail/content/CommentBlock';

const cx = classNames.bind(styles);

const TextBlock = ({info = {date: '2019년 10월 1일', writer: 'Junimo', title: '맛있는 비건 식당', text: 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}}) => {
    return(
        <div className = {cx('TextBlock')}>
            <div className = {cx('user')}>
                <img className = {cx('userImg')} alt = 'userImg' src = 'junimo.png'></img>
                <span>{info.writer}</span>
                <img className = {cx('moreIcon')} alt = 'more-button' src = 'img/more.svg'></img>
            </div>
            <div className = {cx('date')}>
                <span>{info.date}</span>
            </div>
            <div className = {cx('title')}>
                <span>{info.title}</span>
            </div>
            <div className = {cx('text')}>
                <span>{info.text}</span>
            </div>
            <CommentBlock/>
        </div>
    )
}

export default TextBlock;