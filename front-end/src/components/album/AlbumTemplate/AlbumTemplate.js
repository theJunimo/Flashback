import React, {useState, useCallback} from 'react';
import styles from './AlbumTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/album/Header';
import FilterSection from 'components/album/FilterSection';
import PhotoList from 'components/album/PhotoList';
import NewPhoto from 'components/album/NewPhoto';
import BackToTop from 'components/album/BackToTop';
import Detail from 'components/album/Detail';

const cx = classNames.bind(styles);

const AlbumTemplate = () => {
    const [showNewPhoto, setShowNewPhoto] = useState(false);
    const [showDetail, setShowDetail] = useState(true); 
    
    const onShowNewPhoto = useCallback(() => {
        setShowNewPhoto((showNewPhoto) => !showNewPhoto);
    },[]);

    const onShowDetail = useCallback(() => {
        setShowDetail((showDetail) => !showDetail);
    }, []);

    return(
        <div className = {cx('AlbumTemplate')}>
            { showDetail && <Detail onClose = { onShowDetail }/>}
            { showNewPhoto && <NewPhoto onClose = { onShowNewPhoto }/> }
            <div className = {cx('content-wrapper')}> 
                <Header onShowNewPhoto = { onShowNewPhoto }/>
                <main>
                    <FilterSection />
                    <PhotoList onShowDetail = { onShowDetail }/>
                </main>
            </div>
            <BackToTop/>
        </div>
    )
}

export default AlbumTemplate;