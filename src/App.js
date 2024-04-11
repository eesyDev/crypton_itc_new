import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Cryptocurrencies, News, Exchanges, Homepage, CryptoDetail, NewsDetail } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/news' element={<News/>}/>
              <Route path='/exchanges' element={<Exchanges/>}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route path='/crypto/:coinId' element={<CryptoDetail/>}/>
              <Route path='/news/:newsId' element={<NewsDetail/>}/>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={4} style={{color: '#fff', textAlign: 'center'}}>
            Nurs Crypto Monster <br/> 
            All rights reserved
          </Typography.Title>
          <Space style={{color: '#fff', textAlign: 'center'}}>
              <Link to='/'>Home</Link>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news' >News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
