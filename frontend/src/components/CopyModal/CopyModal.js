import React, { useEffect, useCallback } from 'react';
import styles from './CopyModal.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { closeCopyModal } from 'modules/copy';

const cx = classNames.bind(styles);

const CopyModal = () => {
  const dispatch = useDispatch();
  const msg = useSelector(({copy}) => copy.msg);

  const onClose = useCallback(() => {
    dispatch(closeCopyModal());
  }, [dispatch]); 

  useEffect(() => {

  }, []);

  return (
    <div className={cx('CopyModal movedown')}>
      { msg }
      <div className={cx('close')} onClick={() => onClose()} />
    </div>
  );
};

export default CopyModal;
