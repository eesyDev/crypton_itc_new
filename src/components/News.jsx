import React, { useState } from 'react';
import { Col, Row, Input, Card, Typography } from 'antd';
import { Link } from'react-router-dom';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Title } = Typography;

const News = () => {
  const [searchTerm, setSearchTerm] = useState('all')
  const { data: newsData, isFetching} = useGetCryptoNewsQuery(searchTerm)
  console.log(newsData)

  if (isFetching) return(<Loader/>)

  return (
    <>
      <Col>
        <div className='search-crypto'>
            <Input placeholder='search' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>
        </div>
      </Col>
      <Row gutter={[24, 24]}>
      {
        newsData?.articles?.map((article) => (
          <Col key={article.url} className="crypto-card" xs={24} sm={12} lg={6}>
            <Link to={`/news/${article.url}`}>
              <Card
                title={article.title}
                extra={<img className="crypto-image" src={article.urlToImage}/>}
              >
                <p>{article.description}</p>
              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default News