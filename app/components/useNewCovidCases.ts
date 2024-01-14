import { useEffect, useState } from 'react';

export const useNewCovidCases = () => {
    const covidCasesUrl =
        `${process.env.NEXT_PUBLIC_COVID_URL}?filters=areaType=nation;date=2021-12-31` +
        `&structure=${JSON.stringify({
            Country: 'areaName',
            NewCases: 'newCasesByPublishDate',
            TotalCases: 'cumCasesByPublishDate',
        })}`;

    const [newCases, setNewCases] = useState([]);
    const [casesLoading, setCasesLoading] = useState(true);

    useEffect(() => {
        fetch(covidCasesUrl)
            .then((res) => res.json())
            .then(({ data }) => {
                setNewCases(data);
            })
            .finally(() => setCasesLoading(false));
    }, [covidCasesUrl]);

    return {
        data: newCases,
        isLoading: casesLoading,
    };
};
