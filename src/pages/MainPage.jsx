import React, {useContext, useEffect} from 'react';
import {Loader} from "../components/ui/Loaders";
import UserCard from "../components/report/UserCard";
import {ActiveSidebarContext} from "../context";
import useGetData from "../hooks/useGetData";
import {useSelector} from "react-redux";
import TabOfPoints from "../components/report/TabOfPoints";
import {MAIN} from "../utils/constance";

const MainPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(MAIN)
        // eslint-disable-next-line
    }, [])

    const auth = useSelector(state => state.auth)

    const staff = useGetData({
        url: `/api/v1/auth/users/${auth.user.id}/`,
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
        params: {}
    })

    const points = useGetData({
        url: `/api/v1/points/`,
        params: {
            staff: auth.user.id,
            page_size: 15,
        },
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
        usePagination: true,
    })

    return (
        <>
            { staff.isFetching
                ?  <Loader />
                :  <UserCard user={staff.data} className='mb-10' />
            }

            { points.isFetching
                ? <Loader />
                : <TabOfPoints useCurrentUserId={true} points={points} />
            }
        </>
    );
};

export default MainPage;