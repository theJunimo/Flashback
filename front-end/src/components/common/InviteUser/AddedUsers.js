import React from 'react';
import styles from './AddedUsers.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AddedUsers = ({addedUsers, onClick}) => {
    const list = addedUsers.map((el, idx) => {
        return (
            <li key = { idx }>
                <div className = { cx('userImg') } style = {{'backgroundImage' : `url("${el.userImg}")`}}></div>
                <span className = { cx('userName') }>{el.userName}</span>
                <div 
                    className = { cx('remove-icon') }
                    onClick = { () => onClick(idx) }>
                    <img alt = 'remove' src = '/img/remove.svg'/>
                </div>
            </li>
        )
    })
    return(
        <div className = {cx('AddedUser')}>
            <ul>
                {list.length > 0 && list}
            </ul>
        </div>
    )
}

export default AddedUsers;