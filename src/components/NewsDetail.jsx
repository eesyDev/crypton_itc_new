import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Col, Row } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Text } = Typography

const NewsDetail = () => {
    const { newsId } = useParams();
    const [searchTerm, setSearchTerm] = useState('all');
    const [news, setNews] = useState('');
    const { data: newsData, isFetching } = useGetCryptoNewsQuery(searchTerm);

    useEffect(() => {
        setNews(newsData?.articles[newsId])
    }, [newsData, newsId])

    console.error(news)
    return (
        <Row gutter={[24, 24]}>
            <Title>{news?.title}</Title>
            <Text>{news?.author}</Text>
            <Text>{news?.publishedAt}</Text>
            <img src={news?.urlToImage}/>
            <Text>{news?.description}</Text>
            <Text>{news?.content}</Text>
        </Row>
    )
}

export default NewsDetail