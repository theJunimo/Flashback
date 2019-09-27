import React, { useReducer } from 'react';
import styles from './InviteUser.scss';
import classNames from 'classnames/bind';
import SearchResult from './SearchResult';
import AddedUsers from './AddedUsers'

const cx = classNames.bind(styles);

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_USER':
            return {
                showResult: false,
                addedUsers: [...state.addedUsers, action.data]
            };
        case 'REMOVE_USER':
            const targetIdx = action.data; //삭제할 요소 idx
            return {
                ...state,
                addedUsers: state.addedUsers.filter((el, idx) => idx !== targetIdx)
            };
        case 'SHOW_RESULT':
            return {
                ...state,
                showResult: true
            };
        default: 
            return state;
    }
}

const InviteUser = () => {
    const [state, dispatch] = useReducer(
        reducer,
        { 
            addedUsers: [],
            showResult: false
        }
    )

    return(
        <div className = { cx('InviteUser') }>
            <div className = { cx('userSearch') }>
                <div className = { cx('input-wrapper') }>
                    <span>
                        INVITE
                    </span>
                    <input
                        id = "invited"
                        name = 'invited'
                        type = 'text'
                        placeholder = '초대할 사람을 검색해보세요!'
                        autoComplete = 'off'
                        onKeyUp = { () => dispatch({ type: 'SHOW_RESULT' }) }/>
                </div>
                { state.showResult && 
                    <SearchResult onClick = { (user) => dispatch({ type: 'ADD_USER', data: user }) }/>}
            </div>
            <AddedUsers 
                addedUsers = { state.addedUsers }
                onClick = { (idx) => dispatch({ type: 'REMOVE_USER', data: idx }) }/>
        </div>
    )
}

export default React.memo(InviteUser);