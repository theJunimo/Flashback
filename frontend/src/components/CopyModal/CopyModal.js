import React, { useEffect, useCallback } from 'react';
import styles from './CopyModal.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { closeCopyModal } from 'modules/copy';

const cx = classNames.bind(styles);

const CopyModal = () => {
  const dispatch = useDispatch();
  const msg = useSelector(({copy}) => copy.msg);

  useEffect(() => {
    const closeModal = () => dispatch(closeCopyModal());
    setTimeout(closeModal, 2000);
  }, [dispatch]);

  return (
    <div className={cx('CopyModal movedown')}>
      { msg }
    </div>
  );
};

export default CopyModal;
