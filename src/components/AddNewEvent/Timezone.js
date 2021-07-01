import React from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import SimpleLineIcon from 'react-simple-line-icons';

export const Timezone = ({ timezones, value, as }) => {
    return (
        <Form.Group as={as}>
            <Form.Label>Timezone</Form.Label>
            <Select
                isDisabled={true}
                className="basic-single"
                classNamePrefix="select"
                value={value}
                placeholder=""
                components={{ DropdownIndicator: () => <SimpleLineIcon name="clock" />, IndicatorSeparator: () => null }}
                options={timezones} />
        </Form.Group>
    );
};
