import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd';

ChartJS.register(...registerables)

const LineChart = ({ coinName, coinHistory, currentPrice }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push((coinHistory?.data?.history[i].price))
    }

    for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinTimestamp.push((coinHistory?.data?.history[i].timestamp))
    }

    

    const data = {
        labels: coinTimestamp,
        datasets: [{
            label: 'Price in USD',
            data: coinPrice,
            fill: false,
            borderColor: "#888888",
            backgroundColor: '#005808'
        }]
    }

    const  options = {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                },
            },
        },
    }
  return (
    <>
    <Row className='chart-header'>
        <Typography.Title level={2}>
            Chart
        </Typography.Title>
        <Col>
            <Typography.Title level={5}>Change: {coinHistory?.data?.change}</Typography.Title>
            <Typography.Title level={5}>Current: {coinName} Price: ${Math.floor(currentPrice)}</Typography.Title>
        </Col>
        <Line data={data} options={options}/>
    </Row>
    </>
  )
}

export default LineChart;