import React from 'react';
import { NewEventFormHeader } from './NewEventFormHeader';
import { NewEventForm } from './NewEventForm';

export const EventFormContainer = () => {
    return (
        <div className="  d-flex justify-content-center">
            <div className="add-new-event-container">
                <NewEventFormHeader></NewEventFormHeader>
                <NewEventForm></NewEventForm>
            </div>

        </div>
    );
};
