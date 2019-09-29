import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.scss';
import classNames from 'classnames/bind';
import Emoji from 'components/common/Emoji';

const cx = classNames.bind(styles);

const LinkButton = ({ emoji, to, children }) => {
    return(
        <div className = { cx('LinkButton') }>
            <Link to = { to }>
                <span>
                    { emoji && <Emoji emoji = { emoji }/> }
                    { children }
                </span>
            </Link>
        </div>
    )
}

export default React.memo(LinkButton);