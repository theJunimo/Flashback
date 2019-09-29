import React from 'react';
import styles from './SearchResult.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const SearchResult = ({onClick, searchResult = [{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '이지아'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '최현아'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '주영빈'},
{userImg: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg', userName: '최지수'}]}) => {
    

    const list = searchResult.map((el, idx) => {
        return(
            <li key = { idx }
                onClick = { () => onClick(el) }>
                <div className = { cx('userImg') } style = {{'backgroundImage' : `url("${el.userImg}")`}}></div>
                <span className = { cx('userName') }>{el.userName}</span>
            </li>
        )
    })

    return(
        <ul className = { cx('SearchResult') }>
            {list}
        </ul>
    )
}

export default SearchResult;