import React, { useCallback } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import SearchBox from 'components/SearchBox';
import { useDispatch } from 'react-redux';
import { getAllEmoticons } from 'modules/base';
const cx = classNames.bind(styles);

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(getAllEmoticons());
  }, [dispatch]);

  return (
    <header className={cx('Header')}>
      <div className={cx('wrapper')} onClick={ handleClick }>
        <h1>I'mticon</h1>
      </div>
      <SearchBox />
    </header>
  );
};

export default React.memo(Header);
