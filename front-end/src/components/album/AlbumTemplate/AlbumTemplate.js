import React, {useState, useCallback} from 'react';
import styles from './AlbumTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/album/Header';
import FilterSection from 'components/album/FilterSection';
import PhotoList from 'components/album/PhotoList';
import NewPhoto from 'components/album/NewPhoto';

const cx = classNames.bind(styles);

const AlbumTemplate = () => {
    const [showNewPhoto, setShowNewPhoto] = useState(false);
    
    const onShowNewPhoto = useCallback(() => {
        setShowNewPhoto((showNewPhoto) => !showNewPhoto);
    },[]);

    return(
        <div className = {cx('AlbumTemplate')}>
            { showNewPhoto && <NewPhoto onClose = { onShowNewPhoto }/> }
            <div className = {cx('content-wrapper')}> 
                <Header onShowNewPhoto = { onShowNewPhoto }/>
                <main>
                    <FilterSection />
                    <PhotoList/>
                </main>
            </div>
        </div>
    )
}

export default AlbumTemplate;