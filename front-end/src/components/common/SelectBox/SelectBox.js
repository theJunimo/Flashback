import React from 'react';
import styles from './SelectBox.scss';
import classNames from 'classnames/bind';
import Options from './Options';

const cx = classNames.bind(styles);

const SelectBox = ({ selected, visible, onOpen, onSelect, albumList }) => {
    return(
        <div className = {cx('SelectBox')} onClick = { onOpen }>
            <div className = {cx('inner-wrapper')}>
                <div className = {cx('selected-wrapper')}>
                    <div className = {cx('selected')}>{selected? selected : '앨범 선택하기'}</div>
                    <img alt = 'arrow' src = 'img/arrow-down.svg'/>
                </div>
                {visible && 
                    <Options 
                        selected = { selected } 
                        albumList = { albumList } 
                        onSelect = { onSelect } />}
            </div>
        </div>
    )
}

export default React.memo(SelectBox);