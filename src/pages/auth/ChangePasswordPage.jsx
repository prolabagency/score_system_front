import React, {useContext, useEffect} from 'react';
import ChangePassword from "../../components/auth/ChangePassword";
import {ActiveSidebarContext} from "../../context";
import {PROFILE} from "../../utils/constance";

const ChangePasswordPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)

    useEffect(() => {
        setActiveBar(PROFILE)
        // eslint-disable-next-line
    }, [])

    return (
        <><ChangePassword /></>
    );
};

export default ChangePasswordPage;