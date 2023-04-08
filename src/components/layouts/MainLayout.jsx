import React, {useEffect, useState} from 'react';
import Nav from "../Nav";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import Sidebar from "../Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {ActiveSidebarContext} from "../../context";
import {refreshProfile} from "../../redux/auth/authSlice";
import Footer from "../Footer";

const MainLayout = ({role}) => {

    const auth = useSelector(state => state.auth)
    const [isOpenBar, setOpenBar] = useState(false)

    const location = useLocation();
    const redirectUrl = '/login/?' + new URLSearchParams({next: location.pathname}).toString()

    const dispatch = useDispatch()

    const [activeBar, setActiveBar] = useState()
    useEffect(() => {
        auth.isAuthenticated && dispatch(refreshProfile(auth.user))
    }, [])

    if (auth.isAuthenticated && auth.user.role !== role) {
        return <Navigate replace to={'/login/'} />
    }

    return !auth.isAuthenticated ? <Navigate replace to={redirectUrl} /> : (
        <ActiveSidebarContext.Provider value={{activeBar, setActiveBar}}>
            <div className='container mx-auto py-5'>
                <div className="flex lg:justify-between justify-center">
                    <div className="sidebar_flex_item">
                        <Sidebar isOpenBar={isOpenBar} setOpenBar={setOpenBar} role={role} />
                    </div>
                    <div className="content_flex_item">
                        <Nav isOpenBar={isOpenBar} setOpenBar={setOpenBar} />
                        <div className="frame"></div>
                        <main className='card_body'>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </ActiveSidebarContext.Provider>
    );
};

export default MainLayout;