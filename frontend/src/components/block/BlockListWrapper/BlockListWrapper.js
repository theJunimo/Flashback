import React, { useEffect } from 'react';
import styles from './BlockListWrapper.scss';
import LoadingBar from 'components/LoadingBar';
import classNames from 'classnames/bind';
import Block from 'components/block/Block';
import NoSearchResult from 'components/NoSearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmoticons } from 'modules/base';
const cx = classNames.bind(styles);

const BlockListWrapper = () => {
  const list = useSelector(({ base }) => {
    return base.list;
  });
  const loading = useSelector(({ loading }) => {
    if (loading.GET_EMOTICONS_ASYNC) return loading.GET_EMOTICONS_ASYNC;
    if (loading.GET_EMOTICONS_BY_TAG_ASYNC)
      return loading.GET_EMOTICONS_BY_TAG_ASYNC;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmoticons());
  }, [dispatch]);

  const blocks = list.map((el, idx) => (<Block key={idx} data={el} best = {idx <= 2? true : false}/>))

  return (
    <ul className={cx('BlockListWrapper')}>
      {loading ? (
        <LoadingBar />
      ) : list.length === 0 ? (
        <NoSearchResult />
      ) : (
        blocks
      )}
    </ul>
  );
};

export default BlockListWrapper;
