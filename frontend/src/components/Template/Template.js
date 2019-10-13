import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Footer from 'components/Footer';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

const Template = ({ children }) => {
  const modal = useSelector(({copy}) => { return copy.modal });
  return (
    <div className={cx('Template')}>
      {modal && <Modal />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
