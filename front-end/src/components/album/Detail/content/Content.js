import React from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import TextBlock from './TextBlock/TextBlock';

const cx = classNames.bind(styles);

const Content = () => {
    return(
        <div className = {cx('Content')}>
            <div className = {cx('photo-block')}>
                <img alt = 'photo' src = 'https://images.unsplash.com/photo-1569603223965-535d43b9943b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
            </div>
            <TextBlock />
        </div>
    )
}

export default Content;