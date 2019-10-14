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
  const showAddModal = useSelector(({ base }) => {
    return base.showAddModal;
  });

  return (
    <div className={cx('Template')}>
      {showAddModal && <AddEmtiModal/>}
      <CopyModal />
      <Header />
      <main>{children}</main>
      <Footer />
      <AddButton />
    </div>
  );
};

export default Template;
