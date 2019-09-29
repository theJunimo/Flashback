import React,{ useState, useCallback, useEffect, useRef } from 'react';
import styles from './DateSection.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import DatePicker from 'react-datepicker';

const cx = classNames.bind(styles);

const DateSection = () => {
    const today = new Date();

    const todayStr = () => {
        return `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`;
    }

    const [date, setDate] = useState(todayStr);
    const [showCalendar, setShowCalendar] = useState(false);
    const dateInput = useRef(null);

    useEffect(() => {
        dateInput.current.value = date;
    },[date]);

    const onToday = useCallback(() => {
        setDate((todayStr) => todayStr);
    },[]);

    const onShowCalendar = useCallback(() => {
        setShowCalendar((showCalendar) => !showCalendar);
    },[]);

    const onChange = useCallback((date) => {
        setShowCalendar(false);
        setDate(`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`); 
    },[]);

    return(
        <div className = {cx('DateSection')}>
            <div className = {cx('date-btn-wrapper')}>
                <input
                    name = { date } 
                    ref = { dateInput }
                    disabled/>
                <Button
                    type = 'date-btn mr-1'
                    onClick = { onShowCalendar }>CALENDAR</Button>
                <Button
                    type = 'date-btn'
                    onClick = { onToday }>TODAY</Button>
            </div>
            {showCalendar &&
            <div className = { cx('calendar-wrapper') }>
                <DatePicker
                    selected = { today }
                    onChange = { onChange }
                    inline />
            </div>}
        </div>
    )
}

export default React.memo(DateSection);