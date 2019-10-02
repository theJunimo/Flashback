import React, { useState, useRef, useCallback } from 'react';
import styles from './NewPhoto.scss';
import classNames from 'classnames/bind';
import DateSection from './section/DateSection'
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NewPhoto = ({onClose}) => {
    const [valid, setValid] = useState('');
    const addPhoto = useRef(null);
    const photoInput = useRef(null);
    const titleInput = useRef(null);
    const contentInput = useRef(null);

    const onChange = useCallback(() => {
        const file = photoInput.current.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                addPhoto.current.style.backgroundImage = `url(${reader.result})`;
            }
        }
    },[])

    const onClick = useCallback(() => {
        photoInput.current.click();
    }, [])

    const onSubmit = () => {
        if(!titleInput.current.value) return setValid('제목은 필수로 입력해주세요!');
        if(!photoInput.current.files[0]) return setValid('사진을 추가해주세요!');
    };

    return(
        <div className = {cx('NewPhoto')}>
            <div className = {cx('modal-block')}>
                <form>
                    <DateSection />
                    <div 
                        id = 'addPhoto'
                        ref = { addPhoto }
                        onClick = { onClick } 
                    />
                    <input 
                        type = 'file'
                        id = 'photoInput'
                        accept=".png, .jpg, .jpeg"
                        ref = { photoInput }
                        onChange = { onChange } />
                    <div className = {cx('textSection')}>
                        <input
                            type = 'text'
                            name = 'photoTitle'
                            ref = { titleInput }
                            autoComplete = 'off'
                            autoFocus
                            placeholder = '사진 제목'/>
                        <span className = {cx('validMsg')}>{valid}</span>
                    </div>
                    <div className = {cx('btn-wrapper')}>
                        <Button 
                            type = 'mt-0 mr-1 fs-small'
                            onClick = { onSubmit }>UPLOAD</Button>
                        <Button 
                            type = 'mt-0 purple-white fs-small'
                            onClick = { onClose }>CANCEL</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPhoto;