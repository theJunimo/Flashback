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
  const dispatch = useDispatch();
  const status = useSelector(({ base }) => base.status);
  const list = useSelector(({ base }) => {
    return base.list;
  });
  const loading = useSelector(({ loading }) => {
    if (loading.GET_EMOTICONS_ASYNC || loading.POST_NEW_EMOTICON_ASYNC)
      return true;
    if (loading.GET_EMOTICONS_BY_TAG_ASYNC) return true;
  });

  useEffect(() => {
    dispatch(getAllEmoticons());
  }, [dispatch]);

  const blocks = list.map((el, idx) => (
    <Block
      key={idx}
      data={el}
      notice={
        status === 'main' && idx <= 2
          ? '❤︎BEST❤︎'
          : status === 'new'
          ? '등록완료!'
          : status === 'already exist'
          ? '이미 있어요!'
          : false
      }
    />
  ));

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

export default React.memo(BlockListWrapper);
