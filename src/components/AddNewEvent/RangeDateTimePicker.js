import React from 'react';
import DateTimePickerHelper from './DateTimePickerHelper';
import { DateTimePicker } from './DateTimePicker';


export const RangeDateTimePicker = ({ startDate, endDate, onChange, as }) => {
    const { startMinTime, startMaxTime, endMinTime, endMaxTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);

    return (
        <>
            <DateTimePicker value={startDate}
                minDate={new Date()}
                maxDate={endDate}
                minTime={startMinTime}
                maxTime={startMaxTime}
                propName='StartDate'
                onChange={onChange}
                as={as}>
            </DateTimePicker>
            <DateTimePicker
                value={endDate}
                minDate={startDate}
                minTime={endMinTime}
                maxTime={endMaxTime}
                propName='EndDate'
                onChange={onChange}
                as={as}>
            </DateTimePicker>
        </>
    );
};
