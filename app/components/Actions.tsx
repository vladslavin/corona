'use client';

import { Button, message, Space } from 'antd';
import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { useReward } from 'react-rewards';
import { DownloadCanvasAsPng } from '@/lib/ChartService';

export const Actions: FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const rewardOptions = { zIndex: 9, lifetime: 200, angle: 110, spread: 100 };
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward(
        'confettiReward',
        'confetti',
        rewardOptions,
    );
    const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward(
        'balloonsReward',
        'balloons',
        rewardOptions,
    );

    const handleDownload = async () => {
        const pieCanvas = document.querySelector('.pieChart>canvas') as HTMLCanvasElement;
        const barCanvas = document.querySelector('.barChart>canvas') as HTMLCanvasElement;
        if (pieCanvas && barCanvas) {
            DownloadCanvasAsPng('PieChart', pieCanvas);
            DownloadCanvasAsPng('BarChart', barCanvas);
            messageApi.open({
                type: 'success',
                content: 'Chart are downloading 🎉',
            });
        } else {
            messageApi.open({
                type: 'error',
                content: 'Chart could not be exported',
            });
        }
    };

    return (
        <Space wrap>
            {contextHolder}
            <Button onClick={handleDownload}>
                Export to PDF
                <DownloadOutlined />
            </Button>

            <Button id="confettiReward" disabled={isConfettiAnimating} onClick={confettiReward}>
                Notes (3)
                <AlignLeftOutlined />
            </Button>

            <Button id="balloonsReward" disabled={isBalloonsAnimating} onClick={balloonsReward}>
                Filter
                <FilterOutlined />
            </Button>
        </Space>
    );
};
