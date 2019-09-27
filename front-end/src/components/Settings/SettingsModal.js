import React from 'react';
import styles from './SettingsModal.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const SettingsModal = ({onClose}) => {
    return(
        <div className = {cx('SettingsModal')}>
            <div className = {cx('modal-block')}>
                <span>
                    앨범 공유자가 <strong>한명도 없는 경우에만</strong> 삭제가 가능합니다.<br/>
                    정말로 삭제하시겠습니까?
                </span>
                <div className = {cx('button-wrapper')}>
                    <Button 
                        type = {'mr-1 mt-0 fs-small'}>네, 삭제할게요</Button>
                    <Button 
                        type = {'purple-white mt-0 fs-small'}
                        onClick = { onClose }>아니요, 취소할게요</Button>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;