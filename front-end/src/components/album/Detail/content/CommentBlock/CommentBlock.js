import React from 'react';
import styles from './CommentBlock.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const CommentBlock = ({commentlist = [{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '이지아', text: 'ㅋㅋㅋㅋㅋㅋ맛있겠다'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '이지아', text: 'ㅋㅋㅋㅋㅋㅋ맛있겠다나도 먹고시퍼!@!@!@!@호롤롤로로로롤로'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: 'aimolege', text: 'looks soooooo yammy! I should definately try it lol :)'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '이지아', text: 'ㅋㅋㅋㅋㅋㅋ맛있겠다'},]}) => {
    return(
        <div className = {cx('CommentBlock')}>
            <div className = {cx('commentlist')}>
                <ul>
                {commentlist &&
                    commentlist.map((el, idx) => (
                        <li key = {idx}>
                            <div className = {cx('comment-userImg')} style = {{'backgroundImage' : `url("${el.userImg}")`}}></div>
                            <div className = {cx('comment-userName')}><span className = {cx('inner-text')}>{el.userName}</span></div>
                            <span className = {cx('comment-text')}>{el.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className = {cx('commentInput')}>
                <input
                    type = 'text'
                    placeholder = '댓글 달기...'>
                </input>
                <div className = {cx('postBtn')}>
                    게시
                </div>
            </div>
        </div>
    )
}

export default CommentBlock;