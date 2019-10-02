import { createAction, handleActions } from 'redux-actions';
import { loginAPI } from 'lib/api/api';

const INITIALIZE = 'base/INITIALIZE';
const LOGIN = 'base/LOGIN';
const LOGIN_SUCCESS = 'base/LOGIN_SUCCESS';
const LOGIN_ERROR = 'base/LOGIN_ERROR';

const initialState = {
    status: 'login_success',
};

export const login = (data) => ({
    type: LOGIN,
    payload: loginAPI(data)
})

const base = handleActions({
    [INITIALIZE] : (state, action) => ({
        ...initialState
    }),
    [LOGIN_SUCCESS]: (state, action) => {
        console.log('로그인 성공');
        return {
        status: 'login_success',
    }},
    [LOGIN_ERROR]: (state, action) => {
        console.log ('로그인 에러');
        return {
        status: 'login_error',
        }
    }
}, initialState);

export default base;



