import React, {useContext, useEffect} from 'react';
import { ActiveSidebarContext } from "../context";
import useGetData from "../hooks/useGetData";
import {useSelector} from "react-redux";
import StaffsList from "../components/staff/StaffsList";
import {MonthManager} from "../utils/MonthManager";
import {STAFFS} from "../utils/constance";
import { useSearchParams } from "react-router-dom";


const StaffsListPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(STAFFS)
        // eslint-disable-next-line
    }, [])

    const auth = useSelector(state => state.auth)
    const monthManager = new MonthManager()

    const [searchParams] = useSearchParams();

    const staffs = useGetData({
        url: '/api/v1/auth/users/',
        params: {
            page_size: 15,
            exclude_user: true,
            group: searchParams.get('group') ?? null
        },
        headers: {
            'Authorization': `Token ${auth.user?.token}`
        }
    })

    return (
        <>
            <h3 className='mb-5 text-center'>Баллы за {monthManager.getCurrentMonth()}</h3>
            <StaffsList staffs={staffs}/>
        </>
    )
};

export default StaffsListPage;