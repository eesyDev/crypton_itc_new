import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const { data: coins, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, cryptosUpdate] = useState([]);


  useEffect(() => {
    const filterdCoins = coins?.data?.coins.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm)
    })
    cryptosUpdate(filterdCoins?.length > 0 ? filterdCoins : coins?.data?.coins);
  }, [coins, searchTerm]);

  if (isFetching) return(<Loader/>)

  return (
    <>
    {
      !simplified && (
        <div className='search-crypto'>
          <Input placeholder='search' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
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
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
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