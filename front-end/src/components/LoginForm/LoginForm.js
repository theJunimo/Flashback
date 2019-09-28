import React from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const LoginForm = () => {

    return(
        <div className = { cx('LoginForm') }>
            <h1>FLASH<br/>BACK</h1>

            <form>
                <div className = { cx('form-group')}>
                    <label htmlFor = 'userId'>ID</label>
                    <div className = { cx('input-wrapper')}>
                        <input
                            id = "userId"
                            name = 'userId'
                            type = 'text'/>
                    </div>
                </div>
                <div className = { cx('form-group mt-1')}>
                    <label htmlFor = 'password'>Password</label>
                    <div className = { cx('input-wrapper')}>
                        <input
                            autoComplete= 'password'
                            id = 'password'
                            name = 'password'
                            type = 'password'  />
                    </div>
                </div>
                <Link to = '/entry'>
                <Button>Login</Button>
                </Link>
            </form>
        </div>
    )
}

export default React.memo(LoginForm);