import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './SearchBox.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { getEmoticonsByTag } from 'modules/base';

const cx = classNames.bind(styles);

const SearchBox = () => {
  const searchBoxEl = useRef(null);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const onSearch = useCallback(
    () => {
      if(keyword){
        dispatch(getEmoticonsByTag(keyword));
        searchBoxEl.current.value = '';
        setKeyword('');
      }
    },
    [dispatch, keyword]
  );

  useEffect(() => {
    const handleUserKeyPress = e => {
      const { keyCode } = e;

      if (keyCode === 13 && keyword) {
        onSearch();
      }
    };
    const copiedEl = searchBoxEl.current;
    copiedEl.addEventListener('keydown', handleUserKeyPress);

    return () => {
      copiedEl.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [onSearch, keyword]);

  return (
    <div className={cx('SearchBox')}>
      <input
        type="text"
        ref={searchBoxEl}
        onChange={() => setKeyword(searchBoxEl.current.value)}
      />
      <div className={cx('search-btn')}>
        <div className={cx('search-icon')} onClick={ onSearch }>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchBox);
