import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Title } = Typography;

const News = () => {
  const [newsArr, setNewsArr] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { data: newsData, isFetching } = useGetCryptoNewsQuery('all')
  
  useEffect(() => {
    const filterdNews = newsData?.articles?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm)
    })
    setNewsArr(filterdNews?.length > 0 ? filterdNews : newsData?.articles);
  }, [newsData, searchTerm]);

  if (isFetching) return (<Loader />)

  return (
    <>
      <Col>
        <div className='search-crypto'>
          <Input placeholder='search' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
      </Col>
      <Row gutter={[24, 24]}>
        {
          newsArr?.map((article, index) => (
            <Col key={index} className="crypto-card" xs={24} sm={12} lg={6}>
              {console.log()}
              <Link to={`/news/${index}`}>
                <Card
                  title={article.title}
                  extra={<img className="crypto-image" src={article.urlToImage} />}
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