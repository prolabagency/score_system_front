import React, {useContext, useEffect} from 'react';
import {Loader} from "../components/ui/Loaders";
import UserCard from "../components/report/UserCard";
import {ActiveSidebarContext} from "../context";
import useGetData from "../hooks/useGetData";
import {useSelector} from "react-redux";
import TabOfPoints from "../components/report/TabOfPoints";
import {MAIN} from "../utils/constance";
import TableOfAveragePoint from "@/components/report/TableOfAveragePoint.jsx";

const MainPage = () => {

    const {setActiveBar} = useContext(ActiveSidebarContext)
    useEffect(() => {
        setActiveBar(MAIN)
        // eslint-disable-next-line
    }, [])

    const auth = useSelector(state => state.auth)

    return (
         <>
             <UserCard user={auth.user} className='mb-10' />
             <TableOfAveragePoint useCurrentUserId={true} />
         </>
    );
};

export default MainPage;