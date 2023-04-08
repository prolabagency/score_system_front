import React, {useContext, useEffect} from 'react';
import ChangeProfile from "../../components/auth/ChangeProfile";
import {ActiveSidebarContext} from "../../context";
import {PROFILE} from "../../utils/constance";

const ChangeProfilePage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)

    useEffect(() => {
        setActiveBar(PROFILE)
        // eslint-disable-next-line
    }, [])

    return (
        <><ChangeProfile /></>
    );
};

export default ChangeProfilePage;