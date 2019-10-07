import React from 'react';
import styles from './BlockListWrapper.scss';
import classNames from 'classnames/bind';
import Block from 'components/block/Block';

const cx = classNames.bind(styles);

const BlockListWrapper = ({data}) => {
    const list = data.map((el, idx) => (
        <Block 
            key = { idx }
            data = { el }/>
    ))
    return(
        <div className = {cx('BlockListWrapper')}>
            { list }
        </div>
    )
}

export default BlockListWrapper;