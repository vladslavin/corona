import { Header as AppHeader } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { FC } from 'react';

interface Props {
    title: string;
}

export const Header: FC<Props> = ({ title }) => (
    <AppHeader>
        <Title level={3}>{title}</Title>
    </AppHeader>
);
