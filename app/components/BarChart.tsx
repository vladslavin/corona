'use client';

import { Card } from 'antd';
import dynamic from 'next/dynamic';
import { CardActionsContainer as CardActions } from './CardActionsContainer';
import { Loading } from './Loading';
import { useNewCovidCases } from '@/lib/hooks/useNewCovidCases';

const Bar = dynamic(() => import('@ant-design/charts').then((chart) => chart.Column), {
    ssr: false,
    loading: () => <Loading />,
});

export const BarChart = () => {
    const { data, isLoading } = useNewCovidCases();

    const config = {
        data,
        legend: {
            color: {
                position: 'bottom',
                layout: {
                    justifyContent: 'center',
                },
            },
        },
        scale: {
            color: { palette: ['#319E8C', '#9D79EE', '#67CBB1', '#51B7A0'] },
        },
        xField: 'NewCases',
        yField: 'TotalCases',
        grouped: true,
        colorField: 'Country',
        className: 'barChart',
    };

    return (
        <Card
            title="New / Total Covid Cases"
            actions={[<CardActions key="chart-actions" cardName="BarChart" />]}
        >
            {isLoading && <Loading />}
            {!isLoading && <Bar {...config} />}
        </Card>
    );
};
