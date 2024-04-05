import React, { useState } from 'react';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, NumberOutlined, StopOutlined, TrophyOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const CryptoDetail = () => {
  const coinId = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId?.coinid);
  const coinDetails = data?.data?.coin;

  const timeStamps = ['3h', '24h', '7d', '30d', '1y', '2y', '3y', '5y'];
  // const volume = coinDetails["24hVolume"]
  const coinStats = [
    {title: 'Price to USD', value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`, icon: <DollarCircleOutlined/>},
    {title: 'Rank', value: coinDetails?.rank && coinDetails?.rank, icon: <DollarCircleOutlined/>},
    {title: '24h volume', value: `$ ${coinDetails?.volume && millify(coinDetails?.volume)}`, icon: <DollarCircleOutlined/>},
    {title: 'Market cap', value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`, icon: <DollarCircleOutlined/>},
    {title: 'ATH', value: `$ ${coinDetails?.allTimeHigh?.price && millify(coinDetails?.allTimeHigh?.price )}`, icon: <DollarCircleOutlined/>}
  ];

  const coinOtherStats = [
    {title: 'Number Of Markets', value: coinDetails?.numberOfMarkets, icon: <DollarCircleOutlined/>},
    {title: 'Number Of Exchanges', value: coinDetails?.numberOfExchanges, icon: <DollarCircleOutlined/>},
    {title: 'Aprroved Supply', value: coinDetails?.supply?.aprroved, icon: <DollarCircleOutlined/>},
    {title: 'Total Supply', value: coinDetails?.supply?.total, icon: <DollarCircleOutlined/>},
    {title: 'Circulating Supply', value: coinDetails?.supply?.circulating, icon: <DollarCircleOutlined/>}
  ]

  console.log(coinDetails);

  const { Title, Text } = Typography

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title className='coin-name'>{coinDetails?.name}</Title>
        <p>{coinDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply</p>
      </Col>
      <Select className='select-timeperiod'>
        {
          timeStamps?.map((date, i) => <Select.Option key={i}>{date}</Select.Option>)
        }
      </Select>
      <Col className='stats-contianer'>
        <Col className='coin-value-statistics mt-8'>
          <Col className='coin-value-statistics-heading'>
            <Title level={4}>
              {coinDetails?.name} value statistics
              <p>An overview showing the statistic of {coinDetails?.name} such as the base , the rank and trading volume</p>
            </Title>
          </Col>
          {
            coinStats.map(({icon, title, value}) => (
              <Col className='coin-stats' key={title}>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            ))
          }
        </Col>
        <Col className='coin-value-statistics mt-8'>
          <Col className='coin-value-statistics-heading'>
            <Title level={4}>
              {coinDetails?.name} other value statistics
              <p>An overview showing the statistic of {coinDetails?.name} such as the base , the rank and trading volume</p>
            </Title>
          </Col>
          {
            coinOtherStats.map(({icon, title, value}) => (
              <Col className='coin-stats' key={title}>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            ))
          }
        </Col>
        <Col className='coin-desc-link mt-8'>
          <Row>
            <Title level={4}>What is {coinDetails?.name}</Title>
            <Text>{coinDetails?.description}</Text>
          </Row>
          
        </Col>
        <Col className='coin-links mt-8'>
            <Title>{coinDetails?.name} links</Title>
            {coinDetails?.links?.map((link) => (
              <Row>
                <Title level={5}><a href={link.url} target="_blank">{link.name}</a></Title>
              </Row>
            ))}
          </Col>
      </Col>
    </Col>
  )
}

export default CryptoDetail