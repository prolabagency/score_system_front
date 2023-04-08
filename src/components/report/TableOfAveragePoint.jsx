import React, {useEffect, useState} from 'react';
import {MonthManager} from "../../utils/MonthManager.js";
import useGetData from "../../hooks/useGetData.js";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import FilterOfAveragePoints from "./FilterOfAveragePoints.jsx";

const TableOfAveragePoint = ({className, useCurrentUserId = false, ...props}) => {

    const monthManager = new MonthManager()
    const auth = useSelector(state => state.auth)
    const { id } = useCurrentUserId ? {id: auth.user.id} : useParams()

    const points = useGetData({
        url: `/api/v1/auth/average_points/${id}/`,
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
        params: {}
    })


    useEffect(() => {

    }, [])

    return (
        <>
            <FilterOfAveragePoints className='mb-5' points={points} />
            <table className={`responseve_table ${className}`} {...props}>
                <caption>Баллы за все время</caption>
                <thead>
                <tr>
                    <th scope="col">Год</th>
                    <th scope="col">Месяц</th>
                    <th scope="col">Балл</th>
                </tr>
                </thead>
                <tbody>
                {points.data?.map((item, idx) =>
                    <tr key={idx}>
                        <td data-label="Год">{item.year}</td>
                        <td data-label="Месяц">{monthManager.get(item.month)}</td>
                        <td data-label="Балл">{item.value}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>

    );
};

export default TableOfAveragePoint;