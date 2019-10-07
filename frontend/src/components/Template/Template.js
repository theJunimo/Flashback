import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Footer from 'components/Footer';
const cx = classNames.bind(styles);

const Template = ({children}) => {
    return(
        <div className = {cx('Template')}>
            <Modal/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Template;