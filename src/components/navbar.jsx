import React from 'react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = props => {
    const menuItems = [
        {
            key: '',
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: 'cryptocyrrencies',
            icon: <FundOutlined />,
            label: <Link to="/cryptocyrrencies">Cryptocyrrencies</Link>,
        },
        {
            key: 'exchanges',
            icon: <MoneyCollectOutlined />,
            label: <Link to="/exchanges">Exchanges</Link>,
        },
        {
            key: 'news',
            icon: <BulbOutlined />,
            label: <Link to="/news">News</Link>,
        },
    ];

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Crypto World</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark' items={menuItems}>
            </Menu>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar