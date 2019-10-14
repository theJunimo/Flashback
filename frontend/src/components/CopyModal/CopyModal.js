import React, { useCallback } from 'react';
import styles from './CopyModal.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'modules/copy';

const cx = classNames.bind(styles);

const CopyModal = () => {
  const dispatch = useDispatch();
  const msg = useSelector(({copy}) => { return copy.msg });
  const modal = useSelector(({copy}) => { return copy.modal });
  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <div className={cx('CopyModal ' + (modal? 'movedown' : 'hidden'))}>
      { msg }
      <div className={cx('close')} onClick={() => onClose()} />
    </div>
  );
};

export default CopyModal;
