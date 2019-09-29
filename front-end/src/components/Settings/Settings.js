import React, { useReducer } from 'react';
import styles from './Settings.scss';
import classNames from 'classnames/bind';
import MarkedTitle from 'components/common/MarkedTitle';
import SelectBox from 'components/common/SelectBox';
import DeleteModal from 'components/common/DeleteModal';
import SettingsForm from './SettingsForm';

const cx = classNames.bind(styles);

function reducer(state, action) {
    switch(action.type) {
        case 'SELECT_ALBUM': 
            return {
                ...state,
                selectedAlbum: action.data,
            };
        case 'OPEN_MODAL':
            console.log('모달열기');
            return {
                ...state,
                modalVisibility: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalVisibility: false
            };
        default :
            return state;
    }
}

const Settings = ({albumList = ['👸🏻노답네자매👸🏻', '👨‍👩‍👧‍👦HomeSweetHome', '빛나혜인']}) => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            selectedAlbum: '',
            modalVisibility: false
        }
    )
    const { selectedAlbum, modalVisibility } = state;

    return(
        <div className = {cx('Settings')}>
            {modalVisibility &&
                <DeleteModal
                    onClose = { () => dispatch({ type: 'CLOSE_MODAL' }) } />}
            <MarkedTitle>Settings</MarkedTitle>
            <SelectBox  
                name = '앨범 선택하기'
                selected = { selectedAlbum } 
                onOpen = { () => dispatch({ type: 'OPEN_OPTIONS' }) }
                onSelect = { (album) => dispatch({ type: 'SELECT_ALBUM', data: album }) }
                optionList = { albumList }
                        />
            {selectedAlbum && 
                <SettingsForm
                    selected = { selectedAlbum }
                    onOpen = { () => dispatch({ type: 'OPEN_MODAL' }) } />}
        </div>
    )
}

export default React.memo(Settings);