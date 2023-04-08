import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {ActiveSidebarContext} from "../context";
import {MAIN} from "../utils/constance";
import useGetData from "../hooks/useGetData";
import {Loader} from "../components/ui/Loaders";
import UserCard from "../components/report/UserCard";
import TabOfPoints from "../components/report/TabOfPoints";
import FilterOfUserPointsForm from "../components/report/FilterOfUserPointsForm";
import {useSelector} from "react-redux";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const UserDetailPage = () => {

    const {id} = useParams()
    const auth = useSelector(state => state.auth)

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(MAIN)
        // eslint-disable-next-line
    }, [])

    const staff = useGetData({
        url: `/api/v1/auth/users/${id}/`,
        headers: {
            'Authorization': `Token ${auth.user.token}`
        },
        params: {}
    })

    const points = useGetData({
        url: `/api/v1/points/`,
        params: {
            staff: id,
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
                : <TabOfPoints points={points} />
            }
        </>
    );
};

export default UserDetailPage;