import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import GroupList from '../components/staff/GroupList'
import { ActiveSidebarContext } from '../context'
import useGetData from '../hooks/useGetData'
import { STAFFS } from '../utils/constance'

const HeadGroupListPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(STAFFS)
        // eslint-disable-next-line
    }, [])

    const auth = useSelector(state => state.auth)

    const groups = useGetData({
        url: '/api/v1/auth/groups/',
        params: {
            page_size: 30,
            heads: auth.user.id
        },
        headers: {
            'Authorization': `Token ${auth.user?.token}`
        }
    })

    return (
        <>
            <h3 className='mb-5 text-center'>Выберите группу</h3>
            <GroupList groups={groups} />
        </>
    )
}

export default HeadGroupListPage