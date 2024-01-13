import { Button, Space } from 'antd';
import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { FC } from 'react';

export const Actions: FC = () => (
    <Space wrap>
        <Button>
            Export to PDF
            <DownloadOutlined />
        </Button>

        <Button>
            Notes (3)
            <AlignLeftOutlined />
        </Button>

        <Button>
            Filter
            <FilterOutlined />
        </Button>
    </Space>
);
