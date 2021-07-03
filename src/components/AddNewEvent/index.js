import React from 'react'
import '../../styles/addNewEvent.css'
import { CreateNewEventWizard } from './CreateNewEventWizard'
import { EventFormContainer } from './EventFormContainer'

const AddNewEvent = () => {
    return (
        <div>
            <CreateNewEventWizard></CreateNewEventWizard>
            <EventFormContainer>

            </EventFormContainer>
        </div>
    )
}

export default AddNewEvent
