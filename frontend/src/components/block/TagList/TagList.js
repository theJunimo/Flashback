import React, { useCallback } from 'react';
import styles from './TagList.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { getEmoticonsByTag } from 'modules/base';
import colorPick from 'lib/colorPick';

const cx = classNames.bind(styles);

const TagList = ({ tagList }) => {
  const dispatch = useDispatch();
  
  const onSearch = useCallback((tagName) => {
    window.evnet.stopPropagation();
    dispatch(getEmoticonsByTag(tagName));
  }, [dispatch]);

  const colors = tagList.reduce(acc => {
    while (true) {
      const color = colorPick();
      if (acc.indexOf(color) === -1) {
        acc.push(color);
        break;
      }
    }
    return acc;
  }, []);

  const list = tagList.map((tagName, idx) => {
    const style = {
      backgroundColor: colors[idx]
    };
    return (
      <li
        key={idx}
        style={style}
        onClick={() => {
          onSearch(tagName)
        }}
      >
        #{tagName}
      </li>
    );
  });

  return (
    <section className={cx('TagList')}>
      <ul>{list}</ul>
    </section>
  );
};

export default TagList;
