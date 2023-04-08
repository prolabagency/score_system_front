import React, {useContext, useEffect} from 'react';
import { ActiveSidebarContext } from "../context";
import UserList from "../components/report/UserList";
import {MonthManager} from "../utils/MonthManager";
import useGetData from "../hooks/useGetData";
import FilterUserList from "../components/report/FilterUserList";
import {MAIN} from "../utils/constance";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
const UsersListPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    const monthManager = new MonthManager()
    const [searchParams] = useSearchParams();
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        setActiveBar(MAIN)
        // eslint-disable-next-line
    }, [])

    const users = useGetData({
        url: '/api/v1/auth/users/',
        params: {
            page_size: 15,
            group: searchParams.get('group') ?? null},
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
    })

    return (
        <div>
            <h3 className='mb-5 text-center'>Баллы за {monthManager.getCurrentMonth()}</h3>
            <FilterUserList className='mb-10' users={users} />
            <UserList users={users} />
        </div>
    );
};

export default UsersListPage;