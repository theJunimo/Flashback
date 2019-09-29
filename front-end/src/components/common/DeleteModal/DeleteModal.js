import React from 'react';
import styles from './DeleteModal.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const DeleteModal = ({type, msg, onDelete, onClose}) => {
    return(
        <div className = {cx('DeleteModal')}>
            <div className = {cx('delete-modal-block ' + type)}>
                {msg? 
                    <span> {msg} </span>: 
                    <span>앨범 공유자가 한명도 없는 경우에만 삭제할 수 있습니다.<br/> 정말로 삭제하시겠습니까?</span>}
                <div className = {cx('button-wrapper')}>
                    <Button 
                        type = {'mr-1 mt-0 fs-small'}>
                            {type === 'short'? '네' : '네, 삭제할게요'}</Button>
                    <Button 
                        type = {'purple-white mt-0 fs-small'}
                        onClick = { onClose }>
                            {type === 'short'? '아니요' : '아니요, 취소할게요'}</Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;