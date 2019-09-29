import React,{ useState, useReducer } from 'react';
import styles from './TextBlock.scss';
import classNames from 'classnames/bind';
import CommentBlock from 'components/album/Detail/content/CommentBlock';
import DeleteModal from 'components/common/DeleteModal';

const cx = classNames.bind(styles);

function reducer(state, action) {
    switch(action.type){
        case 'SHOW_MORE': 
            return {
                ...state,
                showMore: !state.showMore
            };
        case 'SHOW_DELETE_MODAL':
            return {
                ...state,
                showDelete: true
            };
        case 'CLOSE_DELETE_MODAL':
            return {
                ...state,
                showDelete: false
            }
    }
}
const TextBlock = ({info = {date: '2019년 10월 1일', writer: 'Junimo', title: '맛있는 비건 식당', text: 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}}) => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            showMore: false,
            showDelete: false,
        }
    );

    const MoreMenu = () => (
        <div className = {cx('bubble-wrapper')}>
                <div className = {cx('bubble')} onClick = { () => dispatch({type: 'SHOW_DELETE_MODAL'})}>
                    <span>DELETE</span>
                </div>
        </div>
    )

    return(
        <div className = {cx('TextBlock')}>
            {state.showDelete &&
            <DeleteModal 
                type = 'short'
                msg = '정말로 삭제하시겠습니까?'
                onClose = { () => dispatch({type: 'CLOSE_DELETE_MODAL'})} />
            }
            <div className = {cx('user')}>
                <img className = {cx('userImg')} alt = 'userImg' src = 'junimo.png'></img>
                <span className = {cx('writerName')}>{info.writer}</span>
                <div className = {cx('moreBtn-wrapper')}>
                    <div className = {cx('inner')}>
                        <div className = {cx('img-div')} onClick = { () => dispatch({type: 'SHOW_MORE'}) }>
                            <img alt = 'more-button' src = 'img/more.svg'></img>
                        </div>
                    {state.showMore && <MoreMenu/>}
                    </div>
                </div>
            </div>
            <div className = {cx('date')}>
                <span>{info.date}</span>
            </div>
            <div className = {cx('title')}>
                <span>{info.title}</span>
            </div>
            <div className = {cx('text')}>
                <span>{info.text}</span>
            </div>
            <CommentBlock/>
        </div>
    )
}

export default TextBlock;