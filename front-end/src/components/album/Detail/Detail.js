import React from 'react';
import styles from './Detail.scss';
import classNames from 'classnames/bind';
import ContentWrapper from './ContentWrapper';
import Content from './content/Content';

const cx = classNames.bind(styles);

const Detail = ({onClose}) => {
    return(
        <div className = {cx('Detail')}>
            <div className = {cx('closeBtn')}>
                <img 
                    alt='closebutton' 
                    src = 'img/close-button.svg'
                    onClick = { onClose }></img>
            </div>
            <div className = {cx('modal-block')}>
                <ContentWrapper>
                    <Content/>
                </ContentWrapper>
            </div>
        </div>
    )
}

export default Detail;