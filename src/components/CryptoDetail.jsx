import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, NumberOutlined, ThunderboltOutlined, TrophyOutlined, ExclamationCircleOutlined, StopOutlined, CheckOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { useGetCryptoHistoryQuery } from '../services/cryptoHistoryApi';
import  LineChart  from './LineChart';

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timePeriod, setPeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod});

  const coinDetails = data?.data?.coin;
  // const volume24h = coinDetails["24hVolume"];
  // console.log(volume24h);

  const handleChangePeriod = (val) => {
    setPeriod(val)
  } 
  const timeStamps = ['3h', '24h', '7d', '30d', '1y', '2y', '3y', '5y'];
  // const volume = coinDetails["24hVolume"]
  const coinStats = [
    {title: 'Price to USD', value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`, icon: <DollarCircleOutlined/>},
    {title: 'Rank', value: coinDetails?.rank && coinDetails?.rank, icon: <NumberOutlined/>},
    {title: '24h volume', value: '4444', icon: <ThunderboltOutlined/>},
    {title: 'Market cap', value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`, icon: <DollarCircleOutlined/>},
    {title: 'ATH', value: `$ ${coinDetails?.allTimeHigh?.price && millify(coinDetails?.allTimeHigh?.price )}`, icon: <TrophyOutlined/>}
  ];

  const coinOtherStats = [
    { title: 'Number Of Markets', value: coinDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: coinDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: coinDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${coinDetails?.supply?.total && millify(coinDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${coinDetails?.supply?.circulating && millify(coinDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  const { Title, Text } = Typography;
  const { Option } = Select;

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title className='coin-name'>{coinDetails?.name}</Title>
        <p>{coinDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply</p>
      </Col>
      <Select className='select-timeperiod' placeholder="Choose a timeperiod" onChange={(value) => handleChangePeriod(value)}>
        {
          timeStamps?.map((date, i) => <Option key={i} value={date}>{date}</Option>)
        }
      </Select>
      <LineChart coinName={coinDetails?.name} coinHistory={coinHistory} currentPrice={coinDetails?.price}/>
      <Col className='stats-contianer'>
        <Col className='coin-value-statistics mt-8'>
          <Col className='coin-value-statistics-heading'>
            <Title level={4} className='coin-details-heading'>
              {coinDetails?.name} value statistics
            </Title>
            <p>An overview showing the statistic of {coinDetails?.name} such as the base , the rank and trading volume</p>
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
            <Title level={4} className='coin-details-heading'>
              {coinDetails?.name} other value statistics
            </Title>
            <p>An overview showing the statistic of {coinDetails?.name} such as the base , the rank and trading volume</p>
          </Col>
          {
            coinOtherStats.map(({icon, title, value}) => (
              <Col className='coin-stats' key={title}>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='coin-details-heading stats'>{value}</Text>
              </Col>
            ))
          }
        </Col>
        <Col className='coin-desc-link mt-8'>
          <Row>
            <Title level={4} className='coin-details-heading'>What is {coinDetails?.name}</Title>
            <Text>{coinDetails?.description}</Text>
          </Row>
          
        </Col>
        <Col className='coin-links mt-8'>
            <Title level={4} className='coin-details-heading'>{coinDetails?.name} links</Title>
            {coinDetails?.links?.map((link, index) => (
              <Row key={index}>
                <Title level={5} ><a href={link.url} target="_blank">{link.name}</a></Title>
              </Row>
            ))}
          </Col>
      </Col>
    </Col>
  )
}

export default CryptoDetail