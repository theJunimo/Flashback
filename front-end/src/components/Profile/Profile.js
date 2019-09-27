import React, { useEffect, useRef, useCallback } from 'react';
import styles from './Profile.scss';
import classNames from 'classnames/bind';
import MarkedTitle from 'components/common/MarkedTitle';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Profile = ({userName = 'Junimo'}) => {
    const userNameInput = useRef(null);
    const userImgInput = useRef(null);

    useEffect(() => {
        userNameInput.current.value = userName;
    }, [userName])

    const onClick = useCallback(() => {
        userImgInput.current.click();
    }, [])

    const onChange = useCallback(() => {
        console.log(userImgInput.current.files);
    },[])

    return(
        <div className = {cx('Profile')}>
            <MarkedTitle type = 'pink'>Profile</MarkedTitle>
            <form>
                <div 
                    className = {cx('userImg')} 
                    style = {{'backgroundImage': 'url("junimo.png")'}}
                    onClick = { onClick }></div>
                <input 
                    type = 'file'
                    id = 'userImgInput'
                    accept=".png, .jpg, .jpeg"
                    ref = { userImgInput }
                    onChange = { onChange } />
                <div className = {cx('input-wrapper')}>
                    <input
                        ref = { userNameInput }
                        autoFocus
                        name = 'userName'
                        />
                </div>
                <Button>CONFIRM</Button>
            </form>
        </div>
    )
}

export default React.memo(Profile);