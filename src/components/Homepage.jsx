import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import Cryptocurrencies from './Cryptocurrencies';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);;

  if (isFetching) return(<Loader/>)
  return (
    <>
      <Typography.Title>Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total cryptos" value="30000"/></Col>
        <Col span={12}><Statistic title='Total Exchanges' value='908240984092'/></Col>
        <Col span={12}><Statistic title='Total Market Cap' value="920930"/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value="10234924"/></Col>
        <Col span={12}><Statistic title='Total Markets' value='90903924'/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="20394i0294"/></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2}>
          Top 10 cryptos
        </Typography.Title>
        <Typography.Title level={4}>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={true}/>
    </>
  )
}

export default Homepage