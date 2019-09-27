import React from 'react';
import styles from './NewAlbum.scss';
import classNames from 'classnames/bind';
import MarkedTitle from 'components/common/MarkedTitle';
import TitleInput from 'components/common/TitleInput';
import InviteUser from 'components/common/InviteUser';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NewAlbum = () => {
    return(
        <div className = { cx('NewAlbum') }>
            <MarkedTitle type = 'blue'>New album</MarkedTitle>
            <form>
                <TitleInput/>
                <InviteUser/>
                <Button>CREATE</Button>
            </form>
        </div>
    )
}

export default React.memo(NewAlbum);