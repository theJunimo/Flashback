import React from 'react';
import styles from './LoadingBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoadingBar = () => {
  return (
    <div className={cx('LoadingBar')}>
      <div className={cx('inner-div')}>
        <div className={cx('lds-facebook')}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>잠시만 기다려주세요! ヾ(´∀｀)ﾉﾞ</p>
      </div>
    </div>
  );
};

export default LoadingBar;
