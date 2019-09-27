import React from 'react';
import styles from './SettingsForm.scss';
import classNames from 'classnames/bind';
import TitleInput from 'components/common/TitleInput';
import InviteUser from 'components/common/InviteUser';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const SettingsForm = ({selected, onOpen}) => {
    return(
        <div className = {cx('SettingsForm')}>
            <form>
                <TitleInput selected = { selected }/>
                <InviteUser/>
                <div className = { cx('form-buttons') }>
                    <Button 
                        type = 'mr-1'>CONFIRM</Button>
                    <Button 
                        type = 'purple-white'
                        onClick = { onOpen }>DELETE</Button>
                </div>
            </form>
        </div>
    )
}

export default SettingsForm;