import React, { useState, useCallback } from 'react';
import styles from './SelectBox.scss';
import classNames from 'classnames/bind';
import Options from './Options';

const cx = classNames.bind(styles);

const SelectBox = ({ name, selected, onSelect, optionList, style}) => {
    const [visible, setVisible] = useState(false);

    const onOpen = useCallback(() => {
        setVisible((visible) => !visible);
    }, []);


    return(
        <div className = {cx('SelectBox')} onClick = { onOpen }>
            <div className = {cx('inner-wrapper ' + style)}>
                <div className = {cx('selected-wrapper')}>
                    <div className = {cx('selected')}>{selected? selected : name}</div>
                    <img alt = 'arrow' src = 'img/arrow-down.svg'/>
                </div>
                {visible && 
                    <Options 
                        selected = { selected } 
                        optionList = { optionList } 
                        onSelect = { onSelect } />}
            </div>
        </div>
    )
}

export default React.memo(SelectBox);