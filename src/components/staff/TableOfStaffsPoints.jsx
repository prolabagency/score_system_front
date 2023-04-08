import React from 'react'
import { MonthManager } from '../../utils/MonthManager'
import PaginationButton from "../utils/PaginationButton";

const TableOfStaffsPoints = ({className = '', points}) => {

    const monthManager = new MonthManager()

    return (
        <>
            <table className={`responseve_table ${className}`}>
                <caption>Баллы за все время</caption>
                <thead>
                    <tr>
                        <th scope="col">Год</th>
                        <th scope="col">Месяц</th>
                        <th scope="col">Балл</th>
                        <th scope="col">Заметки</th>
                    </tr>
                </thead>
                <tbody>
                    {points.data.results.map((item, idx) => 
                        <tr key={idx}>
                            <td data-label="Год">{item.year}</td>
                            <td data-label="Месяц">{monthManager.get(item.month)}</td>
                            <td data-label="Балл">{item.value}</td>
                            <td data-label="Заметки">{item?.note ?? ''}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <PaginationButton manager={points} />
        </>
    )
}

export default TableOfStaffsPoints