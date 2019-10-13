import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('Footer')}>
      <div className={cx('inner')}>
        <div className={cx('contact')}>
          <a href="mailto:hyein.ju92@gmail.com">
            <div className={cx('inner')}>
              <img alt="email-icon" id="email" src="img/email.svg" />
            </div>
          </a>
          <a href="https://github.com/theJunimo" target="blank">
            <div className={cx('inner')}>
              <img alt="github-icon" id="github" src="img/github-logo.svg" />
            </div>
          </a>
          <a href="https://sustainable-dev.tistory.com/" target="blank">
            <div className={cx('inner')}>
              <img alt="tistory-icon" id="tistory" src="img/tistory-logo.svg" />
            </div>
          </a>
        </div>
        <p>made by Hyein Ju</p>
      </div>
    </footer>
  );
};

export default Footer;
