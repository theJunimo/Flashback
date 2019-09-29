import React from 'react';
import styles from './PhotoList.scss';
import classNames from 'classnames/bind';
import Photo from './Photo';

const cx = classNames.bind(styles);

const PhotoList = ({onShowDetail, photoList = [ {src : 'https://images.unsplash.com/photo-1569597520153-e5cbab5ab736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
{src : 'https://images.unsplash.com/photo-1569591803741-6246fbc6934c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
{src : 'https://images.unsplash.com/photo-1569564019730-bb39ee9abacc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{src : 'https://images.unsplash.com/photo-1569498693751-243598a86e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
{src : 'https://images.unsplash.com/photo-1569564019730-bb39ee9abacc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{src : 'https://images.unsplash.com/photo-1569524872948-0ba4d096f997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{src : 'https://images.unsplash.com/photo-1569524872948-0ba4d096f997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
{src : 'https://images.unsplash.com/photo-1569363750132-b79584ecfeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
{src : 'https://images.unsplash.com/photo-1569556666948-cf63b49f52fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},]}) => {
    const list = photoList.map((el, idx) => (
        <Photo key = {idx} info = {el} onClick = { onShowDetail }/>
    ))
    return(
        <div className = {cx('PhotoList')}>
            {list}
        </div>
    )
}

export default PhotoList;