import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: coins, isFetching } = useGetCryptosQuery(count);

  const [cryptos, cryptosUpdate] = useState([]);

  useEffect(() => {
    cryptosUpdate(coins?.data?.coins);
  }, [coins]);

  console.log(cryptos)

  return (
    <>
    {
      !simplified && (
        <div className='search-crypto'>
          <Input placeholder='search'/>
        </div>
      )
    }
    <Row className='crypto-card-containeer' gutter={[24, 24]}>
      {
        cryptos?.map((crypto) => (
          <Col key={crypto.uuid} className="crypto-card" xs={24} sm={12} lg={6}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl}/>}
              >
                <p>Price: {crypto.price}</p>
                <p>Market Cap: {crypto.marketCap}</p>
                <p>Daily change: {crypto.change}</p>
              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default Cryptocurrencies;