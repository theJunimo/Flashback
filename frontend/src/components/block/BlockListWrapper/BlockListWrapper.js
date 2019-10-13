import React, { useState, useEffect } from 'react';
import styles from './BlockListWrapper.scss';
import LoadingBar from 'components/LoadingBar';
import classNames from 'classnames/bind';
import Block from 'components/block/Block';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmoticons } from 'modules/base';
const cx = classNames.bind(styles);

const BlockListWrapper = () => {
  const list = useSelector(({base}) => { return base.list });
  const loading = useSelector(({loading}) => { return loading.GET_EMOTICONS_ASYNC})
  const [emtiList, setEmtiList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmoticons());
  }, [dispatch]);

  const blocks = list.map((el, idx) => <Block key={idx} data={el} />);
  return <div className={cx('BlockListWrapper')}>{loading? <LoadingBar /> : blocks}</div>;
};

export default BlockListWrapper;
