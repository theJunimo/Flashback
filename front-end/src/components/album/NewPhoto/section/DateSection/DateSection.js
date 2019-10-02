import React,{ useState, useCallback, useEffect, useRef } from 'react';
import styles from './DateSection.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import Calendar from 'react-calendar';

const cx = classNames.bind(styles);

const DateSection = () => {
    const today = new Date();

    const todayStr = () => {
        return `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    }

    const [selected, setSelected] = useState('today');
    const [date, setDate] = useState(todayStr);
    const [showCalendar, setShowCalendar] = useState(false);

    const onToday = useCallback(() => {
        setShowCalendar(false);
        setSelected('today');
        setDate(todayStr);
    },[todayStr]);

    const onShowCalendar = useCallback(() => {
        setShowCalendar((showCalendar) => !showCalendar);
        setSelected('calendar');
    },[]);

    const onChange = useCallback((date) => {
        setShowCalendar(false);
        setDate(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`); 
    },[]);

    return(
        <div className = {cx('DateSection')}>
            <div className = {cx('date-btn-wrapper')}>
                <span> { date } </span>
                <Button
                    type = { 'date-btn mr-1 ' + (selected === 'calendar'? 'selected' : '') }
                    onClick = { onShowCalendar }>CALENDAR</Button>
                <Button
                    type = { 'date-btn ' + (selected === 'today'? 'selected' : '') }
                    onClick = { onToday }>TODAY</Button>
            </div>
            {showCalendar &&
            <div className = { cx('calendar-wrapper') }>
                <Calendar
                    selected = { today }
                    onChange = { onChange } />
            </div>}
        </div>
    )
}

export default React.memo(DateSection);