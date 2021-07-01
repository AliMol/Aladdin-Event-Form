import DateTimePickerHelper from '../DateTimePickerHelper';

test('areDaysInSameDay should return true when two dates are similar', () => {
    //arrange
    const date1 = new Date(2021, 1, 3, 14, 20);
    const date2 = new Date(2021, 1, 3, 19, 0);
    //act
    const actual = DateTimePickerHelper.areDaysInSameDay(date1, date2);
    //assert
    expect(actual).toBe(true);
})

test('areDaysInSameDay should return true when two dates are not similar', () => {
    //arrange
    const date1 = new Date(2021, 1, 3, 14, 20);
    const date2 = new Date(2021, 2, 5, 19, 0);
    //act
    const actual = DateTimePickerHelper.areDaysInSameDay(date1, date2);
    //assert
    expect(actual).toBe(false);
})

test('manipulateMinAndMaxTime should return now when startdate is today for startMinTime', () => {
    //arrange
    const now = new Date();
    const startDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        10,
        45
    );
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { startMinTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(startMinTime.getHours()).toBe(now.getHours());
    expect(startMinTime.getMinutes()).toBe(now.getMinutes());
});

test('manipulateMinAndMaxTime should return 00:00 when startdate is not today for startMinTime', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { startMinTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(startMinTime.getHours()).toBe(0);
    expect(startMinTime.getMinutes()).toBe(0);
});

test('manipulateMinAndMaxTime should return end date for startMaxTime', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { startMaxTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(startMaxTime.getHours()).toBe(19);
});

test('manipulateMinAndMaxTime should return start date for endMinTime', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { endMinTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(endMinTime.getHours()).toBe(14);
    expect(endMinTime.getMinutes()).toBe(20);
});

test('manipulateMinAndMaxTime should return 23:59 for endMaxTime', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { endMaxTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(endMaxTime.getHours()).toBe(23);
    expect(endMaxTime.getMinutes()).toBe(59);
});

test('manipulateMinAndMaxTime should return undefined for endMintime and endMaxTime when start and end are not equal', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 10,
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { endMinTime, endMaxTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(endMinTime).toBe(undefined);
    expect(endMaxTime).toBe(undefined);
});

test('manipulateMinAndMaxTime should return now for startMinTime when start and end are not equal and startdate is today', () => {
    //arrange
    const now = new Date();
    const startDate = now;
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 10,
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { startMinTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(startMinTime.getHours()).toBe(now.getHours());
    expect(startMinTime.getMinutes()).toBe(now.getMinutes());
});
test('manipulateMinAndMaxTime should return undefined for startMinTime and startMaxTime when start and end are not equal and startdate is not today', () => {
    //arrange
    const startDate = new Date(2021, 1, 3, 14, 20);
    const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 10,
        startDate.getHours() + 5,
        startDate.getMinutes()
    );
    //act
    const { startMinTime, startMaxTime } = DateTimePickerHelper.manipulateMinAndMaxTime(startDate, endDate);
    //assert
    expect(startMinTime).toBe(undefined);
    expect(startMaxTime).toBe(undefined);
});