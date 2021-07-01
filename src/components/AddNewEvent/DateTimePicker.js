import React from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import RequiredSign from "./RequiredSign";

export const DateTimePicker = ({ value, propName, onChange, minDate, maxDate, minTime, maxTime, as }) => {
    return (
        <Form.Group as={as}>
            <Form.Label>{propName} <RequiredSign /></Form.Label>
            <DatePicker className="text-left form-control d-block"
                showTimeSelect
                dateFormat="Pp"
                minDate={minDate}
                maxDate={maxDate}
                minTime={minTime}
                maxTime={maxTime}
                required={true}
                style={{ color: 'black' }}
                selected={value} onChange={date => onChange(propName, date)} />

        </Form.Group>
    );
};

