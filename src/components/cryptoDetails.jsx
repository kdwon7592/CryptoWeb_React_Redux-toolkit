import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { millify } from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'

const { Title } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();

    return (
        <div>
            {coinId}
        </div>
    )
}

export default CryptoDetails