import React, { useState } from 'react'
import { Select, Typography, Row, Col, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data: cryptosList } = useGetCryptosQuery(100);

    const selectOnChanged = (value) => {
        console.log(value);
        setNewsCategory(value);
    }

    console.log(newsCategory);

    if (isFetching) return 'Loading...';

    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className='select-news'
                            placeholder="Select a Crypto"
                            optionFilterProp='children'
                            onChange={selectOnChanged}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
                            value={newsCategory}
                        >
                            <Option value='Cryptocurrency'>Cryptocurrency</Option>
                            {cryptosList?.data?.coins.map((coin) => (<Option value={coin.name} key={coin.uuid}>{coin.name}</Option>))}
                        </Select>
                    </Col>
                )}
                {(cryptoNews?.value.length < 1) &&
                    <p>There is no News</p>
                }
                {cryptoNews?.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={news.datePublished}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className='news-image-container'>
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news_image' />
                                </div>
                                <p>
                                    {news.description.length > 100 ?
                                        `${news.description.substring(0, 100)}`
                                        : news.description}
                                </p>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News