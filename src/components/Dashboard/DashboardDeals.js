import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const DashboardDeals = ({ data }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    const changeSelectedCategory = (category) => {
        setSelectedCategory(category);
    }

    useEffect(() => {
        const newCategories = [];
        for (let prop in data) {
            if (data[prop]['Total']) {
                newCategories.push({ value: data[prop]['Total'], title: prop });
            }
        }
        setCategories(newCategories);
        if (newCategories.length) {
            changeSelectedCategory(newCategories[0])
        }
    }, [data])

    return (
        <div className="dashboard-widget">
            <div className="dashboard-widget-header">
                How many deals achieved?
            </div>
            <div className="dashboard-widget-content">
                <Row>
                    <Col md="auto">
                        <Row>
                            <DashboardDealsCategories
                                categories={categories}
                                selectedCategory={selectedCategory}
                                changeSelectedCategory={changeSelectedCategory}

                            />
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <Dropdown className="deals-time-range-selector">
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                Last 12 months
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="">Last Month</Dropdown.Item>
                                <Dropdown.Item href="">Last Day</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <DashboardDealsChart data={data} selectedCategory={selectedCategory}></DashboardDealsChart>
            </div>
        </div>
    );
};

export default DashboardDeals
const DashboardDealsCategories = ({ categories, selectedCategory, changeSelectedCategory }) => {

    return (
        categories.map(cat =>
            <Col key={cat.title} md={"auto"}
                className={`pt-0  clickable `}
                onClick={e => changeSelectedCategory(cat)}
            >
                <div className={`deals-category p-4  pt-0 d-flex flex-column ${selectedCategory && selectedCategory.title === cat.title ?
                    'deals-selected-category' : ''}`}>
                    <span className="deals-category-value">{cat.value}</span>
                    <span className="deals-category-title">{cat.title}</span>
                </div>

            </Col>
        )
    )
}

const DashboardDealsChart = ({ data, selectedCategory }) => {
    let chartData = [];
    if (selectedCategory) {
        chartData = data[selectedCategory.title].Details;
    }
    return (
        <ResponsiveContainer className="deals-chart" width="100%" height={250}>
            <BarChart
                data={chartData}
                barSize={40}
            >
                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                <XAxis dataKey="Period" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Amount" fill="#315ED8" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
