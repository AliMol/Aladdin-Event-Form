import React from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import SimpleLineIcon from 'react-simple-line-icons';
import RequiredSign from "./RequiredSign";

export const City = ({ as, value, onChange, cities, propName }) => {
    return (
        <>
            <Form.Group as={as}>
                <Form.Label>City <RequiredSign /></Form.Label>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder=""
                    components={{ DropdownIndicator: () => <SimpleLineIcon name="location-pin" />, IndicatorSeparator: () => null }}
                    options={cities}
                    value={value}
                    onChange={city => onChange(propName, city.value)} />

            </Form.Group>
        </>

    );
};
