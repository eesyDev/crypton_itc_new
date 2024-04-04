import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined, FundOutlined } from '@ant-design/icons'

import icon from '../img/cryptocurrency.png';


const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div className="logo-container">
        <Avatar src={icon}/>
        <Typography.Title style={{color: '#fff'}}>
          <Link to='/'>Nurs</Link>
        </Typography.Title>
      </div>

      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <Link to='/news' >News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar