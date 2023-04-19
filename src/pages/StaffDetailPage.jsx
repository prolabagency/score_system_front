import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import { useSelector } from 'react-redux'
import { ActiveSidebarContext } from '../context'
import StaffCard from '../components/staff/StaffCard'
import { Loader } from '../components/ui/Loaders'
import TableOfStaffsPoints from '../components/staff/TableOfStaffsPoints.jsx'
import FilterPointForm from '../components/staff/FilterPointForm'
import {STAFFS} from "../utils/constance";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const StaffDetailPage = () => {

    const {id} = useParams()
    const auth = useSelector(state => state.auth)

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(STAFFS)
        // eslint-disable-next-line
    }, [])

    const staff = useGetData({
        url: `/api/v1/auth/users/${id}/`,
        params: {},
        headers: {
            'Authorization': `Token ${auth.user?.token}`
        }
    })

    const points = useGetData({
        url: `/api/v1/points/`,
        params: {
            staff: id,
            head: auth.user.id,
            page_size: 15,
        },
        headers: {
            'Authorization': `Token ${auth.user?.token}`
        },
        usePagination: true,
    })

    // useEffect(() => {
    //     points.setParams({})
    //     // eslint-disable-next-line
    // }, [staff.data])

    return (
        <>
            { staff.isFetching
                ?  <Loader /> 
                :  <StaffCard user={staff.data} className='mb-10' setUser={staff.setData} />
            } 
             
            <FilterPointForm className='mb-10' points={points} />

            { points.isFetching
                ?   <Loader /> 
                :   <TableOfStaffsPoints points={points} />
            }
            <EmptyCard manager={points} className='mt-5' />
        </>        
    )
}

export default StaffDetailPage