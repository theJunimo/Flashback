import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import CopyModal from 'components/CopyModal';
import Footer from 'components/Footer';
import AddButton from 'components/AddButton';
import AddEmtiModal from 'components/AddEmtiModal';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

const Template = ({ children }) => {
  const addModalVisible = useSelector(({ base }) => {
    return base.addModalVisible;
  });
  const copyModalVisible = useSelector(({ copy }) => copy.copyModalVisible);

  return (
    <div className={cx('Template')}>
      {addModalVisible && <AddEmtiModal />}
      {copyModalVisible && <CopyModal />}
      <Header />
      <main>{children}</main>
      <Footer />
      <AddButton />
    </div>
  );
};

export default Template;
