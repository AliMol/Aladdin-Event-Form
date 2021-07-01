import React from 'react';
import Form from 'react-bootstrap/Form';
import RequiredSign from "./RequiredSign";

export const InputWithHelpText = ({ value, propName, pattern, onChange, helpText, required, patternErrorMessage, as }) => {
    let hasError = false;
    let errorMessage = "";
    if (pattern) {
        var re = new RegExp(pattern);
        if (!re.test(value)) {
            hasError = true;
            errorMessage = patternErrorMessage;
        }
    }
    function ErrorMessage() {
        if (!hasError) {
            return <></>;
        }
        return (
            <Form.Text className="text-danger">
                {errorMessage}
            </Form.Text>
        );
    }

    function HelpText() {
        if (value) {
            return <></>;
        }
        return (<Form.Text className="text-muted">
            {helpText}
        </Form.Text>);
    }
    return (
        <Form.Group as={as}>
            <Form.Label>{propName} {required && <RequiredSign />}</Form.Label>
            <Form.Control type="text" value={value} required={required} pattern={pattern} onChange={(e) => onChange(propName, e.target.value)} />
            <HelpText />
            <ErrorMessage />
        </Form.Group>
    );
};
