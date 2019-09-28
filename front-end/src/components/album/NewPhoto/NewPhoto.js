import React from 'react';
import styles from './NewPhoto.scss';
import classNames from 'classnames/bind';
import DateSection from './section/DateSection'
import ImgSection from './section/ImgSection';
import TextSection from './section/TextSection';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NewPhoto = ({onClose}) => {
    return(
        <div className = {cx('NewPhoto')}>
            <div className = {cx('modal-block')}>
                <form>
                    <DateSection />
                    <ImgSection />
                    <TextSection />
                    <div className = {cx('btn-wrapper')}>
                        <Button type = 'mt-0 mr-1 fs-small'>UPLOAD</Button>
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