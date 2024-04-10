import React, { useState } from 'react';
import { Col, Row, Select } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = () => {
  const [region, setRegion] = useState('US');

  const { data: newsData } = useGetCryptoNewsQuery('bitcoin')
  // getCryptoNews(region)
  console.log(newsData)

  const regionArr = ['US', 'EU', 'BR', 'AU', 'CA', 'FR', 'DE', 'HK', 'IN']

  return (
    <Col>
      <Select className='select-timeperiod' placeholder="Choose a region" onChange={(value) => setRegion(value)}>
        {
          regionArr?.map((reg, i) => <Select.Option key={i} value={reg}>{reg}</Select.Option>)
        }
      </Select>
    </Col>
  )
}

export default News