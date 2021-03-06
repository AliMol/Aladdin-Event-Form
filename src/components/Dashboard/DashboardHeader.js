import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SimpleLineIcon from 'react-simple-line-icons';
import DownloadIcon from './download.svg'
import PrinterIcon from './printer.svg'
const DashboardHeader = () => {
    return (
        <Navbar className="navbar-white" variant="light">
            <NavDropdown className="" title="EXPO 2020 Dubai UAE" disabled={true}>

            </NavDropdown>
            <Form inline className="ml-auto">
                <Button variant="link" className="d-none d-md-block">
                    <div className="d-flex">
                        <img src={PrinterIcon} />
                        <span className="ml-2">Print</span>
                    </div>
                </Button>
                <Button variant="link" className="d-none d-md-block" >
                    <div className="d-flex">
                        <img src={DownloadIcon} />
                        <span className="ml-2 d-none d-md-block">Download as PDF</span>
                    </div>
                </Button>
            </Form>
        </Navbar>
    );
};
export default DashboardHeader