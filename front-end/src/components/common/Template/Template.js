import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';
import GoToMenu from 'components/common/GoToMenu';

const cx = classNames.bind(styles);

const Template = ({type, children}) => {
    return(
        <div className = {cx('Template')}>
            <div className = {cx('block')}>
                {type === 'backBtn' && <GoToMenu/>}
                {children}
            </div>
        </div>
    )
}

export default React.memo(Template);