import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'store/modules/base';
import LoginForm from 'components/LoginForm';

const LoginFormContainer = () => {
    const { status } = useSelector((state) => state.base);
    const dispatch = useDispatch();
    const onLogin = (data) => dispatch(login(data));

    return(
       <LoginForm
            onLogin = { onLogin }
            status = { status }
       />
    )
}

export default LoginFormContainer;