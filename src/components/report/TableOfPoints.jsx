import React from 'react';
import {MonthManager} from "../../utils/MonthManager.js";

const TableOfPoints = ({className = '', points, ...props}) => {

    const monthManager = new MonthManager()

    return (
        <table className={`responseve_table ${className}`} {...props}>
            <caption>Баллы за все время</caption>
            <thead>
            <tr>
                <th scope="col">Советник</th>
                <th scope="col">Год</th>
                <th scope="col">Месяц</th>
                <th scope="col">Балл</th>
                <th scope="col">Заметки</th>
            </tr>
            </thead>
            <tbody>
            {points.data.results?.map((item, idx) =>
                <tr key={idx}>
                    <td data-label="Советник">{item.head_detail.get_full_name}</td>
                    <td data-label="Год">{item.year}</td>
                    <td data-label="Месяц">{monthManager.get(item.month)}</td>
                    <td data-label="Балл">{item.value}</td>
                    <td data-label="Заметки">{item?.note ?? ''}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default TableOfPoints;