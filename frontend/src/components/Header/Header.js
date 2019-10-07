import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import SearchBox from 'components/SearchBox';

const cx = classNames.bind(styles);

const Header = () => {
    return(
        <header className = {cx('Header')}>
            <h1>
                I'mticon
            </h1>
            <SearchBox/>
        </header>
    )
}

export default Header;