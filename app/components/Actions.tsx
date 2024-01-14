'use client';

import { Button, Space } from 'antd';
import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { useReward } from 'react-rewards';

export const Actions: FC = () => {
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
    const { reward: emojiReward, isAnimating: isEmojiAnimating } = useReward(
        'emojiReward',
        'emoji',
        rewardOptions,
    );

    return (
        <Space wrap>
            <Button id="confettiReward" disabled={isConfettiAnimating} onClick={confettiReward}>
                Export to PDF
                <DownloadOutlined />
            </Button>

            <Button id="emojiReward" disabled={isEmojiAnimating} onClick={emojiReward}>
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
