import React, { useContext, useEffect } from 'react'
import { ActiveSidebarContext } from '../../context'
import ProfileCard from "../../components/auth/ProfileCard";
import {PROFILE} from "../../utils/constance";

const ProfilePage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)

    useEffect(() => {
        setActiveBar(PROFILE)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <ProfileCard />
        </div>
    )
}

export default ProfilePage