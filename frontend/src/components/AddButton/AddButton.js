import React, { useCallback } from 'react';
import styles from './AddButton.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { showAddModal } from 'modules/base';
const cx = classNames.bind(styles);

const AddButton = () => {
  const dispatch = useDispatch();
  const handleShowAddModal = useCallback(() => {
    dispatch(showAddModal());
  }, [dispatch]);
  return (
    <div className={cx('AddButton')} onClick={handleShowAddModal}>
      <img src="img/add.svg" alt="plus-button" />
    </div>
  );
};

export default AddButton;
