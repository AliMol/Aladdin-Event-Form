import React, { useState, useEffect } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardDeals from './DashboardDeals'
import MeetingScheduled from './MeetingScheduled'
import MeetingRating from './MeetingRating'
import CompaniesDataTable from './CompaniesDataTable'
import "../../styles/dashboard.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getDataFromServer from '../../providers/data-provider'

const Dashboard = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        (async () => {
            const dataFromServer = await getDataFromServer();
            const jsonData = await dataFromServer.json();
            console.log(jsonData);
            setData(jsonData);
        })();
    }, [])
    return (
        <div>
            <DashboardHeader />
            <div className="d-flex justify-content-center ">
                <div className="dashboard-widget-container">
                    <DashboardDeals data={data} />
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <div className="dashboard-widget-container">
                    <Row>
                        <Col>
                            <MeetingScheduled data={data} />
                        </Col>
                        <Col>
                            <MeetingRating data={data} />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="dashboard-widget-container">
                    <CompaniesDataTable data={data}></CompaniesDataTable>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
