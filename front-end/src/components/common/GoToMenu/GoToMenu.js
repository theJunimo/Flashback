import React from 'react';
import styles from './GoToMenu.scss';
import classNames from 'classnames/bind';
import Emoji from 'components/common/Emoji';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const GoToMenu = ({style}) => {
    return(
        <div className = {cx('GoToMenu ' + style)}>
            <Link to = '/entry'>
                <div className = {cx('img-wrapper')}>
                    <Emoji emoji = '🔙'/>BACK
                </div>
            </Link>
        </div>
    )
}

export default React.memo(GoToMenu);