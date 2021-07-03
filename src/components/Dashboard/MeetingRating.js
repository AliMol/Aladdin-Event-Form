import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const MeetingScheduled = ({ data }) => {
    let ratings = [];
    if (data && data.Meetings) {
        ratings = data.Meetings.Rarings;
    }

    return (
        <div className="dashboard-widget">
            <div className="dashboard-widget-header">
                What’s meeting ratings?
            </div>
            <div className="dashboard-widget-content pt-4 pl-4">
                <Row>
                    <Col className="d-flex ml-2 justify-content-start font-weight-bold">
                        Meeting Ratings

                    </Col>

                </Row>
                <MeetingScheduledChart ratings={ratings}></MeetingScheduledChart>
            </div>
        </div>
    );
};
function uniqBy(a) {
    var result = [];
    a.forEach(function (item) {
        if (!result.some(a => a.Stars == item.Stars)) {
            result.push(item);
        }
    });
    return result
}
export default MeetingScheduled
const MeetingScheduledChart = ({ ratings }) => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        if (ratings) {
            const newChartData = uniqBy(ratings);
            newChartData.forEach(item => {
                if (item.Period) {
                    item.Stars = item.Period;
                }

                if (item.Stars && !item.Stars.includes("Star"))
                    item.Stars = item.Stars + " Star";
                item.Amount = parseInt(item.Amount);
            })

            setChartData(newChartData)
        }
    }, [ratings])
    const colors = [
        ["#FD7138"],
        ["#FB8656"],
        ["#FDA279"],
        ["#FDC6AC"],
        ["#DCDCDC"]
    ];

    const getColor = (length, index) => {
        return colors[index];
    };


    const yKey = "Amount";
    const xKey = "Stars";
    let ctx;

    const BAR_AXIS_SPACE = 30;
    return (
        <ResponsiveContainer className="deals-chart" width="100%" height={250}>
            <ResponsiveContainer>
                <BarChart
                    barSize={20}
                    data={chartData}
                    layout="vertical"

                    barCategoryGap={1}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >
                    <XAxis hide axisLine={false} type="number" />
                    <YAxis
                        yAxisId={0}
                        dataKey={xKey}
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontWeight: "Bold"
                        }}
                    />
                    <YAxis
                        orientation="right"
                        yAxisId={1}
                        dataKey={yKey}
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        mirror
                        tick={{
                            transform: `translate(${BAR_AXIS_SPACE}, 0)`,
                            fontWeight: "Bold"
                        }}
                    />
                    <Tooltip></Tooltip>
                    <Bar dataKey={yKey} barSize={20} radius={4} width={"80%"}>
                        {chartData.map((d, idx) => {
                            return <Cell key={d[xKey]} fill={getColor(chartData.length, idx)} />;
                        })}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </ResponsiveContainer>
    )
}
