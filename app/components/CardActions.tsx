import { FC } from 'react';
import { Avatar, Button, Row, Space } from 'antd';
import { HeartFilled, HeartOutlined, LoadingOutlined, MessageOutlined } from '@ant-design/icons';

interface Props {
    avatarUrl?: string;
    isLoading: boolean;
    isLiked: boolean;
    onLike: () => void;
}

export const CardActions: FC<Props> = ({ avatarUrl, isLiked, isLoading, onLike }) => {
    const heartIcon = isLiked ? <HeartFilled /> : <HeartOutlined />;
    const icon = isLoading ? <LoadingOutlined /> : heartIcon;

    return (
        <Row key="space" justify="space-between" align="middle" className="horizontal-space">
            <Space>
                <Avatar key="avatar" size="default" src={avatarUrl} />
                <Button size="middle" icon={icon} onClick={onLike} disabled={isLoading} />
            </Space>
            <Button size="middle">
                3 <MessageOutlined />
            </Button>
        </Row>
    );
};
