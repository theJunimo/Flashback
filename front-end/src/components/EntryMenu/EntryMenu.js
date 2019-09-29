import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EntryMenu.scss';
import classNames from 'classnames/bind';
import LinkButton from 'components/common/LinkButton';
const cx = classNames.bind(styles);


const AlbumList = ({albumList = ['👸🏻노답네자매👸🏻', '👨‍👩‍👧‍👦HomeSweetHome', '빛나혜인']}) => {
    const list = albumList.map((el, idx) => <li key = {idx}>{el} →</li>)
    return (
        <ul>
            <Link to = '/album'>
                {list}
            </Link>
        </ul>
    )
}

const EntryMenu = () => {
    return(
        <div className = {cx('EntryMenu')}>
            <div className = {cx('profile')}>
                <div className = {cx('userImg')} style = {{'backgroundImage': 'url("junimo.png")'}}></div>
                <span>주혜인</span>
            </div>
            <AlbumList/>
            <div className = {cx('other')}>
                <LinkButton to = '/new-album' emoji = '✨'>New album</LinkButton>
                <LinkButton to = '/profile' emoji = '👀'>Profile</LinkButton>
                <LinkButton to = '/settings' emoji = '🛠'>Settings</LinkButton>
                <LinkButton to = '/' emoji = '👋'>Logout</LinkButton>
            </div>
        </div>
    )
}

export default React.memo(EntryMenu);