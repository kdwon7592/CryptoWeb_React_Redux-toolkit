import React from 'react'
import { Spin, Typography } from 'antd'

const Loader = () => {
    return (
        <div className='loader'>
            <Spin />
            <Typography.Title level={5}> Now Loading...</Typography.Title>
        </div>
    )
}

export default Loader