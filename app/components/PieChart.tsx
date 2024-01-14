'use client';

import dynamic from 'next/dynamic';
import { Loading } from './Loading';
import { Card } from 'antd';
import { CardActionsContainer as CardAction } from './CardActionsContainer';
import { useTotalCovidCases } from '@/lib/hooks/useTotalCovidCases';

const Pie = dynamic(() => import('@ant-design/charts').then((chart) => chart.Pie), {
    ssr: false,
    loading: () => <Loading />,
});

export const PieChart = () => {
    const { data, isLoading } = useTotalCovidCases();

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
        tooltip: {
            title: ({ Country }: { Country: string }) => Country,
        },
        scale: {
            color: { palette: ['#319E8C', '#9D79EE', '#67CBB1', '#51B7A0'] },
        },
        angleField: 'Cases',
        colorField: 'Country',
        innerRadius: 0.5,
        radius: 0.75,
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        className: 'pieChart',
    };

    return (
        <Card
            title="Covid Cases by end of 2022"
            actions={[<CardAction key="chart-actions" cardName="PieChart" />]}
        >
            {isLoading && <Loading />}
            {!isLoading && <Pie {...config} />}
        </Card>
    );
};
