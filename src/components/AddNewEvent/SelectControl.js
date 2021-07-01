import React from 'react';
import Form from 'react-bootstrap/Form';

export const SelectControl = ({ value, propName, onChange, list, as }) => {
    return (
        <Form.Group as={as}>
            <Form.Label>{propName}</Form.Label>
            <Form.Control as="select" value={value} onChange={e => onChange(propName, e.target.value)}>
                {list.map(a => <option key={a}>{a}</option>)}
            </Form.Control>
        </Form.Group>
    );
};
