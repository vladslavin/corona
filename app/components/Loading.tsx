import { Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loading = () => (
    <Row justify="center" align="middle" className="vertical-space">
        <LoadingOutlined className="loading-icon" />
    </Row>
);
