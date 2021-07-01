import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RequiredSign from './RequiredSign';
import { useRef } from 'react';
import { EventLogo } from './EventLogo';

export const EventLogoSelector = ({ value, onChange }) => {
    const inputFile = useRef(null);
    const [fileIsBig, setFileIsBig] = useState(false);
    const handleUploadFile = (e) => {
        console.log(e.target.files[0]);
        if (e.target.files.length && e.target.files[0].size > 5e+6) {
            setFileIsBig(true);
            inputFile.current.value = "";
            return;
        }
        setFileIsBig(false);
        onChange("PromoImage", e.target.files[0]);
    };
    const chooseFile = () => {
        inputFile.current.click();
    };


    return (
        <>
            <div className="mb-2">Event Promo image <RequiredSign /></div>
            <Form.Group as={Row}>
                <Col>
                    <Row>
                        <Col md={'auto'}>
                            <Button onClick={chooseFile} variant="light" className="choose-file-button">Choose file</Button>
                        </Col>
                        <Col className="d-flex justify-content-start">
                            <span>
                                {value ? value.name : "No file choosen"}
                            </span>
                        </Col>
                    </Row>
                    <p className="text-danger">{fileIsBig ? 'File is too big' : ''}</p>
                    <p className="logo-selector-description">
                        👉 This image will be shown as event preview in Web, iOS and Android AladdinB2B Apps.

                        <p className="mt-4">
                            Maximum upload file size is 5 Mb. Allowed file extensions: png, jpeg, jpg, tiff, gif, pdf
                        </p>
                    </p>
                </Col>

                <Col className="d-flex justify-content-end" onClick={chooseFile}>
                    <div className="logo-selector-box">
                        <input type='file' id='file' ref={inputFile} onChange={handleUploadFile} required accept="image/*" />
                        <EventLogo logo={value}></EventLogo>
                    </div>
                </Col>
            </Form.Group>
        </>

    );
};
