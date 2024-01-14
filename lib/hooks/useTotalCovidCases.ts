import { useEffect, useState } from 'react';

export const useTotalCovidCases = () => {
    const covidCasesUrl =
        `${process.env.NEXT_PUBLIC_COVID_URL}?filters=areaType=nation;date=2022-12-31` +
        `&structure=${JSON.stringify({
            Country: 'areaName',
            Cases: 'cumCasesByPublishDate',
        })}`;

    const [cases, setCases] = useState([]);
    const [casesLoading, setCasesLoading] = useState(true);

    useEffect(() => {
        fetch(covidCasesUrl)
            .then((res) => res.json())
            .then(({ data }) => {
                setCases(data);
            })
            .finally(() => setCasesLoading(false));
    }, [covidCasesUrl]);

    return {
        data: cases,
        isLoading: casesLoading,
    };
};
