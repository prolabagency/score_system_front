import React, {useContext, useEffect} from 'react';
import {ActiveSidebarContext} from "../context";
import {MonthManager} from "../utils/MonthManager";
import HeadList from "../components/report/HeadList";
import useGetData from "../hooks/useGetData";
import {HEAD_ROLE, HEADS} from "../utils/constance";
import FilterOfHeadForm from "../components/report/FilterOfHeadForm";
import {useSelector} from "react-redux";

const HeadListPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    const monthManager = new MonthManager()

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        setActiveBar(HEADS)
        // eslint-disable-next-line
    }, [])

    const users = useGetData({
        url: '/api/v1/auth/users/',
        params: {
            page_size: 15,
            role: HEAD_ROLE,
            include_head_report: true,
        },
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
    })

    return (
        <div>
            <h3 className='mb-5 text-center'>Отчет советников за {monthManager.getCurrentMonth()}</h3>
            <FilterOfHeadForm users={users} className='mb-10' />
            <HeadList users={users} />
        </div>
    );
};

export default HeadListPage;