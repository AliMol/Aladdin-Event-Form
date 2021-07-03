import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const MeetingScheduled = ({ data }) => {
    const meetings = data.Meetings;
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    const changeSelectedCategory = (category) => {
        setSelectedCategory(category);
    }

    useEffect(() => {
        const newCategories = [];
        for (let prop in meetings) {
            if (meetings[prop]['Total']) {
                newCategories.push({ value: meetings[prop]['Total'], title: prop });
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
                How many meetings scheduled?
            </div>
            <div className="dashboard-widget-content">
                <Row>
                    <Col md="10">
                        <Row>
                            <MeetingScheduledCategories
                                categories={categories}
                                selectedCategory={selectedCategory}
                                changeSelectedCategory={changeSelectedCategory}
                            />
                        </Row>
                    </Col>
                    <Col md={2} className="d-flex justify-content-end align-items-center">
                        <Dropdown className="deals-time-range-selector">
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                Last 30 Days
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="">Last Month</Dropdown.Item>
                                <Dropdown.Item href="">Last Day</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <MeetingScheduledChart data={meetings} selectedCategory={selectedCategory}></MeetingScheduledChart>
            </div>
        </div>
    );
};

export default MeetingScheduled
const MeetingScheduledCategories = ({ categories, selectedCategory, changeSelectedCategory }) => {
    return (
        categories.map(cat =>
            <Col key={cat.title} md={"auto"}
                className={`pt-0  clickable `}
                onClick={e => changeSelectedCategory(cat)}
            >
                <div className={`deals-category p-1  pt-0 d-flex flex-column ${selectedCategory.title === cat.title ?
                    'deals-selected-category' : ''}`}>
                    <span className="deals-category-value">{cat.value}</span>
                    <span className="deals-category-title">{cat.title}</span>
                </div>

            </Col>
        )
    )
}
const MeetingScheduledChart = ({ data, selectedCategory }) => {
    const chartData = [];
    if (selectedCategory) {
        for (let prop in data[selectedCategory.title]) {
            if (prop != "Total") {
                chartData.push({ name: prop, value: parseInt(data[selectedCategory.title][prop]) });
            }
        }
    }

    const COLORS = ['#F5C709', '#2C82BE', '#FD7138'];
    return (
        <ResponsiveContainer className="deals-chart" width="100%" height={250}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={800} height={400} >
                    <Pie
                        data={chartData}

                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        // paddingAngle={5}
                        dataKey="value"
                    >
                        {chartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                    <Legend direction={"horizontal"}
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        align="right" margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>

                    </Legend>
                </PieChart>
            </ResponsiveContainer>
        </ResponsiveContainer>
    )
}
