
export default class DateTimePickerHelper {
    static areDaysInSameDay(date1, date2) {
        return date1.getYear() === date2.getYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    }

    static addMinuteToDate = (datetime, minuteToAdd) => {
        return new Date(2020, 1, 1, datetime.getHours(), datetime.getMinutes() + minuteToAdd);
    };
    static manipulateMinAndMaxTime = (startDate, endDate) => {


        const startDateIsToday = DateTimePickerHelper.areDaysInSameDay(startDate, new Date());



        const minimumTimeInDay = new Date(2020, 1, 1, 0, 0);
        const maximumTimeInDay = new Date(2020, 1, 1, 23, 59);

        let startMinTime = new Date();

        if (startDateIsToday) {
            startMinTime = new Date();
        } else {
            startMinTime = minimumTimeInDay;
        }


        let startMaxTime = endDate;
        let endMinTime = startDate;
        let endMaxTime = maximumTimeInDay;

        const areDaysInSameDay = DateTimePickerHelper.areDaysInSameDay(startDate, endDate);
        if (!areDaysInSameDay) {
            endMinTime = undefined;
            endMaxTime = undefined;
            if (!startDateIsToday) {
                startMinTime = undefined;
                startMaxTime = undefined;
            }
        }

        return { startMinTime, startMaxTime, endMinTime, endMaxTime };
    };
}
