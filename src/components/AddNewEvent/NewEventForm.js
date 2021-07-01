import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import cityProvider from '../../providers/city-provider';
import { City } from './City';
import { Timezone } from './Timezone';
import { InputWithHelpText } from './InputWithHelpText';
import "react-datepicker/dist/react-datepicker.css";
import { RangeDateTimePicker } from "./RangeDateTimePicker";
import { SelectControl } from './SelectControl';
import { EventLogoSelector } from './EventLogoSelector';


export const NewEventForm = () => {
    const now = new Date();
    const [event, setEvent] = useState({
        Title: '',
        Subdomain: '',
        City: '',
        StartDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, now.getHours(), 0),
        EndDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10, now.getHours(), 0),
        AttendeesExpected: '',
        PromoImage: ''
    });
    const [validated, setValidated] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const [cities, setCities] = useState([]);
    useEffect(() => {
        setCities(cityProvider());

    }, []);

    const handleFormChange = (e) => {
        const form = e.currentTarget;
        setCanSubmit(form.checkValidity() !== false);
    };

    function handleEventChange(propName, val) {
        const newEvent = { ...event };
        newEvent[propName] = val;
        setEvent(newEvent);
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    const selectedCity = cities.find(a => a.value === event.City);
    const timezones = cities.map(city => { return { label: city.timezone, value: city.value }; });
    const selectedTimeZone = timezones.find(a => a.value === event.City);
    const attendersExpectedList = [
        "", "<50", "50-200", "200-1000", "1000-5000"
    ];
    const exibitorsExpectedList = [
        "", "<50", "50-200", "200-1000", "1000-5000"
    ];
    return (
        <Form noValidate validated={validated} onChange={handleFormChange} onSubmit={handleSubmit} className="add-new-event-form">

            <InputWithHelpText
                value={event.Title}
                propName="Title"
                onChange={handleEventChange}
                helpText="Better create short and clear event title"
                required={true}
            />
            <InputWithHelpText
                value={event.Subdomain}
                propName="Subdomain"
                onChange={handleEventChange}
                pattern="^[a-zA-Z1-9]*$"
                patternErrorMessage="Unknown data. Special symbols not allowed"
                helpText="Better create short and clear event title"
                required={true}
            />
            <Form.Row>
                <City cities={cities} value={selectedCity} propName="City" onChange={handleEventChange} as={Col}></City>
                <Timezone timezones={timezones} value={selectedTimeZone} as={Col}></Timezone>
            </Form.Row>
            <Form.Row>
                <RangeDateTimePicker
                    startDate={event.StartDate}
                    endDate={event.EndDate}
                    onChange={handleEventChange}
                    as={Col}
                />
            </Form.Row>
            <Form.Row>
                <SelectControl value={event.AttendeesExpected} propName="AttendeesExpected" onChange={handleEventChange} list={attendersExpectedList} as={Col} />
                <SelectControl value={event.ExibitorsExpected} propName="ExibitorsExpected" onChange={handleEventChange} list={exibitorsExpectedList} as={Col} />
            </Form.Row>
            <EventLogoSelector value={event.PromoImage} onChange={handleEventChange}></EventLogoSelector>
            <div className="d-flex justify-content-center">
                <Button type="reset" className="btn-text-orrange">
                    Cancel
                </Button>
                <Button disabled={!canSubmit || !event.City} type="submit" className="btn-orrange">
                    Save & Continue
                </Button>
            </div>

            {/* <small>
                {JSON.stringify(event)}
            </small> */}
        </Form>
    );
};


