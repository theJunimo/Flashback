import React, { useState, useCallback, useRef, useEffect } from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const LoginForm = ({history, status, onLogin}) => {
    const [valid, setValid] = useState('');
    const idInput = useRef(null);
    const pwInput = useRef(null);

    const onSubmit = useCallback(() => {
        if(!idInput.current.value || !pwInput.current.value) {
            setValid('빈칸이 존재합니다!');
        } else {
            const data = {
                id: idInput.current.value,
                password: pwInput.current.value
            }
            onLogin(data);
        }
    },[onLogin]);

    useEffect(() => {
        const onKeyDown = (e) => {
            const { keyCode } = e;

            if(keyCode === 13) {
                onSubmit();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [onSubmit]);

    useEffect(() => {
        if(!status) return;
        if(status === 'login_error') return setValid('없는 아이디거나 틀린 비밀번호입니다.');
        if(status === 'login_success') return history.push('/album');
    }, [status, history]);

    return(
        <div className = { cx('LoginForm') }>
            <h1>FLASH<br/>BACK</h1>
            <form>
                <div className = { cx('form-group')}>
                    <label htmlFor = 'userId'>ID</label>
                    <div className = { cx('input-wrapper')}>
                        <input
                            id = 'userId'
                            ref = { idInput }
                            name = 'userId'
                            type = 'text'
                            autoComplete = 'username'/>
                    </div>
                </div>
                <div className = { cx('form-group mt-1')}>
                    <label htmlFor = 'password'>Password</label>
                    <div className = { cx('input-wrapper')}>
                        <input
                            id = 'password'
                            ref = { pwInput }
                            name = 'password'
                            type = 'password'
                            autoComplete = 'current-password'  />
                    </div>
                </div>
                <span className = {cx('validMsg')}>{ valid }</span>
                <Button 
                    type = 'mt-1'
                    onClick = { onSubmit }>Login</Button>
            </form>
        </div>
    )
}

export default withRouter(LoginForm);