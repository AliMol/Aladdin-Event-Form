import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Wizard from './wizard.png'
export const CreateNewEventWizard = () => {
    return (
        <Row className="add-new-event-wizard">
            <Col><span>Add New Event</span>
            </Col>
            <Col>
                <div className="d-flex justify-content-center">
                    <div>
                        <img src={Wizard} className=""></img>
                    </div>
                </div>
            </Col>
            <Col></Col>
        </Row>
    );
};
