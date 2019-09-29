import React from 'react';
import styles from './FilterSection.scss';
import classNames from 'classnames/bind';
import SelectBox from 'components/common/SelectBox';
import GoToMenu from 'components/common/GoToMenu';

const cx = classNames.bind(styles);

const FilterSection = () => {
    return(
        <div className = {cx('FilterSection')}>
            <SelectBox
                style = 'width-sm blue'
                name = '정렬'
                selected = '최근 순' 
                optionList = {['최근 순', '오래된 순']}/>
            <GoToMenu style = 'block'/>
        </div>
    )
}

export default FilterSection;